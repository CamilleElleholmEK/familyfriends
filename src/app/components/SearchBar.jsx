import { FiSearch } from "react-icons/fi";
import Form from "next/form";
const SearchBar = ({ searchParams, query }) => {
  return (
    <>
      <div className="mt-4 mb-8">
        <Form action="/" className="flex gap-3">
          <button type="submit" className="bg-primary hover rounded-full p-2.5">
            <FiSearch className="text-card" />
          </button>
          <input
            type="search"
            name="query"
            placeholder="Search breeds"
            className="border-text-muted w-full rounded-full border border-solid px-3"
          />
        </Form>
      </div>
    </>
  );
};

export default SearchBar;
