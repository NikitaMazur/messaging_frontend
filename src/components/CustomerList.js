import React from 'react';
import { Table } from 'antd';


const dataSource = [{
    key: '1',
    supplier: 'Starbucks',
    description: 'There will be a description',
    location: '10 Downing Street',
    date: '20 April 2018 18:46',
  }, {
    key: '2',
    supplier: 'McDonalds',
    description: 'There will be a description',
    location: '10 Downing Street',
    date: '5 May 2018 22:02',
  }];
  
  const columns = [{
    title: 'Supplier',
    dataIndex: 'supplier',
    key: 'supplier',
  }, {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  }, {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  }, {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  }];
  
export default () => {
    return (
      <div>
        <h1>Suppliers invites list</h1>
        <Table dataSource={dataSource} columns={columns} />
      </div>
    );
}
