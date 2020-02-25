import React, { Fragment } from 'react';

import { Route } from 'react-router-dom';

import ChatDetailsScreen from './ChatDetailsScreen';

const ChatsScreen = ({match}) => {
  return (
    <div className="content">
      <div className="content__sidebar">
        CONTENT
      </div>
      <div className="content__body">
        <Route exact path={match.url} render={() => (
          <h3>Please select a chat:</h3>
        )}/>
        <Route path="/app/chats/:id" component={ ChatDetailsScreen }/>
      </div>      
    </div>
  );
};

export default ChatsScreen;