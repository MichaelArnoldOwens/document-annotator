import React from 'react';

function Annotator({file}) {
  return (
    <div dangerouslySetInnerHTML={ {__html: file} }/>
  )
}

export default Annotator;
