import React, { useEffect } from "react";
import { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
// import "./intro.css";
export default function Home() {
  //global variables
  const navigate= useNavigate();
  const options = ["HOME", "FILMS", "AWARDS", "ABOUT US", "CONTACT US"];
  const reelref=useRef(null);
  const mainref=useRef(null);
  const fmactitleref=useRef(null);
  const disappearingtextref1=useRef(null);
  const highlighttextref1=useRef(null);
  const disappearingtextref2=useRef(null);
  const highlighttextref2=useRef(null);
  const disappearingtextref3=useRef(null);
  const highlighttextref3=useRef(null);
  const highlighttextref4=useRef(null);
  const fmaclogoref=useRef(null);
  const menubarref=useRef(null);
  const newsref=useRef(null);
  const dateref=useRef(null);
  const parentref=useRef(null);

  //states
  const [optionsarray, setoptionsarray] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  const loading=false;
  useEffect(() => {
    document.title = "FMaC BITS Goa";
  }, []);
//   useEffect(() => {
//     const handleBeforeUnload = (event) => {
//       sessionStorage.removeItem('loaded');
    
//     };
//     window.addEventListener('beforeunload', handleBeforeUnload);
//     return () => {
//       window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
//   }, []);
//  useEffect(()=>{
//   function adjust(){
//     if(sessionStorage.getItem("loaded")==="1")
//     {
//         if(window.innerWidth>=501)
//         {
//         fmactitleref.current.style.animation='none';
//         fmactitleref.current.style.top='-30%'
//         fmactitleref.current.style.left='50%'
//         fmactitleref.current.style.opacity=1;
//         fmactitleref.current.style.fontSize='75px';
  
//         disappearingtextref1.current.style.animation='none';
//         disappearingtextref1.current.style.fontSize=0;
//         disappearingtextref2.current.style.animation='none';
//         disappearingtextref2.current.style.fontSize=0;
//         disappearingtextref3.current.style.animation='none';
//         disappearingtextref3.current.style.fontSize=0;
      
  
//         highlighttextref1.current.style.animation='none';
//         highlighttextref1.current.style.color='red';
//         highlighttextref2.current.style.animation='none';
//         highlighttextref2.current.style.color='red';
//         highlighttextref3.current.style.animation='none';
//         highlighttextref3.current.style.color='red';
//         highlighttextref4.current.style.animation='none';
//         highlighttextref4.current.style.color='red';
  
//         fmaclogoref.current.style.animation='none';
//         fmaclogoref.current.style.opacity=1;
  
//         menubarref.current.style.animation='none';
//         menubarref.current.style.opacity=1;
  
//         newsref.current.style.animation='none';
//         newsref.current.style.transform='scale(1)';
  
//         videoRef.current.style.display='none';
  
//         dateref.current.style.animation='none';
//         dateref.current.style.opacity=1;
//         }
//         else{
//         fmactitleref.current.style.animation='none';
//         fmactitleref.current.style.top='1%'
//         fmactitleref.current.style.left='50%'
//         fmactitleref.current.style.opacity=1;
//         fmactitleref.current.style.fontSize='45px';
  
//         disappearingtextref1.current.style.animation='none';
//         disappearingtextref1.current.style.fontSize=0;
//         disappearingtextref2.current.style.animation='none';
//         disappearingtextref2.current.style.fontSize=0;
//         disappearingtextref3.current.style.animation='none';
//         disappearingtextref3.current.style.fontSize=0;
      
  
//         highlighttextref1.current.style.animation='none';
//         highlighttextref1.current.style.color='red';
//         highlighttextref2.current.style.animation='none';
//         highlighttextref2.current.style.color='red';
//         highlighttextref3.current.style.animation='none';
//         highlighttextref3.current.style.color='red';
//         highlighttextref4.current.style.animation='none';
//         highlighttextref4.current.style.color='red';
  
//         fmaclogoref.current.style.animation='none';
//         fmaclogoref.current.style.opacity=1;
  
//         menubarref.current.style.animation='none';
//         menubarref.current.style.opacity=1;
  
//         newsref.current.style.animation='none';
//         newsref.current.style.transform='scale(1)';
  
//         videoRef.current.style.display='none';
  
//         dateref.current.style.animation='none';
//         dateref.current.style.opacity=1;
//         }
//       }
//     else{
//       sessionStorage.setItem("loaded","1")
       
//     }

//   }

//   adjust();
 
//  });


//  useEffect(() => {
  
//   function adjust(){
//     if(sessionStorage.getItem("loaded")==="1")
//     {
//         if(window.innerWidth>=501)
//         {
//         fmactitleref.current.style.animation='none';
//         fmactitleref.current.style.top='-30%'
//         fmactitleref.current.style.left='50%'
//         fmactitleref.current.style.opacity=1;
//         fmactitleref.current.style.fontSize='75px';
  
//         disappearingtextref1.current.style.animation='none';
//         disappearingtextref1.current.style.fontSize=0;
//         disappearingtextref2.current.style.animation='none';
//         disappearingtextref2.current.style.fontSize=0;
//         disappearingtextref3.current.style.animation='none';
//         disappearingtextref3.current.style.fontSize=0;
      
  
//         highlighttextref1.current.style.animation='none';
//         highlighttextref1.current.style.color='red';
//         highlighttextref2.current.style.animation='none';
//         highlighttextref2.current.style.color='red';
//         highlighttextref3.current.style.animation='none';
//         highlighttextref3.current.style.color='red';
//         highlighttextref4.current.style.animation='none';
//         highlighttextref4.current.style.color='red';
  
//         fmaclogoref.current.style.animation='none';
//         fmaclogoref.current.style.opacity=1;
  
//         menubarref.current.style.animation='none';
//         menubarref.current.style.opacity=1;
  
//         newsref.current.style.animation='none';
//         newsref.current.style.transform='scale(1)';
  
//         videoRef.current.style.display='none';
  
//         dateref.current.style.animation='none';
//         dateref.current.style.opacity=1;
//         }
//         else{
//         fmactitleref.current.style.animation='none';
//         fmactitleref.current.style.top='-1%'
//         fmactitleref.current.style.left='50%'
//         fmactitleref.current.style.opacity=1;
//         fmactitleref.current.style.fontSize='45px';
  
//         disappearingtextref1.current.style.animation='none';
//         disappearingtextref1.current.style.fontSize=0;
//         disappearingtextref2.current.style.animation='none';
//         disappearingtextref2.current.style.fontSize=0;
//         disappearingtextref3.current.style.animation='none';
//         disappearingtextref3.current.style.fontSize=0;
      
  
//         highlighttextref1.current.style.animation='none';
//         highlighttextref1.current.style.color='red';
//         highlighttextref2.current.style.animation='none';
//         highlighttextref2.current.style.color='red';
//         highlighttextref3.current.style.animation='none';
//         highlighttextref3.current.style.color='red';
//         highlighttextref4.current.style.animation='none';
//         highlighttextref4.current.style.color='red';
  
//         fmaclogoref.current.style.animation='none';
//         fmaclogoref.current.style.opacity=1;
  
//         menubarref.current.style.animation='none';
//         menubarref.current.style.opacity=1;
  
//         newsref.current.style.animation='none';
//         newsref.current.style.transform='scale(1)';
  
//         videoRef.current.style.display='none';
  
//         dateref.current.style.animation='none';
//         dateref.current.style.opacity=1;
//         }
//       }
//     else{
//     sessionStorage.setItem("loaded","1")
//     }

//   }




  function adjust(){
   let innerWidth=window.innerWidth;
   if(innerWidth>=1201)
   {
   fmactitleref.current.style.animation='none';
   fmactitleref.current.style.top='-30%'
   fmactitleref.current.style.left='50%'
   fmactitleref.current.style.opacity=1;
   fmactitleref.current.style.fontSize='75px';

   disappearingtextref1.current.style.animation='none';
   disappearingtextref1.current.style.fontSize=0;
   disappearingtextref2.current.style.animation='none';
   disappearingtextref2.current.style.fontSize=0;
   disappearingtextref3.current.style.animation='none';
   disappearingtextref3.current.style.fontSize=0;
 

   highlighttextref1.current.style.animation='none';
   highlighttextref1.current.style.color='red';
   highlighttextref2.current.style.animation='none';
   highlighttextref2.current.style.color='red';
   highlighttextref3.current.style.animation='none';
   highlighttextref3.current.style.color='red';
   highlighttextref4.current.style.animation='none';
   highlighttextref4.current.style.color='red';

   fmaclogoref.current.style.animation='none';
   fmaclogoref.current.style.opacity=1;

   menubarref.current.style.animation='none';
   menubarref.current.style.opacity=1;

   newsref.current.style.animation='none';
   newsref.current.style.transform='scale(1)';

   videoRef.current.style.display='none';

   dateref.current.style.animation='none';
   dateref.current.style.opacity=1;
   }
        else if(innerWidth>=1001&&innerWidth<=1201)
        {
        fmactitleref.current.style.animation='none';
        fmactitleref.current.style.top='-25%'
        fmactitleref.current.style.left='50%'
        fmactitleref.current.style.opacity=1;
        fmactitleref.current.style.fontSize='75px';
  
        disappearingtextref1.current.style.animation='none';
        disappearingtextref1.current.style.fontSize=0;
        disappearingtextref2.current.style.animation='none';
        disappearingtextref2.current.style.fontSize=0;
        disappearingtextref3.current.style.animation='none';
        disappearingtextref3.current.style.fontSize=0;
      
  
        highlighttextref1.current.style.animation='none';
        highlighttextref1.current.style.color='red';
        highlighttextref2.current.style.animation='none';
        highlighttextref2.current.style.color='red';
        highlighttextref3.current.style.animation='none';
        highlighttextref3.current.style.color='red';
        highlighttextref4.current.style.animation='none';
        highlighttextref4.current.style.color='red';
  
        fmaclogoref.current.style.animation='none';
        fmaclogoref.current.style.opacity=1;
  
        menubarref.current.style.animation='none';
        menubarref.current.style.opacity=1;
  
        newsref.current.style.animation='none';
        newsref.current.style.transform='scale(1)';
  
        videoRef.current.style.display='none';
  
        dateref.current.style.animation='none';
        dateref.current.style.opacity=1;
        }
        else if (innerWidth>=970&&innerWidth<=1001){
        fmactitleref.current.style.animation='none';
        fmactitleref.current.style.top='-15%'
        fmactitleref.current.style.left='50%'
        fmactitleref.current.style.opacity=1;
        fmactitleref.current.style.fontSize='60px';
  
        disappearingtextref1.current.style.animation='none';
        disappearingtextref1.current.style.fontSize=0;
        disappearingtextref2.current.style.animation='none';
        disappearingtextref2.current.style.fontSize=0;
        disappearingtextref3.current.style.animation='none';
        disappearingtextref3.current.style.fontSize=0;
      
  
        highlighttextref1.current.style.animation='none';
        highlighttextref1.current.style.color='red';
        highlighttextref2.current.style.animation='none';
        highlighttextref2.current.style.color='red';
        highlighttextref3.current.style.animation='none';
        highlighttextref3.current.style.color='red';
        highlighttextref4.current.style.animation='none';
        highlighttextref4.current.style.color='red';
  
        fmaclogoref.current.style.animation='none';
        fmaclogoref.current.style.opacity=1;
  
        menubarref.current.style.animation='none';
        menubarref.current.style.opacity=1;
  
        newsref.current.style.animation='none';
        newsref.current.style.transform='scale(1)';
  
        videoRef.current.style.display='none';
  
        dateref.current.style.animation='none';
        dateref.current.style.opacity=1;
        }



        else if (innerWidth>=800&&innerWidth<=970){
          fmactitleref.current.style.animation='none';
          fmactitleref.current.style.top='-15%'
          fmactitleref.current.style.left='50%'
          fmactitleref.current.style.opacity=1;
          fmactitleref.current.style.fontSize='50px';
    
          disappearingtextref1.current.style.animation='none';
          disappearingtextref1.current.style.fontSize=0;
          disappearingtextref2.current.style.animation='none';
          disappearingtextref2.current.style.fontSize=0;
          disappearingtextref3.current.style.animation='none';
          disappearingtextref3.current.style.fontSize=0;
        
    
          highlighttextref1.current.style.animation='none';
          highlighttextref1.current.style.color='red';
          highlighttextref2.current.style.animation='none';
          highlighttextref2.current.style.color='red';
          highlighttextref3.current.style.animation='none';
          highlighttextref3.current.style.color='red';
          highlighttextref4.current.style.animation='none';
          highlighttextref4.current.style.color='red';
    
          fmaclogoref.current.style.display='none';
          // fmaclogoref.current.style.opacity=1;
    
          menubarref.current.style.animation='none';
          menubarref.current.style.opacity=1;
    
          newsref.current.style.animation='none';
          newsref.current.style.transform='scale(1)';
    
          videoRef.current.style.display='none';
    
          dateref.current.style.animation='none';
          dateref.current.style.opacity=1;
          }



          else if (innerWidth>=651&&innerWidth<=800){
            fmactitleref.current.style.animation='none';
            fmactitleref.current.style.top='-15%'
            fmactitleref.current.style.left='50%'
            fmactitleref.current.style.opacity=1;
            fmactitleref.current.style.fontSize='50px';
      
            disappearingtextref1.current.style.animation='none';
            disappearingtextref1.current.style.fontSize=0;
            disappearingtextref2.current.style.animation='none';
            disappearingtextref2.current.style.fontSize=0;
            disappearingtextref3.current.style.animation='none';
            disappearingtextref3.current.style.fontSize=0;
          
      
            highlighttextref1.current.style.animation='none';
            highlighttextref1.current.style.color='red';
            highlighttextref2.current.style.animation='none';
            highlighttextref2.current.style.color='red';
            highlighttextref3.current.style.animation='none';
            highlighttextref3.current.style.color='red';
            highlighttextref4.current.style.animation='none';
            highlighttextref4.current.style.color='red';
      
            fmaclogoref.current.style.display='none';
            // fmaclogoref.current.style.opacity=1;
      
            menubarref.current.style.animation='none';
            menubarref.current.style.opacity=1;
      
            newsref.current.style.animation='none';
            newsref.current.style.transform='scale(1)';
      
            videoRef.current.style.display='none';
      
            dateref.current.style.animation='none';
            dateref.current.style.opacity=1;
            }

              else if (innerWidth>=551&&innerWidth<651){
                fmactitleref.current.style.fontSize='35px';
                fmactitleref.current.style.animation='none';
                fmactitleref.current.style.top='30%'
                fmactitleref.current.style.left='50%'
                fmactitleref.current.style.opacity=1;
                fmactitleref.current.style.transform= 'translate(-52%,0%) scale(1.8)';
          
                disappearingtextref1.current.style.animation='none';
                disappearingtextref1.current.style.fontSize=0.1;
                disappearingtextref1.current.style.transform='translate(-50%,0%) scale(0)'
                disappearingtextref1.current.style.opacity=0;
                disappearingtextref2.current.style.animation='none';
                disappearingtextref2.current.style.fontSize=0.1;
                disappearingtextref2.current.style.opacity=0;
                disappearingtextref2.current.style.transform='translate(-50%,0%) scale(0)'
                disappearingtextref3.current.style.animation='none';
                disappearingtextref3.current.style.fontSize=0.1;
                disappearingtextref3.current.style.opacity=0;
                disappearingtextref3.current.style.transform='translate(-50%,0%) scale(0)'

              
          
                highlighttextref1.current.style.animation='none';
                highlighttextref1.current.style.color='red';
                highlighttextref2.current.style.animation='none';
                highlighttextref2.current.style.color='red';
                highlighttextref3.current.style.animation='none';
                highlighttextref3.current.style.color='red';
                highlighttextref4.current.style.animation='none';
                highlighttextref4.current.style.color='red';
          
                fmaclogoref.current.style.animation='none';
                fmaclogoref.current.style.left='50%';
                fmaclogoref.current.style.top='-5%';
                fmaclogoref.current.style.transform='translateX(-50%)';
                fmaclogoref.current.style.opacity=1;
                // fmaclogoref.current.style.opacity=1;
          
                menubarref.current.style.animation='none';
                menubarref.current.style.opacity=1;
          
                newsref.current.style.animation='none';
                newsref.current.style.transform='scale(1)';
          
                videoRef.current.style.display='none';
          
                dateref.current.style.animation='none';
                dateref.current.style.opacity=1;
                }
              else if (innerWidth<=550){
              fmactitleref.current.style.animation='none';
              fmactitleref.current.style.top='40%'
              fmactitleref.current.style.left='50%'
              fmactitleref.current.style.opacity=1;
              fmactitleref.current.style.fontSize='23px';
              fmactitleref.current.style.transform= 'translate(-52%,0%) scale(1.8)';
          
              disappearingtextref1.current.style.animation='none';
              disappearingtextref1.current.style.fontSize=0.1;
              disappearingtextref1.current.style.opacity=0;
              disappearingtextref2.current.style.animation='none';
              disappearingtextref2.current.style.fontSize=0.1;
              disappearingtextref2.current.style.opacity=0;
              disappearingtextref3.current.style.animation='none';
              disappearingtextref3.current.style.fontSize=0.1;
              disappearingtextref3.current.style.opacity=0;
          
                highlighttextref1.current.style.animation='none';
                highlighttextref1.current.style.color='red';
                highlighttextref2.current.style.animation='none';
                highlighttextref2.current.style.color='red';
                highlighttextref3.current.style.animation='none';
                highlighttextref3.current.style.color='red';
                highlighttextref4.current.style.animation='none';
                highlighttextref4.current.style.color='red';
          
                fmaclogoref.current.style.animation='none';
                fmaclogoref.current.style.left='50%';
                fmaclogoref.current.style.top='-5%';
                fmaclogoref.current.style.transform='translateX(-50%)';
                fmaclogoref.current.style.opacity=1;
          
                menubarref.current.style.animation='none';
                menubarref.current.style.opacity=1;
          
                newsref.current.style.animation='none';
                newsref.current.style.transform='scale(1)';
          
                videoRef.current.style.display='none';
          
                dateref.current.style.animation='none';
                dateref.current.style.opacity=1;
                }
      }
   

  



useEffect(() => {
  let t;

  if (window.innerWidth >=650) {
    t = 10000; // 10 seconds for wider screens
  } else {
    t = 6000; // 6 seconds for narrower screens
  }

  const a = setTimeout(() => {
    if (reelref.current) {
      reelref.current.style.display = 'none';
    }
    if (mainref.current) {
      mainref.current.style.overflowY = "scroll";
    }
  }, t);

  return () => clearTimeout(a); // Cleanup to clear the timeout
}, []); // Empty dependency array means this effect runs only once on mount

  //functions


  useEffect(()=>{
    window.addEventListener("resize", adjust);
  
  
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", adjust);
    };
  })
   

  function handleshiftcontent(index) {
    const newArray = optionsarray.map((_, i) => i === index);
    setoptionsarray(newArray);
    navigate('./films');
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
        <div className="filmreels" ref={reelref} >
        <video ref={videoRef} width="110%" height="110%" autoPlay muted  style={{objectFit:'cover'}}>
          <source src="./introdf1.mp4" type="video/mp4" />
          <source src="./movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
        <div className="maincontent">
      <div className="titlebar">
        <img
          src="./pics/fmaclogos/bdome.webp"
          alt="titlelogo"
          className="fmaclogo"
          ref={fmaclogoref}
        />

        <div className="fmactitle" ref={fmactitleref}>
          <p>
            <strong>
            <span className="hightlighttext" ref={highlighttextref1}>
              F<span className="dot"></span>
            </span>
            <span className="disappearingtext" ref={disappearingtextref1}>ilm </span>
            <span className="hightlighttext" ref={highlighttextref2}>
              Ma<span className="dot"></span>
            </span>
            <span className="disappearingtext" ref={disappearingtextref2}>king </span>
            <span className="hightlighttext"  ref={highlighttextref3}>C</span>
            <span className="disappearingtext" ref={disappearingtextref3}>lub</span>
            <span className="hightlighttext"  ref={highlighttextref4}>&nbsp;BITS GOA</span>
            </strong>
          </p>
          {/* <p>Established 2016...</p> */}
        </div>
        <div className="date" ><p ref={dateref}>Established 2016...</p></div>
      </div>
      <div className="contentbox">
        <div className="menubar" ref={menubarref}>
          {options.map((value, index) => {
            return (
              <div key={index}
                className="menuoption"
                onClick={() => handleshiftcontent(index)}
              >
                <p
                  style={{
                    // fontSize: !optionsarray[index] ? "13px" : "15px",
                    color: optionsarray[index] ? "red" : "white",
                  }}
                >
                  {value}
                </p>
              </div>
            );
          })}
        </div>
        <div className="news" ref={newsref}>
          {!loading ? (
            <>
              <div className="news1">
                <div className="newsbox">
                  <img
                    src="./pics/newsphotos/rakshasa.webp"
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
                    src="./pics/newsphotos/sheesha.webp"
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
                    src="./pics/newsphotos/zeher.webp"
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
                    src="./pics/newsphotos/treasurehunt.webp"
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
                    src="./pics/newsphotos/aaja.webp"
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
