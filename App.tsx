import React from 'react';
import Navigation from 'navigation/navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';

const App = () => {
  return (
    // <Provider store={store}>
    <Navigation />
    // </Provider>
  );
};

export default App;
