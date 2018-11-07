const navTabConfig = {
  'schDetails': {
    defaultItem: '2',
    tabItems: [
      {key: "1", tabName: '基本資料', disabled: true},
      {key: "2", tabName: '學校管理委員會', component: 'components/schModule/SchMgrCommitte' ,disabled: false},
      {key: "3", tabName: '敎職員編制', disabled: true},
      {key: "4", tabName: '班級結構', disabled: true},
      {key: "5", tabName: '文件', disabled: true},
    ]
  }
}

export default navTabConfig;