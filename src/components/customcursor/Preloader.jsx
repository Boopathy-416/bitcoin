import React from 'react';
import load from "/public/assets/bitcoingif.gif";

const Preloader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000', // or any background color you want
        zIndex: 9999,
      }}
    >
      <img
        src={load}
        alt="Loading..."
        style={{ width: '150px', height: '150px' }} // Adjust as needed
      />
    </div>
  );
};

export default Preloader;
