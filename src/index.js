import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PostProvider } from './contexts/postContext';
import { AuthProvider } from './contexts/authContext';

 
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider> 
    <PostProvider>
    <App />
    </PostProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
