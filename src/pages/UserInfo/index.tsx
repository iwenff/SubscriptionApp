import { useNavigate } from 'react-router-dom';
import { Button } from '../../DS';
import './index.scss';
import { useState } from 'react';
import { useForm } from '../../context/FormContext';

const UserInfo = () => {
  const { name, setName, email, setEmail, num, setNum } = useForm();
  const navigate = useNavigate();

  const nextStep = () => {
    if (!name || !email || !num) {
      alert('Fill all of the fields');
      return;
    }

    navigate('/selectplan');
  };

  return (
    <div className="main">
      <img src="Step1.svg" alt="" />
      <div className="content">
        <h1>Personal info</h1>
        <p style={{ color: '#9699AA' }}>Please provide your name, email address, and phone number.</p>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Stephen King" />
        <label>Email Address</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e.g. stephenking@lorem.com"
        />
        <label>Phone Number</label>
        <input type="text" value={num} onChange={(e) => setNum(e.target.value)} placeholder="e.g. +1 234 567 890" />

        <Button onClick={nextStep}>Next Step</Button>
      </div>
    </div>
  );
};

export default UserInfo;
