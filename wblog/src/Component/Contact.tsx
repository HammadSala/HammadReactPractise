import { match } from 'assert';
import React from 'react';
 import {Switch, Route, RouteComponentProps, NavLink} from 'react-router-dom'
import Email from './Email';

//  type Props ={}

 const Contact = ({history, location, match} :  RouteComponentProps) => {
    return(
        <>
            <hr />
            <h1>Contact</h1>

            <NavLink to={`${match.url}/phone` }>Phone </NavLink>
            <NavLink to ={`${match.url}/email`}>Email</NavLink>

            <Switch>
                <Route path={`${match.path}/phone`}>
                    <>
                        <div>
                            <h5>Phone: 9120312082</h5>
                            
                        </div>
                    </>    
                </Route>
                {/* <Route path={`${match.path}/email`}>
                <>
                        <div>
                            <h5>Email: None@none.com</h5>
                            
                        </div>
                    </> 
e
                </Route> */}

                <Route path={`${match.path}/email`} render= {
                    (props : RouteComponentProps)=><Email value={"None@none.com"} {...props} /> 
                    }/>
            </Switch>
            
        </>
    )
 }



export default Contact;
