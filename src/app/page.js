// Components
import DogCard from "./components/DogCard";
import SearchBar from "./components/SearchBar";

// Globals
import "./globals.css";

export default function ListView() {
  return (
    <>
      <SearchBar />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        <FetchData />
      </div>
    </>
  );
}

const FetchData = async () => {
  const response = await fetch("https://api.thedogapi.com/v1/breeds?limit=12", {
    headers: {
      "x-API-key": process.env.API_KEY,
    },
  });

  const dogData = await response.json();

  return (
    <>
      {dogData.map((dog) => (
        <div key={dog.id}>
          <DogCard
            breed={dog.name}
            location={dog.origin}
            imgsrc={dog.image.url}
          />
        </div>
      ))}
    </>
  );
};
