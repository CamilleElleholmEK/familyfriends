import DetailText from "./DetailText";
import Tags from "./Tags";
const Details = ({ breed }) => {
  return (
    <>
      <div>
        <p className="text-3xl font-bold">{breed}</p>
        <Tags
          trait1="Confident"
          trait2="Alert"
          trait3="Playful"
          trait4="Loyal"
        />
        <DetailText
          description="Small, sturdy toy breed with a distinctive monkey-like expression and shaggy, wiry coat. Known for its confident, terrier-like personality despite its small size.
"
          history="Originating in 17th-century Germany, bred down from larger terriers to be skilled ratters in homes, kitchens and stables. Refined in Munich and Berlin, recognized by AKC in 1936. Name translates to 'monkey-like terrier"
        />
      </div>
    </>
  );
};

export default Details;
