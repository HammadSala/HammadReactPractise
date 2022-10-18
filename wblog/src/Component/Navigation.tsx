import React from 'react';
import { NavLink} from 'react-router-dom';


function Navigation(){

    return(
        <>
            <NavLink to='/Home' className="linkActive"> Home</NavLink>
            <NavLink to='Contact' className="linkActive"> Contact</NavLink>
            <NavLink to='Form' className="linkActive"> Form</NavLink>
        </>
    );
}

export default Navigation;

