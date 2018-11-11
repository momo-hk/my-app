import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './WSSelect.css';
import { Select } from 'antd';


class WSSelect extends Component {
  render() {
    const {width, label, showText, items, ...others} = this.props;
    
    const Options = items.map((item) => 
      <Select.Option value={item.optValue} key={item.key}>{item.value}</Select.Option>
    );
    
    return (
      <span>
        { showText && <span className="selectLabel">{label}</span>}
        <Select
          style={{ width: width }}
          showSearch
          placeholder={label}
          optionFilterProp="children"
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          {...others}
        >
          {Options}
        </Select>
      </span>
    )
  }
}

WSSelect.propTypes = {
  width: PropTypes.number,
  label: PropTypes.string,
  showText: PropTypes.bool,
  items: PropTypes.array,
}

export default WSSelect;


