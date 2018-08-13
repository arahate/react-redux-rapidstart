
import * as types from './actionTypes';
export function beginAjaxCall(){

    return {type:types.BEGIN_AJAX_CALL} ; // returns action object with type property.
                                          // ES6  you can omit if RHS == LHS                   
}
