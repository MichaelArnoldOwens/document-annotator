import React, {useState} from 'react';
import Document from './Document';
import styles from '../styles/Annotator.module.css';

function Annotator({file}) {
  const [annotationsMap, setAnnotationsMap] = useState({});
  const {container, annotations_container, document} = styles;

  const highlightSelectedText = () => {
    const selection = window.getSelection();
    if (selection) {
      console.log(selection.anchorNode.parentElement)
      // const parent = selection.anchorNode.parentElement.parentElement;
      const parent = selection.anchorNode.parentElement;
      const range = selection.getRangeAt(0);
      if (range) {
        const contents = range.extractContents();
        const nodes = contents.querySelectorAll('*');
        let newContent = new DocumentFragment();
        for (let n of nodes) {
          n.style.color = 'red';
          newContent.appendChild(n);
        }
        parent.append(newContent);
      }
    }
  }


  const tempStyle = {
    position: 'absolute',
    top: '423.888916015625px',
  }

  return (
    <div className={container}>
      <span className={document}><Document file={file} /></span>
      <div className={annotations_container}>
        <button onClick={highlightSelectedText}>highlight selection</button>
        Annotations will go here
        <div id="test" style={tempStyle}> proof of concept</div>
      </div>
    </div>
  )
}



export default Annotator;
