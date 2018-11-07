import React from 'react';
import PropTypes from 'prop-types';
import './WSSelect.css';
import { Select } from 'antd';


const WSSelect = (props) => {
  
  const {label, items, onSelect} = props;

  const Options = items.map((item) => 
    <Select.Option value={item.value} key={item.key}>{item.value}</Select.Option>
  );

  return (
    <div className="selectDiv">
      <span className="selectLabel">{label}</span>
      <Select
        style={{ width: 100 }}
        showSearch
        placeholder={label}
        onSelect={onSelect}
        optionFilterProp="children"
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {Options}
      </Select>
    </div>
  )
}

WSSelect.propTypes = {
  label: PropTypes.string,
  items: PropTypes.array,
  onSelect: PropTypes.func,
}

export default WSSelect;


