import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clock extends React.Component{

  constructor(props){
    super(props);
    this.state = { 
      
      d:""
    
    };

  }

  componentDidMount(){
    this.timerId = setInterval(
        () => this.flip(),
      10000
    );
  }

  componentWillMount(){
    clearInterval(this.timerId);
  }
  

  flip(){

    //const d = window.getComputedStyle(this.hourglass).getPropertyValue("animation");
    //this.setState (state => ({d: state.d("flip 10s ease-in-out infinite")}));
  }

  render(){
    return(
    
    <div class="hourglass">
      <div class="top"></div>
    <div class="bottom"></div>
    </div>
    
    );
  }

}

ReactDOM.render(
  <Clock />, document.getElementById('root')
);