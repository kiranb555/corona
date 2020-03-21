import React from "react";
import "./Feed.card.scss";

const FeedCard = ({ data }) => {
  let time = new Date(data.publishedAt);

  return (
    <a href={data.url} target="_blank" rel="noopener noreferrer">
      <div className="feedcard card">
        <div className="feddCardBody">
          <div>
            <img src={data.urlToImage} width="140" height="100" alt="img" />
          </div>
          <div className="newsInfo">
            <div className="newsTitle">{data.title}</div>
            <div className="newsProvider">
              <div>{data.source.name}</div>
              <div>
                {time.getHours()} : {time.getMinutes()}min
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default FeedCard;
