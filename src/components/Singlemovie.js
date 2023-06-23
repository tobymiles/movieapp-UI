import React, { useState, useEffect } from "react";
import Movieimage1 from "../assets/img/card-img.png";
import "../assets/css/Singlemovie.css";
import axios from "axios";

function Singlemovie() {
  const [data, setData] = useState([]);
  // const [rating, setRating] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4300/allMovies").then((res) => {
      setData(res.data);
      // setRating(res.data.rating);
      console.log("Api was called");
      console.log(res.data[0].id);
    });
  }, []);

  return (
    <div className='moviecard'>
      <img src={Movieimage1} alt='movieimg' />
      <div className='Mid-left'>
        <p>Fantacy</p>
      </div>
      <div className='Mid-left1'>
        <p>{data.genre}</p>
      </div>
      <div className='Mid-left2'>
        <h3>{data.name}</h3>
      </div>
    </div>
  );
}

const check = ()=>{
  console.log(data);
}

export default Singlemovie;
