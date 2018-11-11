import React from 'react';
import PropTypes from 'prop-types';
import './WSLinkableItem.css';

const WSLinkableItem = (props) => {
    const {label, onClickHandler} = props;

    if (label && onClickHandler) {
        return (
            <span onClick={onClickHandler} className="item">
                {label}
            </span>
        )
    } else {
        return null;
    }
}

WSLinkableItem.propTypes = {
    label: PropTypes.string,
    onClickHandler: PropTypes.func,
}

export default WSLinkableItem;