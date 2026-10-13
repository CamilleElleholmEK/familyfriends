import Image from "next/image";
import Link from "next/link";
import { FiStar } from "react-icons/fi";

const DogCard = ({ breed, location }) => {
  return (
    <>
      <div className="bg-card w-fit rounded-2xl">
        <div className="grid [grid-template-areas:'stack']">
          <Link href="/detailview" className="[grid-area:stack]">
            <Image
              src="/dummydog.jpg"
              width={160}
              height={114}
              alt="Hund"
              className="rounded-2xl [grid-area:stack]"
            />
          </Link>
          <button className="bg-glass m-2 h-fit w-fit justify-self-end rounded-full p-1.25 backdrop-blur-lg [grid-area:stack]">
            <FiStar className="text-card" />
          </button>
        </div>
        <div className="px-3 py-4">
          <p className="text-base font-bold">{breed}</p>
          <p className="text-text-muted text-xs">{location}</p>
        </div>
      </div>
    </>
  );
};

export default DogCard;
