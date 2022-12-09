import React from 'react';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state ={date: new Date()};
    }
  
    componentDidMount() {
      this.timer = setInterval(() => this.tick(),2000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timer);
    }
  
    tick() {this.setState({date: new Date()});
  }

    render() {
      return (
        <div>
            <h2>{this.state.date.toLocaleTimeString()}.</h2>
            {/* <button onClick={this.componentWillUnmount()}></button> */}
        </div>
      );
    }
  }

export default Clock