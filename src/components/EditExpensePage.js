import React from 'react';
import { NavLink } from "react-router-dom";

const EditExpensePage = (props) => {
    return (<div>edititng expense with id {props.match.params.id}</div>);
}

export default EditExpensePage;