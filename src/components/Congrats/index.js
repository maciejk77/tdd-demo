import React from 'react';

export default ({ success }) => {
  return (
    <div data-test="congrats">
      {success ? <div data-test="congrats-message">Hello</div> : null}
    </div>
  );
};
