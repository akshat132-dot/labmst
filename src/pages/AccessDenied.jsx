import React from 'react';
import { Link } from 'react-router-dom';

function AccessDenied() {
  return (
    <section className="panel">
      <h2>Access Denied</h2>
      <p>
        You do not have permission to view this page. Please contact your
        administrator to request access.
      </p>
      <Link to="/" className="home-link">
        Go back home
      </Link>
    </section>
  );
}

export default AccessDenied;
