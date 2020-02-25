import React from 'react';

import classnames from 'classnames';
import moment from 'moment';

import './TinderCard.css';

const TinderCard = ({user}) => {
  return (
    <div className={classnames('card', 'tinder-card')}>
      <picture className="card__picture tinder-card__picture">
        <img src={user.profilePicture} />
      </picture>
      <header className="card__header">
        <h1 className="card__title">{user.firstName}, {18+Math.round(Math.random()*50)}</h1>
        <h2 className="card__sub-title">{user.locations[0].city}, {user.locations[0].country}</h2>
      </header>
      <div className="card__body">
      </div>
    </div>
  );
};

export default TinderCard;

/*
moment().diff(user.dayOfBirth, 'years')
<div className="card__body">
      </div>
*/