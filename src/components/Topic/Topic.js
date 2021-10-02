import React from 'react';
import './Topic.css';

function Topic({ title }) {
  return (
    <header className='topic'>
      <h1>{title}</h1>
    </header>
  );
}

export default Topic;
