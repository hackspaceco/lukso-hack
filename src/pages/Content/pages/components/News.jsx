import React from 'react';

export default function News() {
  const announcements = [
    {
      header: 'Next Block EXpo 2023 🚀',
      body: 'Join us at Next Block Expo happening on 4th - 5th December 2023! Click the link to book your ticket and secure your spot. 🎟️',
      timePosted: '',
      link: 'https://nextblockexpo.com/',
    },
    {
      header: 'DevConnect Istanbul 🌐',
      body: 'Join us for DevConnect Istanbul happening on 13th - 19th November 2023! Click the link to register for the event. 📅',
      timePosted: '',
      link: 'https://devconnect.org/',
    },
  ];

  const handleAnnouncementClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div>
      <p className="heading6 mb-2" style={{ color: '#ff005b' }}>
        Community News
      </p>
      {announcements.map((announcement, index) => (
        <div key={index} className="announceBox ss-pb-2 my-3">
          <div className="homeInput" style={{ color: 'white' }}>
            <div className="mb-2">
              <span
                className='heading6'
                onClick={() => handleAnnouncementClick(announcement.link)}
                style={{ cursor: 'pointer', }}
              >
                {announcement.header}
              </span>
            </div>
            <div className='heading7'>{announcement.body}</div>
            <div style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
              {announcement.timePosted}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
