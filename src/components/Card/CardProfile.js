import React from 'react';
import './CardProfile.css';
import Topic from '../Topic/Topic';
import { useHistory, Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/authContext';
import imagesUser from '../../images/default-profile-user.png';
import axios from '../../config/axios';

function CardProfile() {
  const history = useHistory();
  let { user } = useContext(AuthContext);

  // console.log(user.id);

  const handleEditProfile = () => {
    history.push('/CustomerProfileUpdate');
    // history.push({ pathname: `/CustomerProfileUpdate/${getUser.id}`, state: { getUser } });
  };

  //====================================== ดึงข้อมูล user

  const [getUser, setGetUser] = useState([]);
  const [toggle, setToggle] = useState(false);

  // console.log(getUser);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`/profile/${user.id}`);
        const resGetUser = res.data.user;
        setGetUser(resGetUser);
        // setToggle((c) => !c);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);

  console.log(getUser);

  return (
    <>
      <div className='container-card-hz'>
        <Topic title='Profile' />
        <div className='card-frame-hz'>
          <div className='card-part1-hz'>
            <div className='image-detail-circle'>
              {getUser.picurl ? <img src={getUser.picurl} alt='profile' /> : <img src={imagesUser} alt='profile' />}
            </div>
            <div className='info-login'>
              <p>
                Username: <span>{getUser.username}</span>
              </p>
            </div>
            <div className='button-edit-profile'>
              <Link
                to={{ pathname: `/CustomerProfileUpdate/${getUser.id}`, state: getUser }}
                onClick={handleEditProfile}>
                <i className='fas fa-pencil-alt'></i>&nbsp;Edit
              </Link>
            </div>
          </div>
          <div className='card-part2-hz'>
            <div className='text-detail'>
              <p>
                Full name: <span>{`${getUser.firstname} ${getUser.lastname}`}</span>
              </p>
              <p>
                {/* Gender: <span>{getUser.gender.toLowerCase()}</span> */}
                Gender: <span>{getUser?.gender?.toLowerCase()}</span>
              </p>
              <p>
                Date of birth : <span>{new Date(getUser.dateofbirth).toDateString()}</span>
              </p>
              <p>
                Phone number : <span>{getUser.phone}</span>
              </p>
              <p>
                Email : <span>{getUser.email}</span>
              </p>
              <p>
                Adress :&nbsp;
                <span>
                  {`${getUser.houseno} ${getUser.village} ${getUser.subdistrict} ${getUser.district}  ${getUser.province} ${getUser.zipcode}`}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardProfile;
