import React from 'react';
import PropTypes from 'prop-types';
import {Breadcrumb} from 'antd';
import './WSBreadcrum.css';

const WSBreadcrumb = (props) => {
  const { separator, items } = props.config;

  const BreadcrumbItems = items.map((item) => <Breadcrumb.Item key={item.key}>{item.value}</Breadcrumb.Item>)
  return (
    <div className="breadcrumDiv"> 
      <Breadcrumb separator={separator}>
        {BreadcrumbItems}
      </Breadcrumb>
    </div>
  )
}

WSBreadcrumb.propTypes = {
  config: PropTypes.object,
}

export default WSBreadcrumb;