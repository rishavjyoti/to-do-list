let incrementId = 0;

export const addItems = item => ({
    type: 'ADD_ITEMS',
    id: incrementId++,
    Title: item.Title,
    Description: item.Description,
    statusId:item.status.key,
    statusText:item.status.text,
    date:item.date,
});

export const updateItem = id => ({
    type: 'UPDATE_ITEM',
    id
});