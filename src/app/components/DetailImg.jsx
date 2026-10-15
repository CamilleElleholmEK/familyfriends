import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";
const DetailImg = () => {
  return (
    <>
      <div className="mb-4 grid [grid-template-areas:'stack']">
        <Image
          src="/dummydog.jpg"
          width={360}
          height={360}
          alt="Hund"
          className="rounded-2xl [grid-area:stack]"
        />

        <Link href="/" className="[grid-area:stack]">
          <button className="bg-card m-6 h-fit w-fit rounded-full p-1.25 [grid-area:stack]">
            <FiChevronLeft />
          </button>
        </Link>
      </div>
    </>
  );
};

export default DetailImg;
