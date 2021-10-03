import React from 'react';

function ContainerCover({ children }) {
  return (
    <>
      <div className='container-cover'>
        <div className='container-content'>{children}</div>
        {/* <div className='container-start'>{children}</div> */}
      </div>
    </>
  );
}

export default ContainerCover;
