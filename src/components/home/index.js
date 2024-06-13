import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import banner from "../../images/2.jpg";
import "./home.scss";

const Home = () => {
  const text = "Junior Front-End Developer";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        // Khi hiển thị hoàn thành, xóa và bắt đầu lại
        setTimeout(() => {
          setDisplayText("");
          setIndex(0);
        }, 200);
      }
    }, 150); // Tốc độ gõ chữ

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="home">
      <div className="home__banner">
        <img src={banner} alt="" />
      </div>
      <div className="home__text">
        <h1>Ung Chấn Vinh</h1>
        <h2>I'm {displayText}</h2>
        <div className="home__text__icon">
          <Link to={"https://facebook.com/ucv0411"} target="_blank">
            <FacebookIcon></FacebookIcon>
          </Link>
          <Link to={"https://facebook.com/ucv0411"} target="_blank">
            <InstagramIcon></InstagramIcon>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
