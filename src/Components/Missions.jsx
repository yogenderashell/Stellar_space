import React from "react";
import "./Missions.css";
function Missions(props) {
  return (
    <>
      <div className="featured-missions">
        <h2>{props.title}</h2>
        <div className="cards">
          <div className="card">
            <a href={props.m1.href} style={{cursor:'pointer',textDecoration:'none'}}>
            <div className="card-container">
              <img src={props.m1.img} alt="appolo 11" />
              <h3>{props.m1.title}</h3>
              <p>{props.m1.desc}</p>
              <p>{props.m1.year}</p>
            </div>
            </a>
          </div>
          <a href={props.m2.href} style={{cursor:'pointer',textDecoration:'none'}}>
          <div className="card">
            <div className="card-container">
              <img src={props.m2.img} alt="appolo 11" />
              <h3>{props.m2.title}</h3>
              <p>{props.m2.desc}</p>
              <p>{props.m2.year}</p>
            </div>
          </div>
          </a>
          <a href={props.m3.href} style={{cursor:'pointer',textDecoration:'none'}}>
          <div className="card">
            <div className="card-container">
              <img src={props.m3.img} alt="appolo 11" />
              <h3>{props.m3.title}</h3>
              <p>{props.m3.desc}</p>
              <p>{props.m3.year}</p>
            </div>
          </div>
          </a>
          <a href={props.m4.href} style={{cursor:'pointer',textDecoration:'none'}}>
          <div className="card">
            <div className="card-container">
              <img src={props.m4.img} alt="appolo 11" />
              <h3>{props.m4.title}</h3>
              <p>{props.m4.desc}</p>
              <p>{props.m4.year}</p>
            </div>
          </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Missions;
