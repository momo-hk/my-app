import React, {Component} from 'react';
import {WSInput} from 'components/shared';

class SchMgrCommitte extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      sponsorEng: 'DEF Group',
      sponsorChi: 'DEF 機構'
    };
  }

  onChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    const { sponsorEng, sponsorChi } = this.state;
    return (
      <div> 
        <WSInput label="辦學團體名稱(英)" value={sponsorEng} onChange={this.onChange} id='sponsorEng' />
        <WSInput label="辦學團體名稱(中)" value={sponsorChi} onChange={this.onChange} id='sponsorChi' />
      </div>
    );
  }
}

export default SchMgrCommitte;