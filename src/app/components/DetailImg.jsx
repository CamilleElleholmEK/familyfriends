import Image from "next/image";
const DetailImg = () => {
  return (
    <>
      <div>
        <Image
          src="/dummydog.jpg"
          width={360}
          height={360}
          alt="Hund"
          className="rounded-2xl"
        />
      </div>
    </>
  );
};

export default DetailImg;
