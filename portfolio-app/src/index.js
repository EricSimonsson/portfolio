import {BrowserRouter as Router} from 'react-router-dom';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AnimatedRoutes from './Components/AnimatedRoutes';

/**
 * @author Eric Simonsson
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <AnimatedRoutes />
          <Footer />
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
