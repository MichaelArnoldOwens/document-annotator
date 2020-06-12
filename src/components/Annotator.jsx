import React, {useState} from 'react';
import Document from './Document';
import styles from '../styles/Annotator.module.css';

function Annotator({file}) {
  const [annotationsMap, setAnnotationsMap] = useState({});
  const {container, annotations_container, document} = styles;

  const highlightSelectedText = () => {
    const selection = window.getSelection();
    if (selection) {
      console.log('rangeCount: ', selection.rangeCount)
      // console.log('parent')
      // console.log(selection.anchorNode.parentElement)
      // console.log('grandparent')
      // console.log(selection.anchorNode.parentElement.parentElement)
      // const parent = selection.anchorNode.parentElement.parentElement;
      const parent = selection.anchorNode.parentElement;
      const range = selection.getRangeAt(0);
      if (range) {
        debugger;
        console.log('start container parentNode:')
        console.log(range.startContainer.parentNode)
        console.log('end container parentNode:')
        console.log(range.endContainer.parentNode)
        
        // debugger;
        // console.log('start: ')
        // console.log(range.startContainer);
        // console.log('end: ')
        // console.log(range.endContainer);
        // const contents = range.extractContents();
        // const nodes = contents.querySelectorAll('*');
        // let newContent = new DocumentFragment();
        // for (let n of nodes) {
        //   n.style.color = 'red';
        //   newContent.appendChild(n);
        // }
        // parent.append(newContent);
      }
    }
  }


  const tempStyle = {
    position: 'absolute',
    // top: '423.888916015625px',
    top: '20px',
  }

  return (
    <div className={container}>
      <span ><Document file={file} /></span>
      <div className={annotations_container}>
        
        Annotations will go here
        <div id="test" style={tempStyle}> proof of concept
          <button onClick={highlightSelectedText}>highlight selection</button>
        </div>
      </div>
    </div>
  )
}



export default Annotator;
