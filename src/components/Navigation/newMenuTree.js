import React from 'react';
import PropTypes from 'prop-types';

const NewMenuTree = (props) => (
    <li className="nav-link pointer ">
        <input id={props.id}
               className="float-left checkbox-round"
               type="checkbox"
               name={props.id}
               checked={props.checked}
               onChange={props.onChange} />

        <a href={"#collapse-" + props.id} className="p-0 my-0 ml-1 clear" data-toggle={'collapse'} aria-expanded={"false"} >
            <label htmlFor={props.id}>
                <span className="nav-label p-1 m-0 ml-1 pointer">{props.label}</span>
            </label>
            <span className="fa float-right"/>
        </a>
        {
            props.level === 2 ?
                <ul className="nav nav-second-level collapse px-0" id={"collapse-" + props.id}>
                    {props.children}
                </ul>
                :
                <ul className="nav nav-third-level collapse" id={"collapse-" + props.id}>
                    {props.children}
                </ul>
        }

    </li>
);

NewMenuTree.propTypes = {
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    children: PropTypes.array.isRequired,
    level: PropTypes.number
};

export default NewMenuTree;