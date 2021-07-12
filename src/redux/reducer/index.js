import { selector } from "../states/initialStates";
import types from "../types/types";

export function tabSelection (state = selector, action) {
    switch (action.type) {
        case types.SELECT_NEW_PROJECT:
            return {
                projectList: false,
                newProject: true
            }
        case types.SELECT_PROJECT_LIST:
            return {
                projectList: true,
                newProject: false
            }    
        default:
            return state;
    }
}