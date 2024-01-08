import React from 'react';
import ReactDOM from 'react-dom/client';
import './Reset.css';
import { MINT_GREEN } from './common/style';
import { NBox } from './common/NBox';
import { SignIn } from './features/firebase/signIn';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <div style={{backgroundColor:MINT_GREEN, height:'100vh', width:'100%'}}>
        <NBox style={{ width:'100%', height:'5vh' }} />
        <SignIn />
      </div>
  </React.StrictMode>,
)
