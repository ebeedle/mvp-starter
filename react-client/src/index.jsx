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
    console.log('on seach called', value);
    var data = {data: value};
    $.ajax({
      url: '/',
      type: 'POST',
      data: data,
      success: function(value) {
        var messages = JSON.parse(value);
        $('.messages').html('');
        messages.forEach(function(message) {
          var $node = $('<div></div>');
          $node.text(message);
          $('.messages').append($node);
          // var $node = $('<div></div>');
          // $('.messages').append($node.text(message));
        })

        // console.log(value) => results from mongo find
      }, 
      error: function(err) {
        console.log('err :', err);
      }
    })
  }

  getData() {
    $.ajax({
      url: '/posts',
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: function(data) {
        console.log(data);
     }
    });
}
  render () {
    return (<div>
      <h1> MESSAGES</h1>
      <List items={this.state.items}/>
      <button onClick={this.getData}> </button>
      <Search onSearch={this.onSearch} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));