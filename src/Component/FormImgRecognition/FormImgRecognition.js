import React from 'react';
import './FormImgRecognition.css';
import Time from '../Time/Time';
import Greeting from '../Greeting/Greeting';

const FormImgRecognition = ({onInputChange,onSubmitButton,routh}) =>
{

return <div className='f3'>
<div className='f1 link dim black ' ><Greeting /></div>
<div className='f3 link dim black ' > <Time /> </div>
<p>{'hello this is Recognition Face for you '}</p>
<div className='center'>
<div className='form center pa4 br3 shadow-5'>
<input type='text' className='center f4 pa2 w-70 center' onChange={onInputChange} />
<button onClick={onSubmitButton}  className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detected</button>
</div>
</div>
</div>

}

export default  FormImgRecognition;