import React, { useState } from "react";
import "./App.css";
import data from "./api/data";
function App() {
  const [searchterm, setsearchTerm] = useState("");
  return (
    <>
      <input
        placeholder="search..."
        type="text"
        className="border border-black   "
        style={{
          marginLeft: "35%",
          marginTop: "3%",
          width: "35%",
          height: "40px",
        }}
        onChange={(event) => {
          setsearchTerm(event.target.value);
        }}
      />
      {data
        .filter((val) => {
          if (searchterm == "") {
            return val;
          } else if (
            val.title.toLowerCase().includes(searchterm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((e) => {
          console.log(e, "test");
          return (
            <>
              <div className="container d-flex justify-center text-center flex sm:justify-center  md:justify-center  justify-items-center">
                <figure className="w-1/2 m-3 sm:flex justify-center w-1/2  md:flex justify-center rounded-xl p-8 md:p-0 dark:bg-slate-800 flex justify-center flex-col justify-items-center">
                  <img
                    className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                    src={e.images[0]}
                    alt=""
                    width="384"
                    height="512"
                  />
                  <div className="pt-6 md:p-8 w-1/2 text-center md:text-left space-y-4   ">
                    <blockquote>
                      <p className="text-lg font-medium text-white">
                        {e.title}
                      </p>
                      <h1 style={{ color: "white" }}>{e.id}</h1>
                    </blockquote>
                    <figcaption className="font-medium">
                      <div className="text-sky-500 dark:text-sky-400">
                        {e.brand}
                      </div>
                      <div className="text-slate-700 dark:text-slate-500">
                        {e.description}
                      </div>
                    </figcaption>
                  </div>
                </figure>
              </div>
            </>
          );
        })}
    </>
  );
}

export default App;
