import React from "react";

import "/src/Components/TextCard.css";
function TextCard(props) {
  return (
    <>
      <div className="text-cards">
        <a
          href={props.href}
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          <div className="content">
            <img src={props.img} alt="globe_image" />
            <span>{props.heading}</span>
            <span>{props.desc}</span>
          </div>
        </a>
      </div>
    </>
  );
}

export default TextCard;
