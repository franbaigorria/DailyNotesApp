import React from 'react';

export const LoadingScreen = () => {
  return (
    <>
      <div className="loading__main">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};
