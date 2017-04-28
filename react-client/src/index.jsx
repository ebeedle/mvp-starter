import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  onSearch(value) {
    $.ajax({
      url: '/posts',
      type: 'POST',
      data: value,
      success: function(value) {
        //do something later with this
      }, 
      error: function(err) {
        conosle.log('err :', err);
      }
    })
  }

  render () {
    return (<div>
      <h1>Item List</h1>
      <button onClick={this.onSearch('bill')}></button>  
      <List items={this.state.items}/>
      <Search />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));