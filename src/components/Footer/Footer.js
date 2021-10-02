import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className='main-content'>
        <div className='left box'>
          <h2>About us</h2>
          <div className='content'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perferendis iure consectetur mollitia. Alias
              voluptates quae temporibus corrupti autem dicta ullam, aut perspiciatis accusantium voluptatum itaque
              excepturi iure pariatur consectetur. Perferendis ipsa, assumenda hic error vel expedita non quidem
              laudantium nulla maxime at reiciendis sed totam culpa cumque, illum quos, eos quibusdam rerum obcaecati
              optio. Ea numquam et similique aliquid?
            </p>
          </div>
        </div>
        <div className='right box'>
          <h2>Address</h2>
          <div className='content'>
            <div className='place'>
              <span className='fas fa-map-marker-alt'></span>
              <span className='text'>Dusit, Bangkok</span>
            </div>
            <div className='phone'>
              <span className='fas fa-phone-alt'></span>
              <span className='text'>+089-765432100</span>
            </div>
            <div className='email'>
              <span className='fas fa-envelope'></span>
              <span className='text'>abc@example.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <center>
          <span className='credit'>
            Created By <span className='dev'>Samatcha</span>
          </span>
          <span className='far fa-copyright'></span>
          <span>2021 All rights reserved.</span>
        </center>
      </div>
    </footer>
  );
}

export default Footer;
