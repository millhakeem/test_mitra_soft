import { UserActionTypes } from '../../types/user';

export const fetchUserById = (userId: string) => ({
	type: UserActionTypes.FETCH_USER_REQUEST,
	payload: { userId },
});
