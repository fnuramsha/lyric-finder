import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchLyrics from "./SearchLyrics";

const SearchResults = (props) => {
  const { search } = props;

  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{search.artist_name}</h5>
          <p className="card-text">
            <strong>
              {" "}
              <i className="fas fa-play"> </i>
              Track{" "}
            </strong>{" "}
            : {search.track_name}
            <br />
            <strong>
              <i className="fas fa-compact-disc"></i>
              Album :{" "}
            </strong>
            {search.album_name}{" "}
          </p>
          <Link
            to={`lyrics/searchedLyrics/${search.track_id}`}
            className="btn btn-dark btn-block"
          >
            <i className="fas fa-chevron-right"></i> View Lyrics
          </Link>
          <SearchLyrics />
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
