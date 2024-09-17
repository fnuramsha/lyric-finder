import React from "react";

const Track = (props) => {
  const { track } = props;
  return (
    <div className="col-md-6">
      <div className="card mb-5">
        <div className="card-body">
          <h5>{track.artisit_name}</h5>
        </div>
      </div>
    </div>
  );
};

export default Track;
