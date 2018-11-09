import React, {Component, Fragment} from 'react';
import {WSInput} from 'components/shared';
import {SchMgrCommitteForm} from 'components/schModule'
import './SchMgrCommitte.css';
import { Table, Button } from 'antd';

// sorter for table columns
import { sortByEngName } from 'utils/schModule/committeSorter'

// for testing purpose only
import { testData } from 'data/committeList';

// define table columns
const tableColumns = [
  {title: '姓名(英)', dataIndex: 'englishName', sorter: sortByEngName}, 
  {title: '姓名(中)', dataIndex: 'chineseName'}, 
  {title: '性別', dataIndex: 'sex'}, 
  {title: '成員身份', dataIndex: 'status'}, 
  {title: '代表組別', dataIndex: 'representation'}, 
  {title: '職業', dataIndex: 'occupation' }, 
  {title: '電話號碼', dataIndex: 'TelNo'}
];

class SchMgrCommitte extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      sponsorEng: 'DEF Group',
      sponsorChi: 'DEF 機構',
      selectedRowKeys: [], 
      loading: false,
      showAddComponent: false,
    };
    this.initialSponsorState = {
      sponsorEng: 'DEF Group',
      sponsorChi: 'DEF 機構',
    }
  }

  onInputChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys });
  }

  onAddHandler = (event) => {
    this.setState({
      showAddComponent: true,
    });
  }

  onResetHandler = (event) => {
    this.setState({
      sponsorEng: this.initialSponsorState.sponsorEng,
      sponsorChi: this.initialSponsorState.sponsorChi,
    });
  }

  render() {
    const { sponsorEng, sponsorChi, selectedRowKeys, loading, showAddComponent } = this.state;

    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    return (
      <div className="schMrgComitteDiv"> 
        {
          showAddComponent 
          ? <SchMgrCommitteForm />
          : <Fragment>
              <WSInput label="辦學團體名稱(英)" value={sponsorEng} onChange={this.onInputChange} id='sponsorEng' />
              <WSInput label="辦學團體名稱(中)" value={sponsorChi} onChange={this.onInputChange} id='sponsorChi' />
              { testData && 
                <Table columns={tableColumns} dataSource={testData} size="middle" rowSelection={rowSelection} loading={loading} />
              } 
              <div className="schMrgButtonGrp">
                  <Button className="schMrgButton" icon="plus" onClick={this.onAddHandler}>增新</Button>
                  <Button className="schMrgButton" icon="minus">刪除</Button>
                  <Button className="schMrgButton" icon="close" onClick={this.onResetHandler}>重設</Button>
                  <Button className="schMrgButton" icon="save">儲存</Button>
              </div>
            </Fragment>
        }
      </div>
    );
  }
}

export default SchMgrCommitte;