//These are called thunks.

import authorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorSuccess(authors){

    return {type:types.LOAD_AUTHOR_SUCCESS,authors} ; // returns action object with type property.
                                          // ES6  you can omit if RHS == LHS                   
}

export function loadAuthors(){
    return function(dispatch){
        dispatch(beginAjaxCall());
        return authorApi.getAllAuthors().then(authors=>{
            dispatch(loadAuthorSuccess(authors));
        }).catch(error=>{
            throw(error);
        });
    };
}