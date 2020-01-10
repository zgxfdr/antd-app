// action types
const INIT_RECOED = "INIT_RECOED";
const ADD_RECOED = "ADD_RECOED";
const EDIT_RECOED = "EDIT_RECOED";
const DEL_RECOED = "DEL_RECOED";


export const initRecords = (records) => {
    return { type: INIT_RECOED, records }
}

export const addRecords = (records) => {
    return { type: ADD_RECOED, records }
}

export const editRecords = (records) => {
    return { type: EDIT_RECOED, records }
}


export const deleteRecords = (recordsIndex) => {
    return { type: DEL_RECOED, recordsIndex }
}
