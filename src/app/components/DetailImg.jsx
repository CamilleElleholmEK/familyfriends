import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft } from "react-icons/fi";
import { FiStar } from "react-icons/fi";
const DetailImg = ({ breed }) => {
  return (
    <>
      <div className="stackcontainer mb-4 w-fit">
        <Image
          src="/dummydog.jpg"
          width={360}
          height={360}
          alt="Hund"
          className="stackitem rounded-2xl"
        />
        <div className="stackitem flex justify-between p-6">
          <Link href="/">
            <button className="bg-card hover h-fit w-fit rounded-full p-1.25">
              <FiChevronLeft className="size-5.5 self-center" />
            </button>
          </Link>
          <button className="hover glasseffect h-fit w-fit justify-self-end rounded-full p-1.25">
            <FiStar className="text-card size-5.5 self-center" />
          </button>
        </div>
        <div className="glasseffect stackitem m-6 flex h-fit w-fit self-end rounded-2xl p-2">
          <Image
            src="/dummydog.jpg"
            width={32}
            height={32}
            alt="Hund"
            className="stackitem mr-2 rounded-lg"
          ></Image>
          <p className="text-card self-center">{breed}</p>
        </div>
      </div>
    </>
  );
};

export default DetailImg;
