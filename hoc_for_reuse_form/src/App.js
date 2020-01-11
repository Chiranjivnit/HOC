import React, { useState } from 'react';
import './App.css';
import Test from './Test';
import Display from './Display';



function App() {
  const [userName, setUserName] = useState('');
  const [userEmail,setUserEmail]= useState('');

  return (
    <div className="App">
      <header className="App-header">
        <Test
          setUserName={setUserName}
          setUserEmail={setUserEmail}
          userName={userName}
          userEmail={userEmail}
        />
        <Display />
      </header>
    </div>
  );
}

export default App;
