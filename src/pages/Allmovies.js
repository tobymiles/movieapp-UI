import "../assets/css/Allmovies.css";
import Movie from "../components/Singlemovie";

function Allmovies() {
  return (
    <div>
      <div>
        <input
          className='moviessearch'
          type='text'
          placeholder='Search for movie'
        />
      </div>

      <Movie />
    </div>
  );
}

export default Allmovies;
