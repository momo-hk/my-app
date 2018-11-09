import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Input} from 'antd';
import './WSInput.css';

class WSInput extends Component {
  render() {
    const { label, ...others } = this.props;
  
    const propsList = {
      ...others
    }
  
    if (label) propsList.addonBefore = this.props.label;
  
  
    return (
      <div className="inputDiv">
        <Input {...propsList} />
      </div>
    )
  }
} 

WSInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default WSInput;

