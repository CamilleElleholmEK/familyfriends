import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";
import { FiStar } from "react-icons/fi";
const DetailImg = ({ breed }) => {
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
        <div className="flex justify-between p-6 [grid-area:stack]">
          <Link href="/" className="[grid-area:stack]">
            <button className="bg-card h-fit w-fit rounded-full p-1.25">
              <FiChevronLeft className="size-5.5 self-center" />
            </button>
          </Link>
          <button className="bg-glass h-fit w-fit justify-self-end rounded-full p-1.25 backdrop-blur-lg">
            <FiStar className="text-card size-5.5 self-center" />
          </button>
        </div>
        <div className="bg-glass m-6 flex h-fit w-fit self-end rounded-2xl p-2 backdrop-blur-lg [grid-area:stack]">
          <Image
            src="/dummydog.jpg"
            width={32}
            height={32}
            alt="Hund"
            className="rounded-lg [grid-area:stack]"
          ></Image>
          <p className="text-card self-center">{breed}</p>
        </div>
      </div>
    </>
  );
};

export default DetailImg;
