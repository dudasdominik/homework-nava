interface DetailsProp {
  isId?: boolean;
  isImportant?: boolean;
  h1?: string;
  h2?: string;
  h3?: string;
}

export const CardDetails = ({ isId, h1, h2, h3, isImportant }: DetailsProp) => {
  isId = isId ?? false;
  return (
    <div className="id-container">
      <h1>{h1}:</h1>
      <section className="id-section">
        <h2 style={{ color: isImportant ? "#00FFF0" : "white" }}>{h2}</h2>
        {isId && <h3>{h3}</h3>}
      </section>
    </div>
  );
};
