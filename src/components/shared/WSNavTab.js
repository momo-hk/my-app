import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Tabs} from 'antd';
import Loadable from 'react-loadable';
import './WSNavTab.css';

const TabPane = Tabs.TabPane;

class NavTab extends Component {
  constructor(props) {
    super(props);
    this.state = { tabComponents: new Map(null) }
  }

  componentDidMount() {
    const { tabItems } = this.props.config;
    tabItems.forEach((item) => {
      this.setState({
        tabComponents: this.state.tabComponents.set(item.key, Loadable({
          loader: () => import(`components/${item.componentPath}`),
          loading: () => <div>Loading...</div>
        }))
      });
    });
  }

  render() {
    const { defaultItem, tabItems } = this.props.config;
    
    const TabItems = tabItems.map((item) => {
      let TabComponent = this.state.tabComponents.get(item.key);
      return (
        <TabPane tab={item.tabName} key={item.key} disabled={item.disabled}>
          {
            TabComponent && <TabComponent />
          }
        </TabPane>
      )
    }
    );
    
    return (
      <div className="navTabDiv">
        <Tabs type="card" defaultActiveKey={defaultItem}>
          {TabItems}
        </Tabs>
      </div>
    );
  }
} 

NavTab.propTypes = {
  config: PropTypes.object,
};

export default NavTab;