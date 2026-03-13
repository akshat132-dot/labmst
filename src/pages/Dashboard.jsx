import React from 'react';

function Dashboard() {
  return (
    <section className="panel">
      <h2>Dashboard (Protected)</h2>
      <p>You can only see this page when authentication is enabled.</p>
    </section>
  );
}

export default Dashboard;
