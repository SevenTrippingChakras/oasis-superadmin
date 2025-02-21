import Select from "./Select";
import { useSearchParams } from "react-router-dom";

function SortBy({ options }) {
  const [seacrhParams, setSearchParams] = useSearchParams();

  const sortBy = seacrhParams.get("sortBy") || "";

  function handleChange(e) {
    seacrhParams.set("sortBy", e.target.value);
    setSearchParams(seacrhParams);
  }

  return (
    <Select
      options={options}
      type="white"
      onChange={handleChange}
      value={sortBy}
    />
  );
}

export default SortBy;
