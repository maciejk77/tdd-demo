import React from 'react';
import PropTypes from 'prop-types';

const Congrats = ({ success }) => {
  return (
    <div data-test="congrats">
      {success ? <div data-test="congrats-message">Hello</div> : null}
    </div>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
