import { Button } from '@chakra-ui/button';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Button>Click me</Button>
      <Routes>
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
