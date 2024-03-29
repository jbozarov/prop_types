import React, {Component} from 'react';


const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';


class MovieDetail extends Component {

   state = {
      movie: {},
   }

   async componentDidMount () {
      try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=3f1677a463449fb2a6443b049c05d134&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);
      const movie = await res.json();
      this.setState({
         movie,
      });

      } catch (e) {
         console.log(e);
      }
   }


   render() {
      const { movie } = this.state;
      return (
         <div>
         <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title} />
         <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
         <h1> {movie.title} </h1>
         <h3> {movie.release_date} </h3>
         <p> {movie.overview} </p>
         </div>
      )
   }
}


export default MovieDetail;
