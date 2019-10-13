import React, { Component } from 'react';
import Congrats from '../Congrats';
import GuessedWords from '../GuessedWords';

import hookActions from '../../actions/index';
import Input from '../Input';

const reducer = (state, action) => {
  switch (action.type) {
    case 'setSecretWord':
      return {
        ...state,
        setSecretWord: action.payload
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, { setSecretWord: null });

  const setSecretWord = secretWord =>
    dispatch({ type: 'setSecretWord', payload: secretWord });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  if (!state.secretWord) {
    return (
      <div data-test="spinner">
        <div role="status">
          <span>Loading...</span>
        </div>
        <p>Loading secret word</p>
      </div>
    );
  }

  return (
    <div data-test="component-app" className="App">
      <Input secretWord={state.secretWord} />
    </div>
  );
};

export default App;
