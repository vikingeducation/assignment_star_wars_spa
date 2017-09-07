import React from 'react';
import ReactLoading from 'react-loading';
export default props =>
	!props.condition
		? <ReactLoading type="spinningBubbles" color="#444" />
		: <div>
				{props.children}
			</div>;
