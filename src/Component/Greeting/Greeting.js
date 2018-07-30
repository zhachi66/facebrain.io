
import React, { Component } from 'react';




class Greeting extends Component {
constructor()
{
super()

this.state = 
{
  date: new Date(),
 second: this.getTime().second,
 minutes: this.getTime().minutes,
 hours : this.getTime().hours,
 Greeting: this.getGreeting(this.getTime().hours),

}

}


getGreeting = (hour) =>
{
	var Greeting ='';
   if (hour>= 4 && hour <= 11)	Greeting = 'Good morning'
   else if (hour>= 12 && hour <= 3)	Greeting = 'Good afternoon'
   else Greeting = 'Good evening' 
   return Greeting	
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

	


render() 
{
return <div className='center ma'> 
{this.state.Greeting}

</div>

}
}
export default Greeting;
