import React, { useState } from 'react';
import './style.css'

function SignUp(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit({ username, email, password });
  }

  return (
<div>
<di><h1>Sign up</h1></di>
<form onSubmit={handleSubmit} className='signup-form'>
    
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} className='signup-form input'/>
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} className='signup-form input'/>
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} className='signup-form input' />
      </label>
      <br />
      <button type="submit" className='signup-form button'>Sign up</button>
    </form>


</div>
    
  );
}
export default SignUp;

