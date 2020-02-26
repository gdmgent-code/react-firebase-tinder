import React, { Fragment } from 'react';

import { Route } from 'react-router-dom';

import { TinderCardList, MatchesList } from '../../components';
import ChatDetailsScreen from './ChatDetailsScreen';

const TinderScreen = ({match}) => {
  return (
    <div className="content">
      <div className="content__sidebar">
        <div className="panel">
          <div className="panel__body">
            <MatchesList status={2} />
          </div>
        </div>
        <div className="panel">
          <div className="panel__body">
            <MatchesList status={1} />
          </div>
        </div>
        <div className="panel">
          <div className="panel__body">
            <MatchesList status={0} />
          </div>
        </div>
        <div className="panel">
          <div className="panel__body">
            <MatchesList status={-1} />
          </div>
        </div>
      </div>
      <div className="content__body">
        <Route exact path={match.url} render={() => (
          <TinderCardList />
        )}/>        
        <Route path="/app/tinder/:id" component={ ChatDetailsScreen }/>
      </div>      
    </div>
  );
};

export default TinderScreen;