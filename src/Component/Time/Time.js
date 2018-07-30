
import React, { Component } from 'react';




class Time extends Component {
constructor()
{
super()

this.state = 
{
  date: new Date(),
 second: this.getTime().second,
 minutes: this.getTime().minutes,
 hours : this.getTime().hours,


}

}





getTime =  () =>
{
var d = new Date();
var second = d.getSeconds();
var minutes = d.getMinutes();
var hours = d.getHours();
return {

second: second,
minutes: minutes,
hours: hours,

};
}


	
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }


render() 
{
return <div className='center ma'> 
{this.state.date.toLocaleTimeString('en-US')}

</div>

}
}
export default Time;

// putzero = (second) =>
// {

// console.log(second)
// if(second === 59 )
//   zerosecond = '0'
//  else if(second <= 8 && second >=  0)
//    zerosecond = '0'
//      else zerosecond = ''

// }

// changeSet = () =>
// {


// if(this.state.second !== 59 )
//      this.setState({second: this.state.second+1})
// 	else if(this.state.minutes !== 59 )
// 		this.setState({second:0, minutes: this.state.minutes+1})
// 		else if(this.state.hours !== 23 )
// 			this.setState({second:0, minutes: 0, hours:this.state.hours+1 })
// 				else 
// 				this.setState({second:0, minutes: 0, hours:0 })
// 			this.putzero(this.state.second)
// }

// componentDidMount()
// {
// 	//this.setState({second:45})
// //	setTimeout(function() {alert("hello")},2000);
// //if(this.state.routh === 'home')
// 	setTimeout(this.changeSet,1000);
// 	//setTimeout(function() {},2000);
// 		//this.clock();
// }


// componentDidUpdate()
// {
// 	setTimeout(this.changeSet,1000);
   
// 	//{this.state.zeroHours}{this.state.hours}:{this.state.zeroMinutes}{this.state.minutes}:{this.putzero}{this.state.second}

// }


// componentWillUnmount() 
// {
// 	 clearTimeout(this.changeSet);


//   }

// getGreeting = (hour) =>
// {
// 	var Greeting ='';
//    if (hour>= 4 && hour <= 11)	Greeting = 'Good morning'
//    else if (hour>= 12 && hour <= 3)	Greeting = 'Good afternoon'
//    else Greeting = 'Good evening' 
//    return Greeting	
// }