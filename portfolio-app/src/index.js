import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import About from './About';
import Layout from './Layout';

/**
 * @author Eric Simonsson
 */
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            {/**
             * Default path to layout element
             */}
            <Route exact path = "/" element={< Layout />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
