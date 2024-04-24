const initialState = {
    list: []
}

const addTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Add_Task":
            const { id, data } = action.payLoad;

            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
            break;

        case "Delete_Task":
            const newList = state.list.filter((element) => element.id != action.id)
            return {
                ...state,
                list: newList
            }
            break;
        default:
            return state;
            break;
    }
}

export default addTaskReducer;