import { DISHES } from '../shred/dishes';
import { COMMENTS } from '../shred/Comments';
import { PROMOTIONS } from '../shred/Promotions';
import { LEADERS } from '../shred/Leaders';

export const initialState ={

    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
    return state;
};