import { IoTennisballOutline } from "react-icons/io5";
import { FaDog } from "react-icons/fa6";
const Loading = () => {
  return (
    <>
      <section className="p-4">
        <p className="mb-8 place-self-center text-3xl">Fetching data</p>
        <div className="flex items-end place-self-center">
          <FaDog className="size-15" />
          <span className="mx-2.5 text-4xl tracking-widest">..........</span>
          <IoTennisballOutline className="mb-1 size-5 animate-spin" />
        </div>
      </section>
    </>
  );
};

export default Loading;
