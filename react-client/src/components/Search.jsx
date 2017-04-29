import React from 'react';

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {value: ''};
  } 
  handleChange(event) {
  	this.setState({value: event.target.value})
  }
  search(e) {
  	// console.log(this.state.value)
    this.props.onSearch(this.state.value);
    e.preventDefault();	//so something, called when clicked;
  }
  render() {
  	return(
  	<form>
  	  <input type="text" name="bill" value={this.state.value} onChange={this.handleChange.bind(this)	}/>	
  	  <button onClick={this.search.bind(this)}>Click Me</button>
    </form>
    )
  }
}

export default Search;


// import React from 'react';

// const List2 = (props) => (
//   <div>
//     <h4> Bill </h4>
//   </div>
// )

// export default List2;