import React, { useEffect, useState } from 'react';

import TinderCard from './TinderCard';
import { Activity as IconActivity, Heart as IconHeart, RotateCcw as IconRotateCcw, Star as IconStar, X as IconX } from 'react-feather';

import { useAuth, useFirestore } from '../../services';

import './MatchesList.css';

const MatchesList = ({status = 0}) => {
  const [ matches, setMatches ] = useState(null);
  const { currentUser } = useAuth();
  const { getMatchedUsersOfUser } = useFirestore();

  useEffect(() => {
    async function getMatches () {
      const results = await getMatchedUsersOfUser(currentUser.uid, status, 0, 10);
      console.log(results);
      setMatches(results);
    }

    if (!matches) {
      getMatches();
    }

  }, [])

  return (
    <div className="friends-list">
      {!!matches ? 
        <div className="friends-list__body">
          <div className="friends-list__cards">
            {matches.map((match) => {
              return <div key={match.uid} className="friend">
                <p className="friend__name">{match.firstName}</p>
                <picture class="friend__picture">
                  <img src={match.profilePicture} />
                </picture>
              </div>
            })}
          </div>
        </div> :
        <div>Loading...</div>
      }           
    </div>
  );
};

export default MatchesList;