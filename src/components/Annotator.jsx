import React from 'react';
import Document from './Document';
import styles from '../styles/Annotator.module.css';

function Annotator({file}) {
  const {container, annotations, document_styles} = styles;
  return (
    <div className={container}>
      <span className={document_styles}><Document file={file} /></span>
      <div className={annotations}>Annotations will go here</div>
    </div>
  )
}

export default Annotator;
