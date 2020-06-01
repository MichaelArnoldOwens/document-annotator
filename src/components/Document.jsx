import React from 'react';
import styles from '../styles/Document.module.css'
function Document({file}) {
  const {container} = styles;
  return <div className={container} dangerouslySetInnerHTML={ {__html: file} } />
}
export default Document;