import React from "react";
import { useRef, useState, useEffect } from "react";
import "./filmspage.css";
import sugg from "./suggestionsdata.json";
import films from "./films.json";
import music from "./music.json";
import awardwinning from "./awardwinning.json";
export default function Rough() {
  const [descriptionimage,setdescriptionimage]=useState(null);
  const [descriptionplot,setdescriptionplot]=useState(null);
  const [descriptionlogo,setdescriptionlogo]=useState(null);
  const listindex=[films,music,awardwinning,films,films];
  const menuarr=["Short Films","Music Videos","Award Winning","FMaC Specials","Event Coverages"]
  // const moviesarr=new Array(20).fill(1);
  const homeref = useRef(null);
  const moviesref = useRef(null);
  const musicref = useRef(null);
  const awardref = useRef(null);
  const miscref = useRef(null);
  const [dist, setdist] = useState(0);
  const [currref, setcurrref] = useState(homeref);
  const [currsugg,setcurrsugg]=useState(0);
  const [prevsugg,setprevsugg]=useState(0);
  const selectorref = useRef(null);
  const menubarref = useRef(null);
  const descriptionref=useRef(null);
  const parentref=useRef(null);
  const [soundimage, setsoundimage] = useState("./pics/utils/soundoff.png");
  function changesound() {
    if (soundimage === "./pics/utils/soundoff.png")
      setsoundimage("./pics/utils/soundon.png");
    else setsoundimage("./pics/utils/soundoff.png");
  }

  const refs = useRef([]);
  function handleVideoEnd(index) {
    const vidref = refs.current[index];
    if (vidref) {
      vidref.style.opacity = 0;
    }
  }
 

  const scrollref = useRef(null);
  
   
 
useEffect(()=>{
  function playvideo(){
    let index=Math.abs(prevsugg);
    if(refs.current[index]&&prevsugg!==currsugg)
    {
      refs.current[index].style.opacity=0;
      refs.current[index].currentTime = 0;
      refs.current[index].pause();
   }
   let index1=Math.abs(currsugg);
   playvideo.timeout=setTimeout(()=>{
    if(refs.current[index1]){
    refs.current[index1].style.opacity=1;
    refs.current[index1].currentTime = 0;
    refs.current[index1].play();
    }
   },2000)
}

  playvideo();
  return () => {
    clearTimeout(playvideo.timeout);
  };

},[currsugg,prevsugg])

 

 
  function scrollsuggestionright() {
    if (scrollref.current&&currsugg>-(sugg.length-1)) {
      setprevsugg(currsugg);
      const nextIndex = currsugg - 1;
      scrollref.current.style.transform = `translateX(${nextIndex * 100}vw)`;
      setcurrsugg(nextIndex);
      // playvideo();
    }
  }
  
  function scrollsuggestionleft() {
    if (scrollref.current && currsugg<0) { // Prevents currsugg from going below 0
      setprevsugg(currsugg);
      const prevIndex = currsugg + 1;
      scrollref.current.style.transform = `translateX(${prevIndex * 100}vw)`;
      setcurrsugg(prevIndex);
      // playvideo();
    }
  }
  

  const changemenuoption = (menuref) => {
    if (menuref && menuref.current && menubarref.current) {
      const containerRect = menubarref.current.getBoundingClientRect();
      const childRect = menuref.current.getBoundingClientRect();
      const distanceFromLeft = childRect.left - containerRect.left;
      setdist(distanceFromLeft);
      setcurrref(menuref);
    }
  };

function handleclosedescription(){
  if(descriptionref.current)
  {
    if(descriptionref.current.style.display==='flex')
    {
    descriptionref.current.style.display='none';
    parentref.current.style.display='none';
    }
   
  }
}


  useEffect(() => {
    const handleResize = () => {
      if (currref) {
        changemenuoption(currref);
      }
      // if(scrollref)
      // {

      // }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  function showFilmInfo(index,index1){
    if(descriptionref.current)
    {
      descriptionref.current.style.display='flex';
      if(parentref.current)
      parentref.current.style.display='flex';
    }

    setdescriptionimage(listindex[index][index1]["image"]);
    setdescriptionplot(listindex[index][index1]["synopsis"]);
    setdescriptionlogo(listindex[index][index1]["logo"]);
  }
  return (
    <div className="parentfilmsparent">
    <div className="descriptionbox" ref={descriptionref}>
          <img src={descriptionimage} alt="descriptionimage"></img>
          <div className="transparentcover">
          <div className="descriptionplay">
                      <p>{"Play "}</p> 
                     <img src="./youtube.svg" alt="youtubeicon"></img>
                          </div>
          <div className="logobox">
                        <img
                          className="logoimage"
                          alt="infoimage"
                          src={descriptionlogo}
                        ></img>
                      </div>
            <div className="infotext">
              <div className="plotinfo">{descriptionplot}</div>
              <div className="credits">
                <div className="directorsname">Director: Abc Xyz </div>
                <div className="castname">Cast: Abc,Def</div>
              </div>
              
            </div>
          </div>
        </div>
    <div className="transparentcoverparent" ref={parentref} onClick={handleclosedescription}></div>
    <div className="parentfilms"  >
        
      <div className="suggestionsparent" >
        <div className="scroll leftscroll" onClick={scrollsuggestionleft}>
          <div className="actualbutton" style={{opacity:currsugg<0?1:0}}></div>
        </div>
        <div className="scroll rightscroll" style={{opacity:currsugg>-(sugg.length-1)?1:0}} onClick={scrollsuggestionright}>
          <div className="actualbutton"></div>
        </div>
        <div className="suggestions" ref={scrollref}>
          {sugg.map((value, index) => {
            return (
              <>
                <div key={index}
                  className="suggestioncomponent"
                >
                  {value["achievement"] && (
                    <div className="achievementbox">
                      <img
                        className="lauralimage"
                        src={value["achievement_laural"]}
                        alt="laural"
                      ></img>
                    </div>
                  )}
                  <div className="suggestionsimage">
                    <img
                      className="suggimage"
                      alt="suggimage"
                      src={value["image"]}
                    ></img>
                    <video
                      className="suggvideo"
                      width="100%"
                      height="100%"
                      ref={(el) => (refs.current[index] = el)}
                      onEnded={() => handleVideoEnd(index)}
                      muted={soundimage === "./pics/utils/soundoff.png"}
                    >
                      <source src={value["video"]} type="video/mp4" />
                      {/* <source src="./movie.ogg" type="video/ogg" /> */}
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="suggestionsinfo">
                    <div className="filminfo">
                      <div className="logobox">
                        <img
                          className="logoimage"
                          alt="suggimage"
                          src={value["logo"]}
                        ></img>
                      </div>
                      <div className="synopsis">
                        <p>{value["synopsis"]}</p>
                      </div>
                      <div className="otherinfo">
                        {value["trailer"] && (
                          <a href={value["trailer_link"]} target="_blank"  rel="noopener noreferrer">
                            <div className="youtubebutton trailer">
                              <p>Watch Trailer on</p>

                              <img
                                src="./youtube.svg"
                                alt="Description of the icon"
                                className="youtube"
                              />
                            </div>
                          </a>
                        )}{" "}
                        <a href={value["movie_link"]} target="_blank"  rel="noopener noreferrer">
                          <div className="youtubebutton movie">
                            <p>Watch Movie on</p>
                            <img
                              src="./youtube.svg"
                              alt="Description of the icon"
                              className="youtube"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="videotrigger">
                    <div className="soundbutton">
                      <img
                        src={soundimage}
                        onClick={changesound}
                        alt="sound"
                      ></img>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="filmsarea">
    
        <div className="filmmenusparent">
          <div className="filmmenuscontainer" ref={menubarref}>
            <div
              className="filmmenuoption"
              ref={homeref}
              onClick={() => {
                changemenuoption(homeref);
              }}
            >
              <p>HOME</p>
            </div>
            <div
              className="filmmenuoption"
              ref={moviesref}
              onClick={() => {
                changemenuoption(moviesref);
              }}
            >
              <p>MOVIES</p>
            </div>
            <div
              className="filmmenuoption"
              ref={musicref}
              onClick={() => {
                changemenuoption(musicref);
              }}
            >
              <p>MUSIC VIDEOS</p>
            </div>
            <div
              className="filmmenuoption"
              ref={awardref}
              onClick={() => {
                changemenuoption(awardref);
              }}
            >
              <p>AWARD WINNING</p>
            </div>
            <div
              className="filmmenuoption"
              ref={miscref}
              onClick={() => {
                changemenuoption(miscref);
              }}
            >
              <p>MISC</p>
            </div>
          </div>
          <div
            className="menuselector"
            style={{ transform: `translateX(${dist}px)` }}
            ref={selectorref}
          ></div>
        </div>
        <div className="searcharea">
          <div className="searchbar">
            <img
              className="searchicon"
              alt="searchicon"
              src="./pics/utils/searchicon.png"
            ></img>
            <input type="text" className="searchtext"></input>
            <img
              className="sort"
              alt="sorticon"
              src="./pics/utils/sort.png"
            ></img>
          </div>
        </div>
        
        <div className="homecontent">
          
            {
              menuarr.map((value,index)=>{
                    return (<>
                       <div className="block" key={index}>
            <div className="heading">
              <p>{value}</p>
            </div>
            <div className="listbox">
            <div className="offset"></div>
            {
              
              listindex[index].map((value1,index1)=>{
                     return(
                      <div className="listelement" onClick={(e)=>showFilmInfo(index,index1)} key={index1} >
                        <img className="listelimage" src={value1["image"]} alt="listimage"></img>
                        <div className="infobar">
                       <img className="infobutton" alt="info" src="./pics/utils/info.png"></img>
                       </div>
                       <div className="listlogo">
                        <img src={value1["logo"]} alt="listmovielogo"></img>
                       </div>
                      </div>
                     )
              })
            }
            <div className="offset"></div>
          </div>
          </div>
                    </>)
              })
            }
          
        </div>
      </div>
    </div>
    
    </div>
  );
}
