const DetailText = ({ description, history }) => {
  return (
    <>
      <div>
        <div>
          <p className="text-text-muted text-sm font-medium">
            Breed description
          </p>
          <p>{description}</p>
        </div>
        <div>
          <p className="text-text-muted text-sm font-medium">Breed history</p>
          <p>{history}</p>
        </div>
      </div>
    </>
  );
};

export default DetailText;
