const MovieServices = () =>  {
    return fetch('https://thoughtworksreactreduxmovies.firebaseio.com/movies.json')
    .then((res)=>{
        return res.json();
    })
    .catch( err =>{
        console.log(err);
    });
}
export default MovieServices