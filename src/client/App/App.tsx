import React, { useState } from 'react';

interface AppProps {
  title: string;
  version: string;
}

const Application: React.FC<AppProps> = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <main>
      <div className="main-heading">
        <img
          src="assets/images/logo.png"
          width="32"
          title="Codesbiome"
        />
        <h1>
          {props.title}
        </h1>
      </div>
      <p className="main-teaser">
        Custom boilerplate for rapid development of Desktop Applications.
        <br />
        This project makes use of Electron, React, Typescript, Webpack to
        serve the best environment for development with hot-reloading of
        modules.
      </p>
      <div className="versions">
        <span>
          ERWT
          {' '}
          <span>
            {props.version}
          </span>
        </span>
        <span>
          Electron
          {' '}
          <span id="electron-version" />
        </span>
        <span>
          Chrome
          {' '}
          <span id="chrome-version" />
        </span>
        <span>
          Node
          {' '}
          <span id="node-version" />
        </span>
      </div>
      <p className="main-teaser small">
        Click below button to update the application &quot;counter&quot;
        state. Components will update their states using
        Hot-Module-Replacement technique, without needing to refresh/reload
        whole application.
      </p>
      <button onClick={() => setCounter(counter + 1)}>
        Counter
        {' '}
        <span>
          {counter}
        </span>
      </button>
    </main>
  );
};

export default Application;
