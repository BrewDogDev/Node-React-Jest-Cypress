import React from 'react';
import './Counter.css';
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {count: 0};
      this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
      document.title = `You clicked ${this.state.count} times`;
    }
    componentDidUpdate() {
      document.title = `You clicked ${this.state.count} times`;
    }
    handleClick() {
      this.setState(state => ({
        count: state.count + 1,
      }));
    }
    render() {
      return (
        <div className ="counter-div">
          <p>You clicked {this.state.count} times</p>
          <button onClick={this.handleClick}>
            Click me
          </button>
        </div>
      );
    }
}
export default Counter;