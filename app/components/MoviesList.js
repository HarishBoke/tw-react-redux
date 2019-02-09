import React from 'react' 
import MovieItem from '../components/MovieItem'


export default class MoviesList  extends React.Component{
    constructor(props){
        super(props);
        //this.moviesListData = movies;
        this.state = {
            favouriteCount: 0
        }
    }
    mouseOver() {
        console.log("Mouse over!!!");
        //this.setState({flipped: true});
      }
    render(){
        return(
            <div id='moviesList' className='container-fluid'>
                 <header>
                 <h3 className='_title'>
                        <span>Movies</span>
                        <small className="float-right">Favourite ({this.state.favouriteCount})</small>
                 </h3>
                    
                 </header>
                 

                 <div className='_moviesList'>
                        {
                        this.props.data.map( (movie, index) =>  <MovieItem  key={index} type={movie.Type} title={movie.Title} avatar={movie.Poster} year={movie.Year} />)
                        }
                 </div>
            </div>
        );
    }
}