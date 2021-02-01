import React from 'react';
import { Input, Button, Icon } from 'antd';
import Highlighter from 'react-highlight-words';

const getColumnSearchProps = ({
  dataIndex, searchInput,
  searchText, setSearchText,
  searchColumn, setSearchColumn,
}) => ({
  filterDropdown: ({
    // eslint-disable-next-line react/prop-types
    setSelectedKeys, selectedKeys, confirm, clearFilters,
  }) => (
    <div style={{ padding: 8 }}>
      <Input
        ref={searchInput}
        placeholder={`Search ${dataIndex}`}
        value={selectedKeys[0]}
        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={() => {
          confirm();
          setSearchText(selectedKeys[0]);
          setSearchColumn(dataIndex);
        }}
        style={{ width: 188, marginBottom: 8, display: 'block' }}
      />
      <Button
        type="primary"
        onClick={
            () => {
              confirm();
              setSearchText(selectedKeys[0]);
              setSearchColumn(dataIndex);
            }
        }
        icon="search"
        size="small"
        style={{ width: 90, marginRight: 8 }}
      >
        Search
      </Button>
      <Button
        onClick={() => {
          clearFilters();
          setSearchText('');
        }}
        size="small"
        style={{ width: 90 }}
      >
        Reset
      </Button>
    </div>
  ),
  filterIcon: (filtered) => (
    <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
  ),
  onFilter: (value, record) => record[dataIndex]
    .toString()
    .toLowerCase()
    .includes(value.toLowerCase()),
  render: (text) => (searchColumn === dataIndex ? (
    <Highlighter
      highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
      searchWords={[searchText]}
      autoEscape
      textToHighlight={text.toString()}
    />
  ) : (
    text
  )),
});

export default getColumnSearchProps;
