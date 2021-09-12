import React from 'react';
import axios from 'axios';

class App extends React.Component {
	state = {
		isLoading: true,
		movies: [],
	};

	getMoives = async () => {
		const {
			data: {
				data: {movies},
			},
		} =  await axios.get('https://yts-proxy.now.sh/list_movies.json');

		this.setState({ movies, isLoading: false })
	}

	componentDidMount() {
		// 영화 데이터 로딩
		this.getMoives();
	}

	render() {
		const { isLoading } = this.state; //구조분해할당
		return <div>{isLoading ? 'loading...' : 'we are ready'}</div>;
	}
}

export default App;
