import React from 'react';
import PropTypes from 'prop-types';
import {useTranslation} from "react-i18next";


const SubmenuItem = (props) => {
    const { t } = useTranslation();

    return (
    <li className="nav-link pointer">
        <input id={props.id} className="float-left checkbox-round" type="checkbox" name={props.id}
               checked={props.checked} onChange={props.onChange}/>
        <a href="#" className="p-0 ml-1 pointer clear">
            <label htmlFor={props.id}>
                <span className="nav-label p-1 m-0 ml-1 pointer">{t(props.label)}</span>
            </label>
        </a>
    </li>)
};

SubmenuItem.propTypes = {
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    tree: PropTypes.bool
};

export default SubmenuItem;