import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { tracksContext } from "../../contexts/tracks.contexts";
import Spinner from "../layout/spinner";
import Moment from "react-moment";

const Lyric = (props) => {
  const { lyric, track } = props;

  return (
    <>
      <div className="card-body">
        {track === undefined ||
        lyric === undefined ||
        Object.keys(track).length === 0 ||
        Object.keys(lyric).length === 0 ? (
          <Spinner />
        ) : (
          <>
            <Link to="/" className="btn btn-dark btn-sm mb-4">
              Go back
            </Link>
            <div className="card">
              <div className="card-header">
                {track.track.track_name}
                <span className="mx-2">by</span>
                <span className=" mb-3 text-secondary">
                  {track.track.artist_name}
                </span>
                <p className="mt-2 card-text">{lyric.lyrics.lyrics_body}</p>
                <ul className="list-group mt-3">
                  <li>
                    <strong> Album ID</strong> : {track.track.album_id}
                  </li>
                  <li>
                    <strong> Song Genre</strong> :
                    {
                      track.track.primary_genres.music_genre_list[0].music_genre
                        .music_genre_name
                    }
                  </li>
                  <li>
                    {" "}
                    <strong> Explicit words </strong> :{" "}
                    {track.explicit === 0 ? "No" : "Yes"}
                  </li>
                  <li>
                    <strong> Updated date </strong> :{" "}
                    <Moment format="DD.MM.YYYY">
                      {track.track.updated_time}
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
export default Lyric;
