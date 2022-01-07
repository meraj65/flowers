import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/About.css";
function Contact() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    (async () => {
      const result = await axios(
        "http://hn.algolia.com/api/v1/search?query=react"
      );

      setData(result.data);
    })();
  }, []);

  return (
    <div className="main-div">
      <ul>
        {data.hits.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
