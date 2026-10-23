// Components
import DogCard from "./components/DogCard";
import SearchBar from "./components/SearchBar";
import Loading from "./components/Loading";
import { Suspense } from "react";

// Globals
import "./globals.css";

export default function ListView() {
  return (
    <>
      <SearchBar />
      <Suspense fallback={<Loading />}>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          <FetchData />
        </div>
      </Suspense>
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
            href={`/detailview/${dog.id}`}
            breed={dog.name}
            location={dog.origin}
            imgsrc={dog.image.url}
          />
        </div>
      ))}
    </>
  );
};
