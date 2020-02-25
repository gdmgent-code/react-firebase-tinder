import React, { Fragment } from 'react';

import {
  useParams
} from "react-router-dom";

const ChatDetailsScreen = () => {
  let { id } = useParams();

  return (
    <Fragment>
      <p>
        CHAT
      </p>
    </Fragment>
  );
};

export default ChatDetailsScreen;