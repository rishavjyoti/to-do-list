const items = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEMS':
            return [
                ...state,
                {
                    id: action.id,
                    Title: action.Title,
                    Description: action.Description,
                    status:action.status,
                    date:action.date,
                }
            ]
        case 'UPDATE_ITEM':
            return state.filter(t=> t.id !== action.id);
        default:
            return state
    }
}

export default items;

