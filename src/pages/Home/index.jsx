import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () =>{
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/Login">Login</Link>
          </li>
          <li>
            <Link to="/Feed">Feed</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Home;