const SearchResults = (props) => {
  const { search } = props;

  console.log("artist name in search results", search.artist_name);

  return (
    <div className="col-md-6">
      <div className="card mb-4 shadown-sm">
        <div className="card-body">
          <h5>{search.artist_name}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play"></i>
              Track
            </strong>
            : {search.track_name}
            <br />
            <strong>
              <i className="fas fr-compact-disc"></i>
              Album
            </strong>
            {search.album_name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
