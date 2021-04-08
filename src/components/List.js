import React, { useContext } from "react";
import Store from "../context";
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





export default function App() {

  const columns = [
    {
      key: "column1",
      name: "Type",
      isIconOnly: true,
      minWidth: 16,
      maxWidth: 16,
      onRender: () => {
        return "I";
      }
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
      onRender: () => (
        <PrimaryButton onClick={(item) => {
          dispatch({ type: "COMPLETE", payload: item.values });}}>Complete</PrimaryButton>
      )
  
    },
  ];

  const classes = useStyle();

  const { state, dispatch } = useContext(Store);

  const handleComplete = (item) => {
    dispatch({ type: "COMPLETE", payload: item });
  }

  console.log(state.todos);
  const items = state.todos.map(item  => {
    const container = {};
    const cleanItem = JSON.parse(item);
    container.title= cleanItem.Title;
    container.description= cleanItem.Description;
    container.status= cleanItem.status.text;
    container.date= new Date(cleanItem.date).toString();

    return container;
  });

  console.log(items);
  return (
    <div className={classes.app}>
      <ThemeProvider>
        <div className={classes.content}>
          <Stack className={classes.stackRoot}>
            <div className={classes.container}>
              <DetailsList columns={columns} items={items} />
            </div>
          </Stack>
        </div>
      </ThemeProvider>
    </div>
  );
}
