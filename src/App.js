import React from 'react';
import './App.css';
import htmlFile from './files/Condescending_Archimedes_January_2019 Anonymized.html';

function App() {
  return (
    <div dangerouslySetInnerHTML={ {__html: htmlFile} }>
      
    </div>
  );
}

export default App;
