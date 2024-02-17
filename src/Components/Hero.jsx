import React from "react";
import "./Hero.css";
import Button from "./Button";
import Missions from "./Missions";
import TextCard from "./TextCard";
function Hero() {
  const mission = {
    m1:{
      href:'#',
      title: "Apollo 11",
      img: "/src/images/apollo.png",
      desc: "The first crewed mission to land on moon",
      year: "1969",
    },
    m2:{
      href:'#',
      title: "Artemis I",
      img: "/src/images/artemis.png",
      desc: "The first flight of NASA's Artemis program",
      year: "2021",
    },
    m3:{
      href:'#',
      title: "Hubble Space Telescope",
      img: "/src/images/hubble.png",
      desc: "Revolutionary space telescope transforms cosmic comprehension",
      year: "1990",
    },
    m4:{
      href:'#',
      title: "Perserverance Rover",
      img: "/src/images/rover.png",
      desc: "The first crewed mission to land on moon",
      year: "2020",
    }
  };
  const isro = {
    m1:{
      href:'#',
      title: "Mangalyaan",
      img: "/src/images/mangalyaan.png",
      desc: "Mars orbiter, India's first interplanetary mission",
      year: "2013",
    },
    m2:{
      href:'#',
      title: "EMISAT",
      img: "/src/images/emisat.png",
      desc: "Electronic intelligence satellite for strategic defense.",
      year: "2019",
    },
    m3:{
      href:'#',
      title: "RISAT-2B",
      img: "/src/images/risat.png",
      desc: "Radar imaging satellite for all-weather surveillance",
      year: "2019",
    },
    m4:{
      href:'#',
      title: "Chandrayaan-2",
      img: "/src/images/chaand.png",
      desc: "Lunar mission; included orbiter, lander, and rover",
      year: "2019",
    }
  };
  return (
    <>
      <div className="hero">
        <div className="section">
          <span className="bold">Explore the Cosmos</span>
          <span className="text">
            Dive into the mysteries of the universe with our emerging tech
          </span>
          <Button text="Discover More" />
        </div>
      </div>
      <div className="features">
        <div className="head">Our Features</div>
        <div className="text">
          We provide the best tools for space exploration. Join our community
          and share your discoveries.
        </div>
        <div className="card-section">
          <TextCard href='#' desc = "Discover the latest images, videos, and stories about the universe" heading ="Planet" img="/src/images/globe.svg" />
          <TextCard href='#' desc = "Learn about ISRO's Chandrayaan missions to the Moon and beyond" heading ="Missions" img="/src/images/rocket.svg" />
          <TextCard href='#' desc = "Explore the world of satellite and how they work" heading ="Satellites" img="/src/images/satellite.svg" />
          <TextCard href='#' desc = "Find out about recent UFO sightings and other unexplained phenomena" heading ="UFOs" img="/src/images/ufo.svg" />
          {/* <TextCard href='#' desc = "Learn about the history and technology of space suits" heading ="Space Suits" img="/src/images/suit.svg" /> */}
          <TextCard href='#' desc = "Discover the design of astronaut helmets and more" heading ="Astronaut Helmets" img="/src/images/helmet.svg" />
        </div>
        <Missions
          title="Featured Missions"
          m1={mission.m1}
          m2 = {mission.m2}
          m3 = {mission.m3}
          m4 = {mission.m4}
        />
        <Missions
          title="Isro's Missions"
          m1=  {isro.m1}
          m2 = {isro.m2}
          m3 = {isro.m3}
          m4 = {isro.m4}
        />
      </div>
    </>
  );
}

export default Hero;
