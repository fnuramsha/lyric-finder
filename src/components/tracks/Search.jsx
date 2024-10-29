import { tracksContext } from "../../contexts/tracks.contexts";
import { useContext } from "react";

const Search = () => {
  const { userInputValues, setUserInputValues, getSearchedLyrics } =
    useContext(tracksContext);

  const changeHandler = (e) => {
    setUserInputValues({ [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    getSearchedLyrics(userInputValues);
  };
  return (
    <div className="text-center">
      <h2> Search for a song </h2>
      <p>Get the lyrics for any song</p>
      <form>
        <div className="form-group">
          <input
            type="text"
            placeholder="Song title..."
            name="search"
            value={userInputValues.search}
            onChange={changeHandler}
          />
        </div>

        <button
          className="btn btn-secondary btn-sm btn-block mb-5 mt-3"
          type="submit"
          onClick={submitHandler}
        >
          Get Track Lyrics
        </button>
      </form>
    </div>
  );
};
export default Search;
