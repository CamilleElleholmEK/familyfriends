// Components
import Link from "next/link";
import DogCard from "./components/DogCard";
import SearchBar from "./components/SearchBar";

// Globals
import "./globals.css";

export default function ListView() {
  return (
    <>
      <SearchBar />
      <Link href="/detailview">Go to DetailView</Link>
      <div className="grid grid-cols-2 gap-x-4.5 gap-y-5">
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
