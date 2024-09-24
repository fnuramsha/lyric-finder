// import React, { useContext } from "react";
// import { tracksContext } from "../../contexts/tracks.contexts";
// import Spinner from "../../components/layout/spinner";
// import Track from "./Track";

// const Tracks = () => {
//   const { getData, trackList, setTrackList, helperFunc } =
//     useContext(tracksContext);

//   //debugging code
//   const displayTracks = () => {
//     helperFunc();
//   };

//   return (
//     <div className="text-center">
//       <h3>Top 10 Tracks</h3>
//       <div className="row"></div>
//     </div>
//   );
// };
// export default Tracks;

import React, { useContext, useEffect } from "react";
import { tracksContext } from "../../contexts/tracks.contexts";
import Spinner from "../../components/layout/spinner";
import Track from "./Track";

const Tracks = () => {
  const { getData, trackList, setTrackList } = useContext(tracksContext);

  useEffect(() => {
    // Call the function when the component mounts
    const fetchData = async () => {
      await getData(setTrackList);
      // You can call helperFunc here if needed
      // helperFunc();
    };

    fetchData();
  }, []); // Add dependencies here

  return (
    <div className="text-center">
      <h3>Top 10 Tracks</h3>
      <div className="row">
        {trackList.map((track) => {
          <Track key={track.track_id} track={track} />;
        })}
      </div>
    </div>
  );
};

export default Tracks;
