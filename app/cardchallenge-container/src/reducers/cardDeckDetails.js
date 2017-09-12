import { CREATE_DECK_SUCCESS, SHUFFLE_DECK_SUCCESS, SORT_BY_CARD_VALUE_SUCCESS, SORT_BY_SUIT_VALUE_SUCCESS } from '../actions/actionTypes';

export default function cardDeckDetails(state, action) {
    switch(action.type) {
        case CREATE_DECK_SUCCESS:
        case SHUFFLE_DECK_SUCCESS:
        case SORT_BY_CARD_VALUE_SUCCESS:
        case SORT_BY_SUIT_VALUE_SUCCESS:
            return {...state, ...action.details};
        default: 
            return state;
    }
}