import { FiSearch } from "react-icons/fi";
const SearchBar = () => {
  return (
    <>
      <div>
        <form className="flex gap-3">
          <button type="submit" className="bg-primary rounded-full p-2.5">
            <FiSearch className="text-card" />
          </button>
          <input
            name="query"
            className="border-text-muted w-full rounded-full border border-solid"
          />
        </form>
      </div>
    </>
  );
};

export default SearchBar;
