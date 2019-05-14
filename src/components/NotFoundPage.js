import React from 'react';
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
    return (<div>404! <NavLink to="/">Go Home</NavLink></div>);
}

export default NotFoundPage;