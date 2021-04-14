import React, {useEffect} from "react";

import { updateItem, addItems} from '../actions'
import { connect } from 'react-redux'

import { DetailsList } from "@fluentui/react";
import { PrimaryButton } from "@fluentui/react";

function List({Items, updateItem, addItems,}) {

  const columns = [
    {
      key: "column1",
      name: "Title",
      fieldName: "title", 
      minWidth: 30,
      maxWidth: 200,
      isRowHeader: true,
      data: "string",
      isPadded: true
    },
    {
      key: "column2",
      name: "Description",
      fieldName: "description",
      minWidth: 40,
      maxWidth: 400,
      isRowHeader: true,
      data: "string",
      isPadded: true
    },
    {
      key: "column3",
      name: "Status",
      fieldName: "status",
      minWidth: 40,
      maxWidth: 200,
      isRowHeader: true,
      data: "string",
      isPadded: true
    },
    {
      key: "column4",
      name: "Date",
      fieldName: "date",
      minWidth: 100,
      maxWidth: 300,
      data: "string",
      isPadded: true
    },
    {
      key: "column5",
      name: "Complete",
      fieldName: "Complete",
      minWidth: 100,
      maxWidth: 100,
    },
  ];

  useEffect(()=>{

    const data = localStorage.getItem('data')
    if(data){
      console.log(JSON.parse(data))
      JSON.parse(data).forEach(item => {
        addItems(item);
      })
    }

  },[addItems])
    
  useEffect(()=>{
    console.log(Items)
    localStorage.setItem('data',JSON.stringify(Items))
  })

  const items = Items.map(item  => {
    const container = {};
    container.id= item.id;
    container.title= item.Title;
    container.description= item.Description;
    container.status= item.status.text;
    container.date= new Date(item.date).toString();

    return container;
  });

  function _onRenderItemColumn(item, index, column){
    if (column.fieldName === 'Complete') {
        return <PrimaryButton onClick={() => {
          console.log('Complete');
          updateItem(item.id);}}>Complete</PrimaryButton>;
    }
    return item[column.fieldName];
  }
  
  return (
    <DetailsList columns={columns} items={items} onRenderItemColumn={_onRenderItemColumn}>
    </DetailsList>
  );
}

const mapStateToProps = state => ({
    Items: state.items
})

const mapDispatchToProps = dispatch => ({
    updateItem: id => dispatch(updateItem(id)),
    addItems: data => dispatch(addItems(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(List);
