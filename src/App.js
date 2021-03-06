import React, { Component } from 'react';
import Header from './components/Header/Header'
import './App.scss';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './redux/store'
import Side from './components/Side/Side'
import Board from './components/Board/Board'

export class App extends Component {
  state = {
    board_layout: "side",
    header_hiden: false,
  }

  setLayout = (layout) => {
    this.setState({
      board_layout: layout,

    })
  }

  render() {
    
    return (
      <Provider store={store}>
        <Router>
          <div className={`App ${this.state.board_layout}`}>
            <Header hiden={this.state.header_hiden} />
            <Side />
            <Board setLayout={this.setLayout} />
          </div>
        </Router>
      </Provider>
    );
  }

}

export default App;
