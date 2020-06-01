import React from 'react';
import './App.css';
import Annotator from './components/Annotator';
import htmlFile from './files/Condescending_Archimedes_January_2019 Anonymized.html';

function App() {
  return (
    <div>
      <header className="title">Document Annotator</header>
      <div className="container">
        <Annotator file={htmlFile} />
      </div>
    </div>
  );
}

export default App;
