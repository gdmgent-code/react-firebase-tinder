import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home  as IconHome, MessageSquare as IconMessageSquare, Settings as IconSettings, User as IconUser, Users as IconUsers } from 'react-feather';

import './Navigation.css';

const Navigation = ({}) => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <NavLink to="/app/dashboard" activeClassName="selected">
            <IconHome />
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/tinder" activeClassName="selected">
            <IconUsers />
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/chats" activeClassName="selected">
            <IconMessageSquare />
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/profile" activeClassName="selected">
            <IconUser />
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/settings" activeClassName="selected">
            <IconSettings />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;