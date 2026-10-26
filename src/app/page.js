// Components
import DogList from "./components/DogList";
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
        <DogList />
      </Suspense>
    </>
  );
}
