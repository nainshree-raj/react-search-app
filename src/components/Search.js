import React from "react";
import { FaSistrix, FaMicrophone } from "react-icons/fa";
import { key } from "../API";
import axios from "axios";
import Show from "./Show";
const Search = (props) => {
  const goBack = () => {
    props.history.push("/");
  };
  const [state, setState] = React.useState(
    props.location.state ? props.location.state : ""
  );
  const [results, setResults] = React.useState([]);
  const [info, setInfo] = React.useState("");
  const searchGoogle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://app.scrapingbee.com/api/v1/store/google?api_key=${key}&search=${state}`
      );
      console.log(response)
      if (response) {
        setResults(response.data.organic_results);
        setInfo(response.data.meta_data.number_of_organic_results);
      }
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    async function getPosts() {
      if (props.location.state) {
        try {
          const response = await axios.get(
            `https://app.scrapingbee.com/api/v1/store/google?api_key=${key}&search=${state}`
          );
          console.log(response)
          if (response) {
            setResults(response.data.organic_results);
            setInfo(response.data.meta_data.number_of_organic_results);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    getPosts();
  }, []);
  return (
    <div className="search">
      <div className="search__form">
        <div className="search__form-logo">
          <img src="/images/small1.png" alt="logo" onClick={goBack} />
        </div>
        <div className="search__form-input">
          <form className="home__form" onSubmit={searchGoogle}>
            <input
              type="text"
              className="home__input"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />

            <FaSistrix className="search__icon" />
            <FaMicrophone className="microphone" />
          </form>
        </div>
      </div>
      <Show results={results} info={info} />
    </div>
  );
};

export default Search;
