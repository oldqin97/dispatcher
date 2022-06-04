import reducer from '@/reducer/counte';
import { PLUS, MINUS } from '@/action/counte';

export default ctx => {
	const { plus, minus } = reducer(ctx.$data);

	return function (type, ...args) {
		switch (type) {
			case 'PLUS':
				ctx.result = plus(...args);
				break;
			case 'MINUS':
				ctx.result = minus(...args);
				break;
			default:
				break;
		}
	};
};
