// Components
import DogList from "./components/DogList";
import SearchBar from "./components/SearchBar";
import Loading from "./components/Loading";
import { Suspense } from "react";

// Globals
import "./globals.css";

export default function ListView({ searchParams }) {
  return (
    <>
      <SearchBar />
      <Suspense fallback={<Loading />}>
        <DogList searchParams={searchParams} />
      </Suspense>
    </>
  );
}
