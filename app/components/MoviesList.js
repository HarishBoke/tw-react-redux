import React from 'react' 
import MovieItem from '../components/MovieItem'


export default class MoviesList  extends React.Component{
    constructor(props){
        super(props);
        //this.moviesListData = movies;
    }
    render(){

        return(
            <div id='moviesList'>
                 <h3 className='_title'>Movies</h3>
                 <div className='_moviesList'>
                        {
                        this.props.data.map( (movie, index) =>  <MovieItem key={index} type={movie.Type} title={movie.Title} avatar={movie.Poster} year={movie.Year} />)
                        }
                 </div>
            </div>
        );
    }
}