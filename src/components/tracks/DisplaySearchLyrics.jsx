import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { tracksContext } from "../../contexts/tracks.contexts";
import Spinner from "../layout/spinner";
import Moment from "react-moment";

const DisplaySearchLyrics = (props) => {
  const { lyric, trackForSearch } = props;

  if (!trackForSearch || !lyric || !trackForSearch.track) {
    return <p></p>; // Placeholder text instead of Spinner
  }

  return (
    <>
      <div className="card-body">
        {trackForSearch === undefined ||
        lyric === undefined ||
        Object.keys(trackForSearch).length === 0 ||
        Object.keys(lyric).length === 0 ? (
          <Spinner />
        ) : (
          <>
            <Link to="/" className="btn btn-dark btn-sm mb-4">
              Go back
            </Link>

            <div className="card">
              <div className="card-header">
                {trackForSearch.track.track_name}
                <span className="mx-2">by</span>
                <span className=" mb-3 text-secondary">
                  {trackForSearch.track.artist_name}
                </span>
                <p className="mt-2 card-text">{lyric.lyrics.lyrics_body}</p>
                <ul className="list-group mt-3">
                  <li>
                    <strong> Album ID</strong> : {trackForSearch.track.album_id}
                  </li>
                  <li>
                    <strong> Song Genre</strong> :
                    {
                      trackForSearch.track.primary_genres.music_genre_list[0]
                        .music_genre.music_genre_name
                    }
                  </li>
                  <li>
                    {" "}
                    <strong> Explicit words </strong> :{" "}
                    {trackForSearch.explicit === 0 ? "No" : "Yes"}
                  </li>
                  <li>
                    <strong> Updated date </strong> :{" "}
                    <Moment format="DD.MM.YYYY">
                      {trackForSearch.track.updated_time}
                    </Moment>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default DisplaySearchLyrics;
