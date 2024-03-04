import React, { useEffect } from "react";
import { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import "./intro.css";
export default function Home() {
  //global variables
  const navigate= useNavigate();
  const options = ["HOME", "FILMS", "AWARDS", "ABOUT US", "CONTACT US"];
  const reelref=useRef(null);
    const mainref=useRef(null);
  //states
  const [optionsarray, setoptionsarray] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  const [loading, setloading] = useState(true);

  //Timeouts/intervals
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 4000);
   
    setTimeout(()=>{
     if(reelref.current)
     {
      reelref.current.style.display='none';
     }
     if(mainref.current)
     {
      mainref.current.style.overflowY = "scroll";
     }
    },11000)
  });
  //functions

  function handleshiftcontent(index) {
    const newArray = optionsarray.map((_, i) => i === index);
    setoptionsarray(newArray);
    navigate('./1');
  }
  const videoRef = useRef(null);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.playbackRate = 2; // Change this value to your desired playback speed
  //   }
  // }, []);


  // const scrollref1=useRef(null);
  // const scrollref2=useRef(null);
  // const scrollref3=useRef(null);
  
  // const arr= new Array(100).fill(1);
  return (
    <div className="parenthome" ref={mainref}>
        <div className="filmreels1" ref={reelref}>
        <video ref={videoRef} width="110%" height="110%" autoPlay muted >
          <source src="./introdf1.mp4" type="video/mp4" />
          <source src="./movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
        <div className="maincontent">
      <div className="titlebar">
        <img
          src="./pics/fmaclogos/bdome.png"
          alt="titlelogo"
          className="fmaclogo"
        />

        <div className="fmactitle">
          <p>
            <strong>
            <span className="hightlighttext">
              F<span className="dot"></span>
            </span>
            <span className="disappearingtext">ilm </span>
            <span className="hightlighttext">
              Ma<span className="dot"></span>
            </span>
            <span className="disappearingtext">king </span>
            <span className="hightlighttext">C</span>
            <span className="disappearingtext">lub</span>
            <span className="hightlighttext">&nbsp;BITS GOA</span>
            </strong>
          </p>
          {/* <p>Established 2016...</p> */}
        </div>
        <div className="date"><p>Established 2016...</p></div>
      </div>
      <div className="contentbox">
        <div className="menubar">
          {options.map((value, index) => {
            return (
              <div
                className="menuoption"
                onClick={() => handleshiftcontent(index)}
              >
                <p
                  style={{
                    fontSize: !optionsarray[index] ? "17px" : "20px",
                    color: optionsarray[index] ? "red" : "white",
                  }}
                >
                  {value}
                </p>
              </div>
            );
          })}
        </div>
        <div className="news">
          {!loading ? (
            <>
              <div className="news1">
                <div className="newsbox">
                  <img
                    src="./pics/newsphotos/rakshasa.png"
                    className="newsimage"
                    alt="newsimage"
                  ></img>
                  <p className="newstag tag1">
                  FMaC's "Rakshasa" bags Special Jury Mention Award at Jiff
                  2024!!
                </p>
                </div>
                
              </div>
              <div className="news2">
                <div className="newsbox">
                  <img
                    src="./pics/newsphotos/sheesha.png"
                    className="newsimage"
                    alt="newsimage"
                  ></img>
                  <p className="newstag tag2">
                  Waves curtain raiser "Sheesha" receives 6k views, becoming the
                  fastest spreading FMaC video!
                </p>
                </div>
                
              </div>
              <div className="news3">
                <div className="newsbox">
                  <img
                    src="./pics/newsphotos/zeher.png"
                    className="newsimage"
                    alt="newsimage"
                  ></img>
                  <p className="newstag tag3">
                  "Zeher", FMaC's latest venture gets nominated in TOP 35 of
                  IFP's 50 hr Film Making Contest!!
                </p>
                </div>
                
              </div>
              <div className="news4">
                <div className="newsbox">
                  <img
                    src="./pics/newsphotos/treasurehunt.png"
                    className="newsimage"
                    alt="newsimage"
                  ></img>
                   <p className="newstag tag4">
                  FMaC's annual "Treasure Hunt" attracts more than 800
                  participants!
                </p>
                </div>
               
              </div>
              <div className="news5">
                <div className="newsbox">
                  <img
                    src="./pics/newsphotos/aaja.png"
                    className="newsimage"
                    alt="newsimage"
                  ></img>
                   <p className="newstag tag5">
                  "Aaja", FMaC's preincuction film premiers in the auditorium!!
                </p>
                </div>
               
              </div>
              <div className="end"></div>
            </>
          ) : (
            <>
              <div class="loadingscreen">
                <div class="loader"></div>
              </div>
            </>
          )}
        </div>
      </div>
      </div> 
    </div>
  );
}
