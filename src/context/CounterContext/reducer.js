import * as actionsTypes from './actionstypes'
import { initialState } from './indext';

export const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionsTypes.INCREASE:
            return { ...state, counter: state.counter + 1 };
        case actionsTypes.DECREASE:
            return { ...state, counter: state.counter - 1 };
        case actionsTypes.RESET:
            return {...initialState};
        case actionsTypes.SET_COUNTER:
            return {...state, ...action.payload};
        case actionsTypes.ASYNC_INCREASE_START:
            return {...state, loading: true};
        case actionsTypes.ASYNC_INCREASE_END:
            return {...state, loading: false , counter: state.counter + 1};
        case actionsTypes.ASYNC_INCREASE_ERROR:
            return {...state, loading: false};
    }

    return state;
}