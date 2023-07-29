import React from "react";

const Show = (props) => {
  var { results, info } = props;
  console.log(info)
  console.log(results)
  console.log(props)
  if(results.length>5)
  {
    results=results.slice(0,5)
  }
  return (
    <div className="show">
      <div className="show__info">
        {info ? `Total results: ${info}` : ""}
      </div>
      {results.length > 0
        ? results.map((result) => (
          //map = for loop (results:1-length(results))
          //result=results[i]
            <div className="show__details">
              <div className="show__link">
                <a href={result.displayed_url}>{result.displayed_url}</a>
              </div>
              <div className="show__title">
                <a href={result.url}>{result.title}</a>
              </div>
              <div className="show__description">
                <p>{result.description}</p>
              </div>
            </div>
          ))
        : "Loading..."}
    </div>
  );
};

export default Show;
