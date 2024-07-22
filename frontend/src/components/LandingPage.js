import React, { useState } from 'react';
import styled from 'styled-components';
import farm2 from '../assets/farm2.avif';

const Background = styled.div`
  background-image: url(${farm2});
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  font-size: 4em;
  margin-bottom: 0.5em;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 1.5em;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  margin: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
`;

const Button = styled.button`
  width: 320px;
  padding: 10px;
  margin: 10px;
  background-color: #CD7613;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: #FFFFFF;
    color: black;
    border-color: #CD7613;
  }
`;

const LandingPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <Background>
      <Title>Welcome to FarmWise</Title>
      <Subtitle>A place that can help you turn your farm dream into something different</Subtitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
        <Button type="button">Create Account</Button>
      </Form>
    </Background>
  );
};

export default LandingPage;
