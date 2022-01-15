import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/pages/nabbar/Header';
import Routing from './Routes';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Fragment>
          <Header />
          <Routing />
        </Fragment>
      </BrowserRouter>
    </div>
  )
}

export default App
