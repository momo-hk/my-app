import React from 'react';
import PropTypes from 'prop-types';
import {Input} from 'antd';
import './WSInput.css';

const WSInput = (props) => {
  const { label, id, value, onChange } = props;

  return (
    <div className="inputDiv">
      <Input addonBefore={label}  value={value} onChange={onChange} id={id} />
    </div>
  )
};

WSInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default WSInput;

