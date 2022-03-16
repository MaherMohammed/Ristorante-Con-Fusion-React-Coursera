import {DISHES} from '../shared/dishes.js'
import {COMMENTS} from '../shared/comments'
import {LEADERS} from '../shared/leaders'
import {PROMOTIONS} from '../shared/promotions'

// we will update this
export const initialState = {
    dishes:DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders:LEADERS
}

//create our reducer function (takes state and action and return the new state)
//we cannot change the state in the reducer function (copy it)
//state = initialState ==> default value
export const Reducer = (state = initialState, action) =>{
    return state;
}