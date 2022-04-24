import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProviderWrapper } from './context/app.context';
import { BrowserRouter } from 'react-router-dom';
import { EditorProviderWrapper } from './context/editor.context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <EditorProviderWrapper>
        <UserProviderWrapper>
          <App />
        </UserProviderWrapper>
      </EditorProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
