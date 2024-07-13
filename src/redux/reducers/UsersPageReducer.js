import {types} from '../types';

const initialState = {
    users: []
}
export default function  UsersPageReducer(state = initialState, action) {
    switch (action.type) {
        case types.USERS:
            return{...state,users: action.payload}
        case types.USERS_ID:
            const updatedUserId = action.payload.id;
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === updatedUserId ? { ...user, ...action.payload } : user
                )
            };

        default: return state
    }
}