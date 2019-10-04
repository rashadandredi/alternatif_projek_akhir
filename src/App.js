import React, {Component} from 'react';
import Coffee from './components/Coffee';
import Glass from './components/Glass';
import Saucer from './components/Saucer';

export default class App extends Component{

  constructor(){
    super();
    this.state = {
      number: 1
    }
  }

  handleClick(){
    const number = this.state.number + 1;
    this.setState({
      number
    })
  }

    // componentWillMount(){
    //   console.log('componentWillMount');
    // }
    //
    // componentDidMount(){
    //   console.log('componentDidMount');
    // }
    //
    // componentWillReceiveProps(){
    //
    // }
    //
    // componentWillUnmount(){
    //
    // }

    render(){
      console.log('render');
      return(
        <div>
          <Coffee
            waterVolume={1}
            bean="robusta"
            type="expresso"/>
          <Glass
            color="red" />
          <Saucer
            width={100}/>

      <button
        onClick={()=> this.handleClick()}
      >
        Increase Number
      </button>
      <p>{this.state.number}</p>
      </div>

      )
    }
}
