import React from 'react';


const Navigation = ({onRouthChange,ifsignin,onNavChange}) =>

{
	
return <div>


{ ifsignin === true  
?<p onClick={() => onNavChange('navSigout')} className='f3 link dim blue underline pa3 pointer'>sing out </p>

:

<nav style={{display: 'flex',justifyContent:'flex-end'}} >
<p onClick={() => onNavChange('navSignin')} className='f3 link dim blue underline pa3 pointer'>sing in </p>
<p onClick={() => onNavChange('navRegister')} className='f3 link dim blue underline pa3 pointer'>Register </p>

</nav>

}


</div>
}

export default  Navigation;