import React from "react";

import { updateItem } from '../actions'
import { connect } from 'react-redux'

import { Stack, DetailsList} from "@fluentui/react";
import { ThemeProvider, makeStyles } from "@fluentui/react-theme-provider";
import { PrimaryButton } from "@fluentui/react";


const useStyle = makeStyles({
  app: {
    height: "100%",
    ">div": {
      display: "flex",
      height: "100%",
      flexDirection: "column"
    },
    textAlign: "center",
  },
  content: {
    display: "flex"
    //flex: 1
  },
  stackRoot: {
    flex: 1
  },
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    maxWidth: "100%",
    minHeight: 0
  }
});


function List({ Items, updateItem }) {

  const columns = [
    {
      key: "column1",
      name: "Type",
      isIconOnly: true,
      minWidth: 16,
      maxWidth: 16,
    },
    {
      key: "column2",
      name: "Title",
      fieldName: "title",
      minWidth: 30,
      maxWidth: 200,
      isRowHeader: true,
      data: "string",
      isPadded: true
    },
    {
      key: "column3",
      name: "Description",
      fieldName: "description",
      minWidth: 20,
      maxWidth: 500,
      isRowHeader: true,
      data: "string",
      isPadded: true
    },
    {
      key: "column4",
      name: "Status",
      fieldName: "status",
      minWidth: 30,
      maxWidth: 100,
      isRowHeader: true,
      data: "string",
      isPadded: true
    },
    {
      key: "column5",
      name: "Date",
      fieldName: "date",
      maxWidth: 100,
      data: "string",
      isPadded: true
    },
    {
      key: "column6",
      name: "Complete",
      fieldName: "Complete",
      minWidth: 100,
      maxWidth: 100,
    },
  ];

  const classes = useStyle();

  console.log(Items);
  const items = Items.map(item  => {
    const container = {};
    container.id= item.id;
    container.title= item.Title;
    container.description= item.Description;
    container.status= item.status;
    container.date= new Date(item.date).toString();

    return container;
  });

  function _onRenderItemColumn(item, index, column){
    if (column.fieldName === 'Complete') {
        return <PrimaryButton onClick={() => {
          updateItem(item.id);}}>Complete</PrimaryButton>;
    }
    return item[column.fieldName];
  }
  
  return (
    <div className={classes.app}>
      <ThemeProvider>
        <div className={classes.content}>
          <Stack className={classes.stackRoot}>
            <div className={classes.container}>
              <DetailsList columns={columns} items={items} onRenderItemColumn={_onRenderItemColumn }/>
            </div>
          </Stack>
        </div>
      </ThemeProvider>
    </div>
  );
}

const mapStateToProps = state => ({
    Items: state.items
})

const mapDispatchToProps = dispatch => ({
    updateItem: id => dispatch(updateItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
