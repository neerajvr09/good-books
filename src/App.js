import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const bookDB = {
    javascript: [
      { name: "Eloquent JavaScript", rating: "4/5" },
      { name: "A Smater Way To Learn JavaScript", rating: "3.5/5" }
    ],
    novel: [
      { name: "The Story of My Life by Helen Keller", rating: "4.5/5" },
      { name: "The Canterville Ghost", rating: "4/5" }
    ],
    story: [
      { name: "Panchtantra", rating: "4.5/5" },
      { name: "Harry Potter and the Philosopher's Stone", rating: "4/5" }
    ]
  };
  const bookDBArr = Object.keys(bookDB);
  const [genreList, setList] = useState("javascript");
  function clickHandler(category) {
    setList(category);
  }

  return (
    <div className="App">
      <h1>📚 goodbooks</h1>
      <div style={{ padding: "20px" }}>
        Checkout my favorite books. Select a genre to get started.
      </div>
      <div style={{ padding: "10px" }}>
        {bookDBArr.map((category) => {
          return (
            <button
              onClick={() => clickHandler(category)}
              key={category}
              style={{
                padding: "5px 10px",
                borderRadius: "8px",
                margin: "0 10px 10px"
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
      <hr />
      <div
        style={{ alignContent: "center", margin: "auto", maxWidth: "250px" }}
      >
        <div style={{ textAlign: "left" }}>
          <ul style={{ paddingInlineStart: "0" }}>
            {bookDB[genreList].map((book) => (
              <li
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  width: "70%",
                  margin: "1rem 0rem",
                  borderRadius: "0.5rem"
                }}
              >
                <div style={{ fontSize: "larger" }}> {book.name} </div>
                <div style={{ fontSize: "smaller" }}> {book.rating} </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
