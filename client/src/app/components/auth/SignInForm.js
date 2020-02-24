import React, { useState } from 'react';

import { useAuth } from '../../services';

const SignInForm = ({}) => {
  const { loginUserWithEmailAndPassword } = useAuth();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const obj = await loginUserWithEmailAndPassword(email, password);
    console.log(obj);
  }

  return (
    <div className="login">
      <form className="login-form" onSubmit={(ev) => handleSubmit(ev)}>
        <div className="form-part">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required placeholder="Your email" value={email} onChange={(ev) => setEmail(ev.target.value)} /> 
        </div>
        <div className="form-part">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" required value={password} onChange={(ev) => setPassword(ev.target.value)} />
        </div>
        <div className="form-part">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;