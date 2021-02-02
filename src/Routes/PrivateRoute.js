import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);
  return (
    <Route
      {...rest}
      exact
      render={(props) => (
        isAuthenticated ? (
          <div>
            {React.createElement(component, props)}
          </div>
        )
          : (
            <Redirect
              to={{
                pathname: '/login',
                // eslint-disable-next-line react/prop-types
                state: { from: props.location },
              }}
            />
          )
      )}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
