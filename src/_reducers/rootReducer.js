import {pasteConstants}  from '../_constants/paste.constants';

const initialState={
    pasteLists:[],

}

const rootReducer = (state=initialState,action)=>{
    switch(action.type){
        case pasteConstants.GETALL_REQUEST_PASTE:
            return{
                ...state,
                pasteLists:action.payload
            }
            default:return state;
        }

}

export default rootReducer;