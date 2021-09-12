import React from 'react';
// import Prototype from 'prop-types';

class App extends React.Component {
	state = {
		isLoading: true,
		movies: [],
	};

	componentDidMount() {
		// 영화 데이터 로딩
		setTimeout(() => {
			this.setState({ isLoading: false });
		}, 6000);
	}

	render() {
		const { isLoading } = this.state; //구조분해할당
		return <div>{isLoading ? 'loading...' : 'we are ready'}</div>;
	}
}

export default App;
