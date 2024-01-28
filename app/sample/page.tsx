import React from "react";
import "./styles.css";

const page = () => {
  return (
    <>
      <head></head>
      <body>
        <div className="container">
          <div className="card">
            <h3 className="title">Card 1</h3>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
            <div className="circle">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className="stroke" cx="60" cy="60" r="50" />
              </svg>
            </div>
          </div>
          <div className="card">
            <h3 className="title">Card 2</h3>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
            <div className="circle">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className="stroke" cx="60" cy="60" r="50" />
              </svg>
            </div>
          </div>
          <div className="card">
            <h3 className="title">Card 3</h3>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
            <div className="circle">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className="stroke" cx="60" cy="60" r="50" />
              </svg>
            </div>
          </div>
          <div className="card">
            <h3 className="title">Card 4</h3>
            <div className="bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
            <div className="circle">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle className="stroke" cx="60" cy="60" r="50" />
              </svg>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default page;
