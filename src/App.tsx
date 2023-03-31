import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Paper } from '@mui/material';

export default function App() {
  return (
    <div className="App w-screen h-screen flex justify-center items-center">
      <Paper id="taskListContainer" className='w-1/2 h-1/2' elevation={6} />
    </div>
  );
}
