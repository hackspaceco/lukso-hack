import React, { useState } from 'react';
import { ButtonP } from '../../ui_components/Button';

export default function Documentation() {

  const navigateToDocumentation = () => {
    // Replace 'https://your-link.com' with the actual link you want to open
    const link = 'https://docs.lukso.tech/';
    window.open(link, '_blank');
  };

  const navigateToVideos = () => {
    // Replace 'https://your-link.com' with the actual link you want to open
    const link = 'https://www.youtube.com/watch?v=DMpeMswK12w&t=313s';
    window.open(link, '_blank');
  };
  const navigateToPlayground = () => {
    // Replace 'https://your-link.com' with the actual link you want to open
    const link = 'https://github.com/lukso-network/lukso-playground';
    window.open(link, '_blank');
  };
  const navigateToDapps = () => {
    // Replace 'https://your-link.com' with the actual link you want to open
    const link = 'https://github.com/lukso-network/example-dapps';
    window.open(link, '_blank');
  };
  const navigateToKit = () => {
    // Replace 'https://your-link.com' with the actual link you want to open
    const link = 'https://lukso.notion.site/LUKSO-Media-Kit-408464fd3b0a4ba19b8d40d85c88f96c';
    window.open(link, '_blank');
  };


  return (
    <div>
      <div className=" ss-pb-2">
        <div className="my-3">
          <ButtonP
            onClick={navigateToDocumentation}
            style={{ backgroundColor: '#ff005b', color: 'white' }}
          >
         LUKSO Documentation
          </ButtonP>
        </div>
        <div>
          <ButtonP
            onClick={navigateToVideos}
            style={{ backgroundColor: '#ff005b', color: 'white' }}
          >
           Videos & Workshops
          </ButtonP>
        </div>
        <div className="my-3">
          <ButtonP
            onClick={navigateToPlayground}
            style={{ backgroundColor: '#ff005b', color: 'white' }}
          >
           LUKSO playground
          </ButtonP>
        </div>
        <div className="mb-3">
          <ButtonP
            onClick={navigateToDapps}
            style={{ backgroundColor: '#ff005b', color: 'white' }}
          >
           Example Dapps
          </ButtonP>
        </div>
        <div className="my˝-3">
          <ButtonP
            onClick={navigateToKit}
            style={{ backgroundColor: '#ff005b', color: 'white' }}
          >
            Media kit
          </ButtonP>
        </div>
      </div>
    </div>
  );
}
