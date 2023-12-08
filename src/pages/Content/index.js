import { InjectHome } from './InjectHome';
import ReactDOM from 'react-dom';
import React from 'react';

document.addEventListener(
  'DOMContentLoaded',
  function () {
    const reactRenderDiv = document.createElement('div');
    reactRenderDiv.setAttribute('id', 'element');
    document.body.append(reactRenderDiv);

    const root = ReactDOM.createRoot(reactRenderDiv);
    root.render(<InjectHome />);
  },
  false
);