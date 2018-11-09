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
    return (
      <div className="schDetailsDiv">
        <WSBreadcrumb config={this.breadcrumConfig} />
        <div className="selectDiv">
          <WSSelect width={200} label="學年" onChange={this.onChange} items={this.selectConfig.items} />
        </div>
        <WSNavTab config={this.navTabConfig} />
      </div>
    );
  }
}

export default SchDetails;