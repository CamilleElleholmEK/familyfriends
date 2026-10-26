import DetailText from "./DetailText";
import Tags from "./Tags";
const Details = ({
  breed,
  breedDescription,
  breedHistory,
  trait1,
  trait2,
  trait3,
  trait4,
}) => {
  return (
    <>
      <div>
        <p className="mb-6 text-3xl font-bold">{breed}</p>
        <Tags trait1={trait1} trait2={trait2} trait3={trait3} trait4={trait4} />
        <DetailText
          description={breedDescription}

          history={breedHistory}
        />
      </div>
    </>
  );
};

export default Details;
