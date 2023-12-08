import React, { useState } from 'react';
import Input from '../../ui_components/Input';
import { ButtonP } from '../../ui_components/Button';
import { useGlobalContext } from '../../context/globalContext';
import Message from './Message';

export default function HeaderDev() {
  const { state, updateError } = useGlobalContext();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const getOpenAIResponse = async (userInput) => {
    try {
      const API_KEY = process.env.API_KEY;
      const API_URL = process.env.API_URL;
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content:
                'You are a Lukso GPT assistant, specifically designed to assist developers in navigating Lukso blockchain. Provide detailed explanations, relevant links, and explain technical concepts. Format your responses in well-structured and highlighted markdown to enhance readability.',
            },
            { role: 'user', content: userInput },
          ],
        }),
      };

      const response = await fetch(API_URL, requestOptions);
      const data = await response.json();
      const generatedMessage =
        data.choices[0]?.message?.content || 'No response from OpenAI.';

      if (generatedMessage === 'None') {
        // Make a recursive call without the system prompt
        const recursiveResponse = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`,
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: userInput }],
          }),
        });

        const recursiveData = await recursiveResponse.json();
        const recursiveGeneratedMessage =
          recursiveData.choices[0]?.message?.content ||
          'No response from OpenAI.';

        return recursiveGeneratedMessage;
      } else {
        return generatedMessage;
      }
    } catch (error) {
      console.error('Error fetching response from OpenAI:', error);
      throw new Error('Error fetching response from OpenAI.');
    }
  };

  const onStateSubmit = async () => {
    if (input.trim() !== '') {
      try {
        // Add the user's message to the messages array with loading state
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: 'user', content: input, isLoading: true },
        ]);

        setInput('');

        // Set a mock response while waiting for the actual response
        const mockResponse = 'Getting Response...';
        setMessages((prevMessages) => [
          ...prevMessages,
          { role: 'assistant', content: mockResponse, isLoading: true },
        ]);

        // Get response from OpenAI
        const response = await getOpenAIResponse(input);

        // Update the assistant's message with the actual response
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1), // Remove the mock response
          { role: 'assistant', content: response, isLoading: false },
        ]);

        // Update the global context or perform other actions based on the response
        // You may replace this with your actual logic
        // updatePageDetail(input, chain);
      } catch (error) {
        console.error('Error processing user input:', error);
        updateError('Error processing user input.');
      }
    }
  };

  return (
    <div className="ss-pb-3">
      <div className="promptHeader">
        {/* Display the chat messages */}
        <div className="chat-messages">
          {messages.map((message, index) => (
            <Message
              key={index}
              role={message.role}
              content={message.content}
              isLoading={message.isLoading}
            />
          ))}
        </div>

        {/* Input for user messages */}
        <div className="promptSearchHeader homeInput">
          <Input
            placeholder={
              messages.length === 0
                ? 'How can I assist with what you are building on Lukso ?'
                : 'Message LuksoGPT...'
            }
            value={input}
            onChange={(e) => {
              updateError('');
              setInput(e.target.value);
            }}
          />
        </div>
      </div>

      <div>
        <ButtonP
          onClick={onStateSubmit}
          style={{ backgroundColor: '#ff005b', color: 'white' }}
        >
          {state.apiLoader ? <>Loading...</> : <>Message LUKSOGPT</>}
        </ButtonP>
      </div>
    </div>
  );
}
