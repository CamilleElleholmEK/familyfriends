const DetailText = ({ description, history }) => {
  return (
    <>
      <div>
        <div>
          <p className="font-man text-text-muted mb-0.5 text-sm font-medium">
            Breed description
          </p>
          <p className="mb-4">{description}</p>
        </div>
        <div>
          <p className="text-text-muted mb-0.5 text-sm font-medium">
            Breed history
          </p>
          <p>{history}</p>
        </div>
      </div>
    </>
  );
};

export default DetailText;
