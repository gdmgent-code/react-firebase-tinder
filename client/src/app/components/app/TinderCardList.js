import React, { useEffect, useState } from 'react';

import TinderCard from './TinderCard';
import { Activity as IconActivity, Heart as IconHeart, RotateCcw as IconRotateCcw, Star as IconStar, X as IconX } from 'react-feather';

import { useAuth, useFirestore } from '../../services';

import './TinderCardList.css';

const TinderCardList = ({}) => {
  const [ users, setUsers ] = useState(null);
  const { currentUser } = useAuth();
  const { dislikeUser, getUsers, likeUser, neutralUser, reNeutralUser, superlikeUser } = useFirestore();

  useEffect(() => {
    async function  fetchUsers () {
      const data = await getUsers(0, 10);
      setUsers(data);
    }
    if (!users) {
      fetchUsers();
    }
  },[]);

  const handleStatusClick = async (ev, status) => {
    ev.preventDefault();
    const userId = currentUser.uid;
    const friendId = users[users.length - 1].uid;

    let result = null;

    switch (status) {
      case 0: default:
        result = await reNeutralUser(userId, friendId);
        break;
      case 1:
        result = await likeUser(userId, friendId);
        break;
      case 2:
        result = await superlikeUser(userId, friendId);
        break;
      case -1:
        result = await dislikeUser(userId, friendId);
        break;
    }
    if (result) {
      
    }
  }

  const handleBoostClick = async (ev) => {
    ev.preventDefault();
    console.log(ev);
  }

  return (
    <div className="tinder-list">
      {!!users ? 
        <div className="tinder-list__body">
          <div className="tinder-list__cards">
            {users.map((user) => {
              return <TinderCard key={user.uid} user={user} />
            })}
          </div>
          <div className="tinder-list__actions">
            <a className="" href="#" onClick={(ev) => handleStatusClick(ev, 0)}>
              <IconRotateCcw />
            </a>
            <a className="" href="#" onClick={(ev) => handleStatusClick(ev, -1)}>
              <IconX />
            </a>
            <a className="" href="#" onClick={(ev) => handleBoostClick(ev)}>
              <IconActivity />
            </a>
            <a className="" href="#" onClick={(ev) => handleStatusClick(ev, 1)}>
              <IconHeart />
            </a>
            <a className="" href="#" onClick={(ev) => handleStatusClick(ev, 2)}>
              <IconStar />
            </a>
          </div> 
        </div> :
        <div>Loading...</div>
      }      
    </div>
  );
};

export default TinderCardList;