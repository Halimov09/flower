import { SearchOffRounded, SearchRounded } from "@mui/icons-material";
import { colors } from "../../constants/color";
import { useState } from "react";
import {Searchpage} from "../";

const Search = () => {
  const [searc, setsearc] = useState("")
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

      className="input form-control darkmode"
        type="text"
        onChange={(e) => setsearc(e.target.value)}
        value={searc}
        placeholder="search"
        style={{ outline: "none", border: "none", color: colors.gren}}
      />
      <SearchRounded style={{color: `${colors.secondary}`, cursor: "pointer"}}/>
    </div>
  );
};

export default Search;
