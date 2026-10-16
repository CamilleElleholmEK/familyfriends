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
        <DogCard breed="Affenpinscher" location="Northern Germany" />
        <DogCard breed="Afghan Hound" location="Afghanistan" />
        <DogCard breed="Airedale Terrier" location="Yorkshire, England" />
        <DogCard breed="Akbash" location="Western Turkey" />
        <DogCard breed="Gravhund" location="Naboens have" />
        <DogCard breed="Akita" location="Min baghave" />
      </div>
    </>
  );
}
