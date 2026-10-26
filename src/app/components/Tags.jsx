const Tags = ({ trait1, trait2, trait3, trait4 }) => {
  return (
    <>
      <div className="trait text-text-tag mb-4 flex flex-wrap gap-2 text-sm">
        <p className="trait bg-accent3 rounded-3xl px-3.5 py-2">{trait1}</p>
        <p className="trait bg-primary rounded-3xl px-3.5 py-2">{trait2}</p>
        <p className="trait bg-accent2 rounded-3xl px-3.5 py-2">{trait3}</p>
        <p className="trait bg-accent1 rounded-3xl px-3.5 py-2">{trait4}</p>
      </div>
    </>
  );
};

export default Tags;
