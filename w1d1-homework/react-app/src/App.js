import React, { Component } from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InventoryList from './InventoryList';
import InventoryEdit from './InventoryEdit';
import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/inventories' exact={true} component={InventoryList}/>
            <Route path='/inventories/:id' component={InventoryEdit}/>
          </Switch>
      </Router>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
