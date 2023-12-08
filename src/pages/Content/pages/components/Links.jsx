import React from 'react';
import { ButtonP } from '../../ui_components/Button';

export default function Links() {

  const navigateToDiscord = () => {
    // Replace 'https://your-link.com' with the actual link you want to open
    const link = 'https://discord.com/invite/lukso';
    window.open(link, '_blank');
  };

  const navigateToGithub = () => {
    // Replace 'https://your-link.com' with the actual link you want to open
    const link = 'https://github.com/lukso-network';
    window.open(link, '_blank');
  };
  const navigateToTwitter = () => {
    // Replace 'https://your-link.com' with the actual link you want to open
    const link = 'https://twitter.com/lukso_io';
    window.open(link, '_blank');
  };
  const navigateToHackathons = () => {
    // Replace 'https://your-link.com' with the actual link you want to open
    const link = 'https://app.buidlbox.io/lukso/build-up-2';
    window.open(link, '_blank');
  };
  const navigateToVideos = () => {
    // Replace 'https://your-link.com' with the actual link you want to open
    const link = 'https://www.youtube.com/@LUKSOBlockchain';
    window.open(link, '_blank');
  };


  return (
    <div>
      <div className=" ss-pb-2">
        <div className="my-3">
          <ButtonP
            onClick={navigateToDiscord}
            style={{ backgroundColor: '#ff005b', color: 'white' }}
          >
         Discord Channel
          </ButtonP>
        </div>
        <div>
          <ButtonP
            onClick={navigateToGithub}
            style={{ backgroundColor: '#ff005b', color: 'white' }}
          >
           Lukso Github
          </ButtonP>
        </div>
        <div className="my-3">
          <ButtonP
            onClick={navigateToTwitter}
            style={{ backgroundColor: '#ff005b', color: 'white' }}
          >
           Twitter
          </ButtonP>
        </div>
        <div className="mb-3">
          <ButtonP
            onClick={navigateToHackathons}
            style={{ backgroundColor: '#ff005b', color: 'white' }}
          >
           Live Hackathon
          </ButtonP>
        </div>
        <div className="my˝-3">
          <ButtonP
            onClick={navigateToVideos}
            style={{ backgroundColor: '#ff005b', color: 'white' }}
          >
            Youtube
          </ButtonP>
        </div>
      </div>
    </div>
  );
}
