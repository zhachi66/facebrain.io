import React, { Component } from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Navigation from './Component/Navigation/Navigation';
import Logo from './Component/Logo/Logo';
import Register from './Component/Register/Register';
import FormImgRecognition from './Component/FormImgRecognition/FormImgRecognition';
import Particles from 'react-particles-js';
import Imgtag from './Component/Imgtag/Imgtag';
import SingIn from './Component/SingIn/SingIn';




const primse = {   
  particles :{
      number: {
        value: 30,
         density: {
         enable: true,
        value_area:800
                    }
                  }
                }
           }  


const app = new Clarifai.App({
 apiKey: 'ac079fc191ed4ed4957474d759762e7b'
});

class App extends Component {
constructor()
{
super()
this.state = 
{
  input:'',
  UrlImg:'',
  box : '',
  routh : 'Signout',
  ifsignin :false
}

}

caculateFaceLocation = (data) =>
{
const clarifaiFace= data.outputs[0].data.regions[0].region_info.bounding_box;
const img= document.getElementById("imgFace");
const width = img.width;
const height = img.height;
console.log(width,height)
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
}

displayFaceBox = (box) =>
{
  this.setState({box: box})
}


onSubmitButton = (event) =>
{
  console.log('click')
  app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.UrlImg)
  .then(response =>this.displayFaceBox(this.caculateFaceLocation(response)))
.catch(err => console.log(`dont have link ${err}`));
}

onRouthChange =(routh) =>
{
  console.log(routh);
   if (routh === 'Home')
    this.setState({ifsignin: true})
  this.setState({routh:routh})
}

onNavChange =(routh) =>
{
  if (routh === 'navSigout')
  this.setState({ifsignin :false, routh:'Signout'})
else if (routh === 'navSignin') this.setState({ifsignin : false , routh:'Signout'})
  else if (routh === 'navRegister') this.setState({ifsignin : false , routh:'Register'})

}



onInputChange = (event) =>
{
  this.setState({UrlImg : event.target.value})
  console.log(event.target.value)
}

  render() {
    return (
      <div className="App">

<Navigation onRouthChange={this.onRouthChange} onNavChange={this.onNavChange} ifsignin={this.state.ifsignin}/>

{this.state.routh === 'Signout'
    ? <SingIn onRouthChange={this.onRouthChange} />
       : this.state.routh === 'Register'
          ? <Register onRouthChange={this.onRouthChange} />
            :  <div>
               <Logo / >
              <Particles className='Particles'  params={primse} />
              <FormImgRecognition routh={this.state.routh} onSubmitButton={this.onSubmitButton} 
              onInputChange={this.onInputChange}/>
               <Imgtag  UrlImg={this.state.UrlImg} box={this.state.box}/> 
               </div>          
               }

      </div>
    );
  }
}

export default App;
