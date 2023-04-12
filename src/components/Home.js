// import React from 'react'
import './Home.css'
import React, { useRef, useState } from "react";
import ReactPlayer from 'react-player'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { Autoplay, EffectCards } from "swiper";

import logo from './assets/logo.png';
import bannerbg from './assets/banner-bg.png';
import bannerillu from './assets/banner-illu.png';
import bannerleftobj from './assets/banner-left-obj.png';
import bannerrightobj from './assets/banner-right-obj.png';
import camel from './assets/camel.mp4';
import main5bg from './assets/main5-bg.png';
import slider1 from './assets/slider-1.png';
import slider2 from './assets/slider-2.png';
import slider3 from './assets/slider-3.png';
import runninghorse from './assets/running-horse.gif';
import roadmap from './assets/roadmap.png';
import team1 from './assets/team1.jpg';
import team2 from './assets/team2.jpg';
import team3 from './assets/team3.jpg';
import coin1 from './assets/coin-1.png';
import coin2 from './assets/coin-2.png';
import coin3 from './assets/coin-3.png';
import coin4 from './assets/coin-4.png';
import bannerbottom1 from './assets/banner-bottom-1.png';
import bannerbottom2 from './assets/banner-bottom-2.png';
import bannerbottom3 from './assets/banner-bottom-3.png';
import levelupleft from './assets/level-up-left.png';
import freespinsicon from './assets/freespins-icon.png';
import bonusesicon from './assets/bonuses-icon.png';
import tournamentsicon from './assets/tournaments-icon.png';
import todayswinnerbg from './assets/todays-winner-bg.png';
import tropy from './assets/tropy.png';
import ribbontxt from './assets/ribbontxt.png';
import win1 from './assets/win-1.png';
import win2 from './assets/win-2.png';
import win3 from './assets/win-3.png';
import user1 from './assets/user-1.png';
import user2 from './assets/user-2.png';
import user3 from './assets/user-3.png';
import doubleright from './assets/double-right.png';
import countericon1 from './assets/counter-icon-1.png';
import countericon2 from './assets/counter-icon-2.png';
import countericon3 from './assets/counter-icon-3.png';
import countericon4 from './assets/counter-icon-4.png';
import gameicon1 from './assets/game-icon-1.png';
import gameicon2 from './assets/game-icon-2.png';
import gameicon3 from './assets/game-icon-3.png';
import gameicon4 from './assets/game-icon-4.png';
import gameicon5 from './assets/game-icon-5.png';
import gameicon6 from './assets/game-icon-6.png';


import latestactivites from './assets/latest-activites.png';

import { SiTwitter } from 'react-icons/si';
import { FaDiscord } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { GiOverInfinity } from 'react-icons/gi';
import { SiCodesandbox } from 'react-icons/si';

function Home(){

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 50){
            setColorchange(true);
        }
        else{
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return(
        <>
        <div class="home-main">
        <div class="home-nav" className={ colorChange ? 'home-nav-change' : 'home-nav'}>
            <div class="home-nav-container">
                <div class="home-nav-div1">
                    <div class="home-nav-logo">
                        <img src={logo}></img>
                    </div>
                    <span>Meta<br/>Horse</span>
                </div>
                <div class="home-nav-div2">
                    <a href="#about" style={{textDecoration:'none', color:'white'}}><span>About</span></a>
                    <a href="#lab" style={{textDecoration:'none', color:'white'}}><span>Laboratory</span></a>
                    <a href="#tok" style={{textDecoration:'none', color:'white'}}><span>Tokenomics</span></a>
                    <a href="#road" style={{textDecoration:'none', color:'white'}}><span>Roadmap</span></a>
                    <a href="#team" style={{textDecoration:'none', color:'white'}}><span>Team</span></a>
                </div>
                <div class='home-nav-div3'>
                    <span class="home-nav-div3-txt">Join at</span>
                    <span class="home-nav-div3-icon"><SiTwitter style={{color:'white'}}/></span>
                    <span class="home-nav-div3-icon"><FaDiscord style={{color:'white'}}/></span>
                    <span class="home-nav-div3-icon"><FaInstagram style={{color:'white'}}/></span>
                
                </div>
            </div>
            </div>

            <div class="home-main2">
                <div class="home-main2-bg-img">
                    <img src={bannerbg}></img>
                </div>
                <div class="home-main2-content">
                    <div class="home-main2-div1">
                        <span class="home-main2-txt1">Experience first-ever Metaverse Horse Racing</span>
                        <span class="home-main2-txt2">Meta Horse Racing Club brings a well-know Middle East sport - horse racing - to Metaverse, connecting cultural heritage of the Middle East and blockchain technology.</span>
                        <div class="home-main2-div1-btn"><button>Register</button>
                        <button>Whitepaper</button></div>
                    </div>
                    <div class="home-main2-div2">
                        <div class="home-main2-div2-img1">
                            <img src={bannerleftobj}></img>
                        </div>
                        <div class='home-main2-div2-img2'>
                            <img src={bannerillu}></img>
                        </div>
                        <div class="home-main2-div2-img3">
                            <img src={bannerrightobj}></img>
                        </div>
                    </div>
                    
                    <div class="home-main2-coin1">
                        <img src={coin1}></img>
                    </div>
                    <div class="home-main2-coin2">
                        <img src={coin2}></img>
                    </div>
                    <div class="home-main2-coin3">
                        <img src={coin3}></img>
                    </div>
                    <div class="home-main2-coin4">
                        <img src={coin4}></img>
                    </div>
                    
                    <div class="home-main2-div3">
                        <div class="home-main2-div3a">
                            <div class="home-main2-div3a-img">
                                <img src={bannerbottom1}></img>
                            </div>
                            <div class="home-main2-div3a-txt">
                                <span class="home-main2-div3a-txt1">PLAY</span>
                                <span class="home-main2-div3a-txt2">A huge collection of horses and horse races.</span>
                            </div>
                        </div>
                        <div class="home-main2-div3a">
                            <div class="home-main2-div3a-img">
                                <img src={bannerbottom2}></img>
                            </div>
                            <div class="home-main2-div3a-txt">
                                <span class="home-main2-div3a-txt1">WIN</span>
                                <span class="home-main2-div3a-txt2">Points and cash from playing and competing.</span>
                            </div>
                        </div>
                        <div class="home-main2-div3a">
                            <div class="home-main2-div3a-img">
                                <img src={bannerbottom3}></img>
                            </div>
                            <div class="home-main2-div3a-txt">
                                <span class="home-main2-div3a-txt1">EARN</span>
                                <span class="home-main2-div3a-txt2">Your Wombucks or prize money from challenges.</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="prehome-main3">
                <div class="prehome-main3-div1">
                    <div class="prehome-main3-div2">
                    <ReactPlayer 
                        className='react-player fixed-bottom'
                        url= {camel}
                        width='100%'
                        height='100%'
                        controls = {true}
                        playing={true} 
                        loop={true} 
                        muted={true}
                    />
                    </div>
                    </div>
                </div>
            <div class="home-main3">
                <div class="home-main3-container">
                    <div class="home-main3-div1">
                        <div class="home-main3-div1-img">
                            <img src={levelupleft}></img>
                        </div>
                    </div>
                    
                    <div class="home-main3-div2">
                        <div class="home-main3-div2-a">
                            <span class="home-main3-div2-a-txt1">LEVEL UP! GET REWARDS</span>
                            <span class="home-main3-div2-a-txt2">Each time you reach a new level you'll get a reward</span>
                        </div>
                        <div class="home-main3-div2-b">
                        <div class="home-main3-div2-b-div1">
                            <div class="home-main3-div2-b-div1-img">
                                <img src={freespinsicon}></img>
                            </div>
                            <div class="home-main3-div2-b-div1-txt">
                                <span class="home-main3-div2-b-div1-txt1">FREESPINS</span>
                            </div>
                        </div>
                        <div class="home-main3-div2-b-div1">
                            <div class="home-main3-div2-b-div1-img">
                                <img src={bonusesicon}></img>
                            </div>
                            <div class="home-main3-div2-b-div1-txt">
                                <span class="home-main3-div2-b-div1-txt1">BONUSES</span>
                            </div>
                        </div>
                        <div class="home-main3-div2-b-div1">
                            <div class="home-main3-div2-b-div1-img">
                                <img src={tournamentsicon}></img>
                            </div>
                            <div class="home-main3-div2-b-div1-txt">
                                <span class="home-main3-div2-b-div1-txt1">TOURNAMENTS</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div id="lab" class="prehome-main5">
                    <div class="prehome-main5-heading">
                        <span class="home-main3-div2-a-txt1">YOUR HORSE LABORATORY</span>
                        <span class="home-main3-div2-a-txt2">Buy, rent, upgrade Horses. Restore energy and more</span>
                    </div>
                    
                    <div class='prehome-main5-div1'>
                    <div class="prehome-main3-div1">
                        <div class="prehome-main5-div1-img">
                            <img src={main5bg}></img>
                        </div>
                        <div class="prehome-main5-div2">
                        <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]} autoplay={true}
        className="mySwiper"
      >
        <SwiperSlide>
                                    <div class="prehome-main5-div2-slider">
                                    <div class="prehome-main5-div2-slider-div1">
                                   

                                        <span class="prehome-main5-div2-slider-div1-txt1"><GiOverInfinity style={{paddingRight:'0.5rem'}}/>X Matic</span>
                                        <span class="prehome-main5-div2-slider-div1-txt2">#/10,000<BsFillBookmarkFill style={{paddingLeft:'0.5rem',fontSize:'12px'}}/><br/>Horse</span>
                                    </div>
                                    <div class="prehome-main5-div2-slider-div2">
                                        <img src={slider1}></img>
                                    </div>
                                    </div>
                                </SwiperSlide >
                                <SwiperSlide>
                                    <div class="prehome-main5-div2-slider">
                                    <div class="prehome-main5-div2-slider-div1">
                                  

                                        <span class="prehome-main5-div2-slider-div1-txt1"><GiOverInfinity style={{paddingRight:'0.5rem'}}/>X Matic</span>
                                        <span class="prehome-main5-div2-slider-div1-txt2">#/10,000<BsFillBookmarkFill style={{paddingLeft:'0.5rem',fontSize:'12px'}}/><br/>Boosters</span>
                                    </div>
                                    <div class="prehome-main5-div2-slider-div2">
                                        <img src={slider2}></img>
                                    </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="prehome-main5-div2-slider">
                                    <div class="prehome-main5-div2-slider-div1">
                                   

                                        <span class="prehome-main5-div2-slider-div1-txt1"><GiOverInfinity style={{paddingRight:'0.5rem'}}/>X Matic</span>
                                        <span class="prehome-main5-div2-slider-div1-txt2">#/4,500<BsFillBookmarkFill style={{paddingLeft:'0.5rem',fontSize:'12px'}}/><br/>Horse</span>
                                    </div>
                                    <div class="prehome-main5-div2-slider-div2">
                                        <img src={slider3}></img>
                                    </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="prehome-main5-div2-slider">
                                    <div class="prehome-main5-div2-slider-div1">

                                        <span class="prehome-main5-div2-slider-div1-txt1"><GiOverInfinity style={{paddingRight:'0.5rem'}}/>X Matic</span>
                                        <span class="prehome-main5-div2-slider-div1-txt2">#/10,000<BsFillBookmarkFill style={{paddingLeft:'0.5rem',fontSize:'12px'}}/><br/>Horse</span>
                                    </div>
                                    <div class="prehome-main5-div2-slider-div2">
                                        <img src={slider2}></img>
                                    </div>
                                    </div>
                                </SwiperSlide>
    
      </Swiper>
    
                    
                        
                        </div>
                    </div>
                    </div>
                </div>

            <div class="home-main4">
            <div class="home-main4-bg-img">
                    <img src={todayswinnerbg}></img>
                </div>
                <div class="home-main4-content">
                    <div class="home-main4-div">
                        <div class="home-main4-div1">
                            <div class="home-main4-div1a">
                                <span>BIGGEST WINNERS TODAY</span>
                                <button>Register</button>
                            </div>
                            <div class="home-main4-div1b">
                                <div class="home-main4-div1b-img">
                                    <img src={tropy}></img>
                                </div>
                            </div>
                        </div>
                        <div class="home-main4-div2">
                            <div class="home-main4-div2-img">
                                <img src={ribbontxt}></img>
                            </div>
                            <div class="home-main4-div2-b">
                                <div class="home-main4-div2-b-div1">
                                    <div class="home-main4-div2-b-div1-img1">
                                        <img src={win1}></img>
                                    </div>
                                    <div class="home-main4-div2-b-div1-img2">
                                        <img src={user1}></img>
                                    </div>
                                    <span class="home-main4-div2-b-div1-txt">BESSIE COOPER</span>
                                    <div class="home-main4-div2-b-div1-eth">
                                        <span class="home-main4-div2-b-div1-eth-txt1">+ 56.65994</span>
                                        <span class="home-main4-div2-b-div1-eth-txt2">ETH</span>
                                        <div class="home-main4-div2-b-div1-arrow">
                                            <img src={doubleright}></img>
                                        </div>
                                    </div>
                                </div>
                                <div class="home-main4-div2-b-div1">
                                    <div class="home-main4-div2-b-div1-img1">
                                        <img src={win2}></img>
                                    </div>
                                    <div class="home-main4-div2-b-div1-img2">
                                        <img src={user2}></img>
                                    </div>
                                    <span class="home-main4-div2-b-div1-txt">BESSIE COOPER</span>
                                    <div class="home-main4-div2-b-div1-eth">
                                        <span class="home-main4-div2-b-div1-eth-txt1">+ 56.65994</span>
                                        <span class="home-main4-div2-b-div1-eth-txt2">ETH</span>
                                        <div class="home-main4-div2-b-div1-arrow">
                                            <img src={doubleright}></img>
                                        </div>
                                    </div>
                                </div>
                                <div class="home-main4-div2-b-div1">
                                    <div class="home-main4-div2-b-div1-img1">
                                        <img src={win3}></img>
                                    </div>
                                    <div class="home-main4-div2-b-div1-img2">
                                        <img src={user3}></img>
                                    </div>
                                    <span class="home-main4-div2-b-div1-txt">BESSIE COOPER</span>
                                    <div class="home-main4-div2-b-div1-eth">
                                        <span class="home-main4-div2-b-div1-eth-txt1">+ 56.65994</span>
                                        <span class="home-main4-div2-b-div1-eth-txt2">ETH</span>
                                        <div class="home-main4-div2-b-div1-arrow">
                                            <img src={doubleright}></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="home-main5">
                <div class="home-main5-container">
                <div class="home-main5-div2-b">
                        <div class="home-main5-div2-b-div1">
                            <div class="home-main5-div2-b-div1-img">
                                <img src={countericon1}></img>
                            </div>
                            <div class="home-main5-div2-b-div1-txt">
                                <span class="home-main5-div2-b-div1-txt1">$ 1</span>
                                <span class="home-main5-div2-b-div1-txt1">Jackpot</span>
                            </div>
                        </div>
                        <div class="home-main5-div2-b-div1">
                            <div class="home-main5-div2-b-div1-img">
                                <img src={countericon2}></img>
                            </div>
                            <div class="home-main5-div2-b-div1-txt">
                                <span class="home-main5-div2-b-div1-txt1">$ 7516</span>
                                <span class="home-main5-div2-b-div1-txt1">TOTAL PAID</span>
                            </div>
                        </div>
                        <div class="home-main5-div2-b-div1">
                            <div class="home-main5-div2-b-div1-img">
                                <img src={countericon3}></img>
                            </div>
                            <div class="home-main5-div2-b-div1-txt">
                                <span class="home-main5-div2-b-div1-txt1">0%</span>
                                <span class="home-main5-div2-b-div1-txt1">SECURE</span>
                            </div>
                        </div>
                        <div class="home-main5-div2-b-div1">
                            <div class="home-main5-div2-b-div1-img">
                                <img src={countericon4}></img>
                            </div>
                            <div class="home-main5-div2-b-div1-txt">
                                <span class="home-main5-div2-b-div1-txt1">0/0</span>
                                <span class="home-main5-div2-b-div1-txt1">SUPPORT</span>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
            <div id="road" class="prehome-main7">
                    <div class="prehome-main5-heading home-main5-heading-resp">
                        <span class="home-main3-div2-a-txt1">Roadmap</span>
                        <span class="home-main3-div2-a-txt2">Join us on an exciting voyage to the East-Verse 2023-2024</span>
                    </div>
                    <div class="prehome-main7-div-content">
                        <div class="prehome-main7-img">
                            <img src={roadmap}></img>
                        </div>
                        <div class="prehome-main7-img-logo"><img src={runninghorse}></img></div>
                        <div class="prehome-main7-div2">
                                <div class="prehome-main7-div1a">
                                    <p>Q1 2023</p>
                                    <li><span>Website</span></li>
                                    <li><span>Vip Round</span></li>
                                    <li><span>Start of development</span></li>
                                </div>
                                <div class="prehome-main7-div1a">
                                    <p>Q2 2023</p>
                                    <li><span>MvP Release</span></li>
                                </div>
                                <div class="prehome-main7-div1a">
                                    <p>Q3-Q4 2023</p>
                                    <li><span>Private Round</span></li>
                                    <li><span>Public Beta Release</span></li>
                                    <li><span>Mainnet Launch</span></li>

                                </div>
                    </div>
                    </div>
                    {/* <div class="next"> */}
                    
                    {/* </div> */}
                </div>
            <div class="home-main6">
            <div class="home-main6-bg-img">
                    <img src={latestactivites}></img>
                </div>
                <div class="home-main6-content">
                    <div class="home-main6-container">
                        <div class="home-main6-div1">
                            <span class="home-main3-div2-a-txt1">LATEST ACTIVITES</span>
                            <span class="home-main3-div2-a-txt2">Each time you reach a new level you'll get a reward</span>
                        </div>
                        <div class="home-main6-div2">
                        <div class="home-main6-div2-table">
            <table>
                <tr class="table-row1">
                    <th>GAME</th>
                    <th>PLAYER</th>
                    <th>BET ID</th>
                    <th>PAYOUT</th>
                    <th>PROFIT</th>
                </tr>
                <tr class="table-row2">
                    <td><img src={gameicon1}></img>Fishing Disco</td>
                    <td>Bessie Cooper</td>
                    <td>30320267096</td>
                    <td>0.70X</td>
                    <td>+ 0.00312150</td>
                </tr>
                <tr class="table-row2">
                    <td><img src={gameicon2}></img>Fishing Disco</td>
                    <td>Bessie Cooper</td>
                    <td>30320267096</td>
                    <td>0.70X</td>
                    <td>+ 0.00312150</td>
                </tr>
                <tr class="table-row2">
                    <td><img src={gameicon3}></img>Fishing Disco</td>
                    <td>Bessie Cooper</td>
                    <td>30320267096</td>
                    <td>0.70X</td>
                    <td>+ 0.00312150</td>
                </tr>
                <tr class="table-row2">
                    <td><img src={gameicon4}></img>Fishing Disco</td>
                    <td>Bessie Cooper</td>
                    <td>30320267096</td>
                    <td>0.70X</td>
                    <td>+ 0.00312150</td>
                </tr>
                <tr class="table-row2">
                    <td><img src={gameicon5}></img>Fishing Disco</td>
                    <td>Bessie Cooper</td>
                    <td>30320267096</td>
                    <td>0.70X</td>
                    <td>+ 0.00312150</td>
                </tr>
            </table>

        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="team" class="prehome-main8">
                <div class="prehome-main5-heading home-main5-heading-resp">
                        <span class="home-main3-div2-a-txt1">Team</span>
                    </div>
                    <div class="prehome-main8-div1">
                        <div class="prehome-main8-div1a">
                            <div class="prehome-main8-div1a-img">
                                <img src={team1}></img>
                            </div>
                            <div class="prehome-main8-div1a-2">
                                <span>Mohit</span>
                                <span class="prehome-main8-div1a-2-txt2">CEO</span>
                                {/* <br/> */}
                                {/* <span><SiLinkedin style={{paddingRight:'0.5rem'}}/>🤝🚀🙌</span> */}
                            </div>
                        </div>
                        <div class="prehome-main8-div1a">
                            <div class="prehome-main8-div1a-img">
                                <img src={team2}></img>
                            </div>
                            <div class="prehome-main8-div1a-2">
                                <span>Sumit Kumar</span>
                                <span class="prehome-main8-div1a-2-txt2">CTO</span>
                                {/* <br/> */}
                                {/* <span><SiLinkedin style={{paddingRight:'0.5rem'}}/>💻👓👾</span> */}
                            </div>
                        </div>
                        <div class="prehome-main8-div1a">
                            <div class="prehome-main8-div1a-img">
                                <img src={team3}></img>
                            </div>
                            <div class="prehome-main8-div1a-2">
                            <span>Mohit</span>
                            <span class="prehome-main8-div1a-2-txt2">CEO</span>
                            {/* <br/> */}
                            {/* <span><SiLinkedin style={{paddingRight:'0.5rem'}}/>🤝🚀🙌</span> */}
                            </div>
                        </div>
                        
                    </div>
                </div>
            <div class="home-main9">
                <div class="home-main9-container">
                <div class="home-main9-div1">
                            <span class="home-main9-div2-a-txt1">STAY TUNED</span>
                            <span class="home-main9-div2-a-txt2">Provide your contact information to secure a spot as a very early  racer of the Meta Camel Racing Club </span>
                        </div>
                    <div class="home-main9-div1">
                        <div class='home-main9-div1a'>
                            <div class="home-main9-div1a-input">
                                <input type="text" placeholder='email@metahorse.com'></input>
                            </div>
                            <div class="home-main9-div1a-btn">
                                <button>Sign Up</button>
                            </div>
                        </div>
                        <span class="home-main9-div1a-txt">2023 © MetaHorse</span>
                    </div>
                    </div>
                </div>
        </div>
        </>
    )
}
export default Home