import { IUserState, UserActions, UserActionTypes } from '../../types/user';

const initialState: IUserState = {
	users: {},
	loading: false,
	error: null,
};

export const userReducer = (state = initialState, action: UserActions): IUserState => {
	switch (action.type) {
		case UserActionTypes.FETCH_USER_REQUEST:
			return {
				...state,
				loading: true,
			};

		case UserActionTypes.FETCH_USER_SUCCESS: {
			const newUser = action.payload;

			return {
				...state,
				loading: false,
				users: {
					...state.users,
					[newUser.id]: newUser,
				},
			};
		}

		case UserActionTypes.FETCH_USER_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};
