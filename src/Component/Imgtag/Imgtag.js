
import React from 'react';
import './Imgtag.css'

const Imgtag = ({UrlImg,box}) =>
{
return <div className='center ma'> 
<div className='absolute mt2'>
<img id="imgFace" src={UrlImg} alt='' /> 
<div className='bounding-box' style={{top: box.topRow , right: box.rightCol , bottom: box.bottomRow, left:box.leftCol}}>

 </div>
</div>
</div>

}

export default  Imgtag;