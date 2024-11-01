import { tracksContext } from "../../contexts/tracks.contexts";
import { useContext } from "react";
import SearchResults from "./SearchResults";

const Search = () => {
  const {
    searchedTrackList,
    setSearchedTrackList,
    getSearchedLyrics,
    userInputValue,
    setUserInputValues,
  } = useContext(tracksContext);

  const changeHandler = (e) => {
    setUserInputValues(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const updatedCartList = await getSearchedLyrics(userInputValue);
    setSearchedTrackList(updatedCartList);
    console.log("searched track list", searchedTrackList);
  };

  return (
    <div className="text-center">
      <h2> Search for a song </h2>
      <p>Get the lyrics for any song</p>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Song title..."
            name="search"
            value={userInputValue}
            onChange={changeHandler}
          />
        </div>

        <button
          className="btn btn-secondary btn-sm btn-block mb-5 mt-3"
          type="submit"
        >
          Get Track Lyrics
        </button>

        <div className="row">
          {searchedTrackList.map((item) => {
            return (
              <SearchResults key={item.track.track_id} search={item.track} />
            );
          })}
        </div>
      </form>
    </div>
  );
};
export default Search;
