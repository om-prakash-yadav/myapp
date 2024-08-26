import React from 'react';
import { BrowserRouter as Router, Route,  Switch, useLocation, Link } from 'react-router-dom';
import Encrypt from './Components/Encrypt';


function App() {
  const location = useLocation();
 

  return (
    <div className="App">
      <h1>Home</h1>
      {location.pathname === '/' && (
        <Link to="/encrypt">
          <button data-testid="encrypt-container" style={{
            padding: '10px',
            backgroundColor: 'blue',
            color: 'white',
            // baaki styles dekh lena jo bola hai 
          }}>Click This</button>
        </Link>

      )}

      <Switch>
        <Route exact path="/" component={() => <h2>Welcome to the Home Page</h2>} />
        <Route path="/encrypt" component={Encrypt} />
      </Switch>
    </div>
  );
}

export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
