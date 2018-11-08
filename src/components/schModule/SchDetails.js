import React, {Component} from 'react';
import {BreadcrumbConfig, NavTabConfig, SelectConfig} from 'components/config';
import {WSNavTab, WSBreadcrumb, WSSelect} from 'components/shared';
import './SchDetails.css';

class SchDetails extends Component {

  constructor(props) {
    super(props);

    this.navTabConfig = NavTabConfig["schDetails"];
    this.breadcrumConfig = BreadcrumbConfig["schDetails"];
    this.selectConfig = SelectConfig["schDetails"];
  }

  render() {
    console.log(this.breadcrumConfig);
    return (
      <div className="schDetailsDiv">
        <WSBreadcrumb config={this.breadcrumConfig} />
        <WSSelect label="學年" onChange={this.onChange} items={this.selectConfig.items} />
        <WSNavTab config={this.navTabConfig} />
      </div>
    );
  }
}

export default SchDetails;