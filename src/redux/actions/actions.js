import types from "../types/types"

//  Tabs selection

export const select_new_project_action = () => async (disptach) => {
    disptach({
        type: types.SELECT_NEW_PROJECT
    })
}

export const select_project_list_action = () => async (disptach) => {
    disptach({
        type: types.SELECT_PROJECT_LIST
    })
}

