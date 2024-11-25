import React from 'react';
import './PageNotFound.css';
import NavigationBtn from '../common/navigationBtn/NavigationBtn';

const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <div className="error-code">404</div>
      <h1 className="error-message">Page Not Found</h1>
      <p className="error-description">Oops! The page you're looking for doesn't exist.</p>
      <NavigationBtn text={'Go To Home'} path={'/'} />
    </div>
  );
};

export default PageNotFound;
