import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="panel">
      <h2>404 - Page Not Found</h2>
      <p>The page you requested does not exist.</p>
      <Link to="/" className="home-link">
        Go back home
      </Link>
    </section>
  );
}

export default NotFound;
