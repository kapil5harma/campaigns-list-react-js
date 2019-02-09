import React, { Component } from 'react';
import './App.css';
import List from './components/List';

class App extends Component {
  state = {
    listArr: null,
    showDialog: false,
    inputValue: null,
    activeIndex: null
  };

  showOrCloseDialog = () => {
    this.setState(currentState => {
      return { showDialog: !currentState.showDialog };
    });
  };

  createNewItem = () => {
    this.setState(
      currentState => {
        return { showDialog: !currentState.showDialog };
      },
      () => {
        if (this.state.inputValue) {
          let newItem = {
            campaignName: this.state.inputValue,
            createdAt: new Date().toString().substr(16, 8)
          };
          let listArr = [];
          if (this.state.listArr) listArr = [...this.state.listArr, newItem];
          else listArr = [newItem];
          this.setState({ listArr, inputValue: null });
        } else {
          console.log('Enter a value and try again..');
        }
      }
    );
  };

  handleListClick = index => {
    this.setState({ activeIndex: index });
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleButtonClicks = type => {
    switch (type) {
      case '1':
        break;
      case '2':
        break;
      case '3':
        break;
      case '4':
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className='App'>
        <div className='title'>
          <i className='far fa-envelope' />
          <span className='on-icons-right'>All Campaigns</span>
        </div>
        <div className='head'>
          <i className='fas fa-clipboard-list' />
          <span className='on-icons-right'>All Campaigns</span>
          <button onClick={() => this.showOrCloseDialog()} className='on-icons-right'>
            + Create New
          </button>
        </div>
        {this.state.listArr && (
          <div className='list-and-history'>
            <div className='list'>
              <List
                listArr={this.state.listArr}
                listClicked={index => this.handleListClick(index)}
                activeIndex={this.state.activeIndex}
              />
            </div>
            <div className='history'>
              <div className='head'>
                <i className='fas fa-history' />
                <span className='on-icons-right'>History</span>
              </div>
            </div>
          </div>
        )}
        {this.state.showDialog && (
          <div className='backdrop' onClick={() => this.showOrCloseDialog()}>
            <div className='dialog' onClick={e => e.stopPropagation()}>
              <label>Enter Campaign Name: </label>
              <input type='text' onChange={e => this.handleInputChange(e)} />
              <button onClick={() => this.createNewItem()}>Create</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
