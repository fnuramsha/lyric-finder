import { tracksContext } from "../../contexts/tracks.contexts";
import { useContext } from "react";

const Search = () => {
  const { userInputValues, setUserInputValues } = useContext(tracksContext);

  const changeHandler = (e) => {
    setUserInputValues({ ...userInputValues, [e.target.name]: e.target.value });
  };
  return (
    <div className="text-center">
      <h2>
        <i className="fas fa-music"></i>
        Search For A Song{" "}
      </h2>
      <p>Get the lyrics for any song</p>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Song title..."
            onChange={changeHandler}
            name="search"
            value={userInputValues.search}
          />
        </div>
      </form>
    </div>
  );
};
export default Search;
