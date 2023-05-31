export interface IUser {
	id: string;
	name: string;
	username: string;
	email: string;
	address: IAddress;
	phone: string;
	website: string;
	company: ICompany;
}

interface IAddress {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
}

interface ICompany {
	name: string;
	catchPhrase: string;
	bs: string;
}

export enum UserActionTypes {
	FETCH_USER_REQUEST = 'FETCH_USER_REQUEST',
	FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
	FETCH_USER_ERROR = 'FETCH_USER_ERROR',
}

export interface IUserState {
	users: Record<string, IUser>;
	loading: boolean;
	error: string | null;
}

export interface FetchUserRequestAction {
	type: UserActionTypes.FETCH_USER_REQUEST;
	payload: { userId: string };
}

interface FetchUserSuccessAction {
	type: UserActionTypes.FETCH_USER_SUCCESS;
	payload: IUser;
}

interface FetchUserErrorAction {
	type: UserActionTypes.FETCH_USER_ERROR;
	payload: string;
}

export type UserActions = FetchUserRequestAction | FetchUserSuccessAction | FetchUserErrorAction;
