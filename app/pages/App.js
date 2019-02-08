import React from 'react'
import SamplePage from './Sample'
import Header from '../components/Header'
import MoviesList from '../components/MoviesList'
import MovieServices from '../services/moviesService'


class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			moviesListData : []
		};
	}
	componentDidMount(){
		MovieServices().then((json) => {
			this.setState({
				moviesListData: json 
			});
		} ).catch();
		
	
	}
	render(){
		return(
		<div>
			<Header/>
			<SamplePage/>
			<MoviesList data={this.state.moviesListData} />
		</div>
		);
	}
}

export default App
