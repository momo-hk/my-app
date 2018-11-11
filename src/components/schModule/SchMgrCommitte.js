import React, {Component, Fragment} from 'react';
import {WSInput, WSLinkableItem} from 'components/shared';
import {SchMgrCommitteForm} from 'components/schModule'
import './SchMgrCommitte.css';
import { Table, Button } from 'antd';

// sorter for table columns
import { sortByEngName } from 'utils/schModule/committeSorter'

// for testing purpose only
import { testData } from 'data/committeList';

// define table columns
const tableColumns = [
  {title: '姓名(英)', dataIndex: 'nameEng', sorter: sortByEngName}, 
  {title: '姓名(中)', dataIndex: 'nameChi'}, 
  {title: '性別', dataIndex: 'sex'}, 
  {title: '成員身份', dataIndex: 'status'}, 
  {title: '代表組別', dataIndex: 'representative'}, 
  {title: '職業', dataIndex: 'occupation' }, 
  {title: '電話號碼', dataIndex: 'TelNo'}
];

class SchMgrCommitte extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      sponsorEng: 'DEF Group',
      sponsorChi: 'DEF 機構',
      committeList: [],
      committe: {},
      selectedRowKeys: [], 
      loading: false,
      showAddComponent: false,
    };
    this.initialSponsorState = {
      sponsorEng: 'DEF Group',
      sponsorChi: 'DEF 機構',
    }
  }

  componentDidMount() {
    this.setState({
      committeList: testData
    });
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

      // get list of committe from API and update the state

    });
  }

  onSaveHandler = (event) => {

    // update sponsor via API
  }

  onDeleteHandler = (event) => {
    const selectedRowKeys = this.state.selectedRowKeys;
    if (selectedRowKeys.length > 0) {
      // delete selected committe from API

    } 
  }

  onResetHandler = (event) => {
    this.setState({
      sponsorEng: this.initialSponsorState.sponsorEng,
      sponsorChi: this.initialSponsorState.sponsorChi,
    });
  }

  backToInitialPage = () => {
    this.setState({
      showAddComponent: false,
    });
  }

  onEngNameClick = (event) => {
    const committeList = this.state.committeList;
    const committe = committeList.find(committe => {
      return committe['nameEng'] === event.target.innerText;
    }); 
    this.setState({
      showAddComponent: true,
      committe: {
        
      }
    });
  }

  getLinkableItem = (label, handler) => {
    return <WSLinkableItem label={label} onClickHandler={handler} />
  }

  render() {
    const { sponsorEng, sponsorChi, committeList, committe, selectedRowKeys, loading, showAddComponent } = this.state;

    let linkableCommitteList = [];
    if (committeList) {
      linkableCommitteList = committeList.map(item => ({
        ...item,
        nameEng: this.getLinkableItem(item['nameEng'], this.onEngNameClick)
      }));
    }

    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };

    return (
      <div className="schMrgComitteDiv"> 
        {
          showAddComponent 
          ? <SchMgrCommitteForm formTitle="增新學校管理委員會成員" formData={committe} onBackHandler={this.backToInitialPage} />
          : <Fragment>
              <WSInput label="辦學團體名稱(英)" value={sponsorEng} onChange={this.onInputChange} id='sponsorEng' />
              <WSInput label="辦學團體名稱(中)" value={sponsorChi} onChange={this.onInputChange} id='sponsorChi' />
              { linkableCommitteList && 
                <Table columns={tableColumns} 
                  dataSource={linkableCommitteList} 
                  size="middle" 
                  rowSelection={rowSelection} 
                  loading={loading}   
                  onItemLink={this.onSaveHandler}
                />
              } 
              <div className="schMrgButtonGrp">
                  <Button className="schMrgButton" icon="plus" onClick={this.onAddHandler}>增新</Button>
                  <Button className="schMrgButton" icon="minus" onClick={this.onDeleteHandler}>刪除</Button>
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