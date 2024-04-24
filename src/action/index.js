export const addTask = (data) => {
    return {
        type: "Add_Task",
        payLoad: {
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const deleteTask = (id) => {
    return {
        type: "Delete_Task",
        id
    }
}
