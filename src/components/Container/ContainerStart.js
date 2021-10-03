import React from 'react';
import './ContainerCover.css';

function ContainerStart({ children }) {
  return (
    <div className='container-start'>
      <div className='container-content-start'>{children}</div>
    </div>
  );
}

export default ContainerStart;
