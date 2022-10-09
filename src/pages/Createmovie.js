import "../assets/css/Createmovie.css";
import PlusCross from "../assets/img/plus-circle.png";
import React, { useState } from "react";
import axios from "axios";

function Createmovie() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [country, setCountry] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");

  const handleData = async (e) => {
    e.preventDefault();
    const movie = {
      name,
      description,
      releaseDate,
      ticketPrice,
      country,
      genre,
      rating,
      image,
    };

    const result = await axios.post("http://localhost:4300/createMovie", movie);
    console.log(result);
  };

  return (
    <>
      <h2>CREATE A MOVIE</h2>
      <form onSubmit={handleData}>
        <div className='movieName'>
          <label>Name of Movie</label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='movieDescription'>
          <label>Description</label>
          <textarea
            type='text'
            name='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className='ReleaseDate'>
          <div>
            <label>Release Date</label>
            <input
              type='date'
              name='releaseDate'
              value={releaseDate}
              onChange={(e) => setReleaseDate(e.target.value)}
            />
          </div>
          <div>
            <label>Ticket Price</label>
            <input
              type='number'
              name='ticketPrice'
              value={ticketPrice}
              onChange={(e) => setTicketPrice(e.target.value)}
            />
          </div>
        </div>
        <div className='countryGenre'>
          <div>
            <label>Country</label>
            <input
              type='text'
              name='country'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div>
            <label>Genre</label>
            <input
              type='text'
              name='genre'
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>
        </div>

        <div className='AddImage'>
          <div>
            <label>Add Image</label>
            <div id='imgarea'>
              <img
                src={PlusCross}
                alt='addimage'
                width='40px'
                height='40px'
                id='img'
                name='img'
                accept='image/*'
                type='file'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <p>
                Drag and drop picture here,
                <br /> or click here to add them
              </p>
            </div>
          </div>
        </div>
        <div className='movieRating'>
          <label>Rating</label>
          <input
            type='text'
            name='rating'
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <button id='btnMovie' onClick={handleData}>
          Submit
        </button>
      </form>
    </>
  );
}

export default Createmovie;
