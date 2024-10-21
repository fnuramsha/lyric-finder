import React from "react";
const Lyric = (props) => {
  const { lyric } = props;
  return (
    <div>
      <h1>{lyric.lyrics_body}</h1>
    </div>
  );
};
export default Lyric;
