import { SearchOffRounded, SearchRounded } from "@mui/icons-material";
import { colors } from "../../constants/color";

const Search = () => {
  return (
    <div
      style={{
        marginLeft: "20px",
        border: `1px solid ${colors.gren}`,
        display: "flex",
        alignItems: "center",
        padding: "0px 10px",
        borderRadius: "10px",
      }}
    >
      <input

      className="input form-control"
        type="text"
        placeholder="search"
        style={{ outline: "none", border: "none", backgroundColor: colors.white}}
      />
      <SearchRounded style={{color: `${colors.secondary}`, cursor: "pointer"}}/>
    </div>
  );
};

export default Search;
