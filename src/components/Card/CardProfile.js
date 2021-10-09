import React from 'react';
import './CardProfile.css';
import Topic from '../Topic/Topic';
import { useHistory } from 'react-router-dom';

function CardProfile() {
  const history = useHistory();

  const handleEditProfile = () => {
    history.push('/CustomerProfileUpdate');
  };

  return (
    <>
      <div className='container-card-hz'>
        <Topic title='Profile' />
        <div className='card-frame-hz'>
          <div className='card-part1-hz'>
            <div className='image-detail-circle'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png' alt='' />
            </div>
            <div className='info-login'>
              <p>
                Username: <span>sorawee</span>
              </p>
              <p>
                Password: <span>123456</span>
              </p>
            </div>
            <div className='button-edit-profile'>
              <button onClick={handleEditProfile}>
                <i className='fas fa-pencil-alt'></i>&nbsp;Edit
              </button>
            </div>
          </div>
          <div className='card-part2-hz'>
            <div className='text-detail'>
              <p>
                Full name: <span>สรวี เทศสน</span>
              </p>
              <p>
                Gender: <span>ชาย</span>
              </p>
              <p>
                Date of birth : <span>04/07/21</span>
              </p>
              <p>
                Phone number : <span>083-xxx-xxxx</span>
              </p>
              <p>
                Email : <span>sorawee@email.com</span>
              </p>
              <p>
                Address : <span>88/8 เกษมสุข เเขวงนครไชศรี เขดดุสิต กรุงเทพ 65000</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProfile;
