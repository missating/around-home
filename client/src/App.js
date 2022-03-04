import React from 'react';
import { Router } from '@reach/router';

import ThemeProvider from 'components/ThemeProvider';
import Header from 'layout/Header';
import Body from 'layout/Body';
import Footer from 'layout/Footer';

import Companies from 'pages/Companies';

const App = () => (
  <ThemeProvider>
    <Header />
    <Body>
      <Router>
        <Companies path="/" />
      </Router>
    </Body>
    <Footer />
  </ThemeProvider>
);

export default App;
