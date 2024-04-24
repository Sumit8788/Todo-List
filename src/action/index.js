export const addTask = (data) => {
    return {
        type: "Add_Task",
        payLoad: {
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const deleteTask = () => {
    return {
        type: "Delete_Task"
    }
}

export const completedTask = () => {
    return {
        type: "Completed_Task"
    }
}