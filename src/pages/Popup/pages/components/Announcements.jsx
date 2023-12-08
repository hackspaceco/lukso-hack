import React from 'react';

export default function Announcements() {
  const announcements = [
    {
      header: '⏰🏗️ BuildUP #2 Submission Prep! 🏗️⏰',
      body: 'As the deadline approaches, review the challenge criteria carefully to ensure your project meets all requirements. Also, double-check that your Universal Profile address is updated in your buidlbox account! 🎁We are super excited to check out your projects!',
      timePosted: 'Posted 15 hours ago',
      link: 'https://app.buidlbox.io/lukso/build-up-2',
    },
    {
      header: '🤝 Looking for teammates or a project to join ?',
      body: 'Chat with other buidlers on the LUKSO Discord server, we have dedicated channels for all hackathon participants!',
      timePosted: 'Posted 14 days ago',
      link: 'https://discord.gg/fgkhCmDu',
    },
  ];

  const handleAnnouncementClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div>
      <p className='heading6' style={{color: '#ff005b'}}>Official Announcements</p>
      {announcements.map((announcement, index) => (
        <div key={index} className="announceBox ss-pb-2 my-3">
          <div className="homeInput" style={{ color: 'white' }}>
            <div className='mb-2'>
              <span
                onClick={() => handleAnnouncementClick(announcement.link)}
                style={{ cursor: 'pointer', fontWeight: 'bold', }}
              >
                {announcement.header}
              </span>
            </div>
            <div>{announcement.body}</div>
            <div style={{ fontSize: '0.8rem', marginTop: '0.5rem' }}>
              {announcement.timePosted}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
