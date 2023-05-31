import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchAllPosts from '../store/action-creators/post';

export const useActions = () => {
	const dispatch = useDispatch();

	return bindActionCreators(fetchAllPosts, dispatch);
};
