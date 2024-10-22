import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { tracksContext } from "../../contexts/tracks.contexts";
import Spinner from "../layout/spinner";

const Lyric = (props) => {
  const { lyric, track } = props;
  const { trackList } = useContext(tracksContext);
  console.log("tracklist in lyric component", trackList);
  console.log("now track name", track.track.track_name);

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
                <p className="mt-2 card-text">{lyric.lyrics_body}</p>
                <strong> Album ID</strong> : {track.track.album_id}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Lyric;
