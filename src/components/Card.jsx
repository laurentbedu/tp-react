function Card({ title, description, category = "Non classé", image }) {
  return (
    //FIXME : changer backgroundColor
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        margin: "1rem",
        //   backgroundColor: 'white',
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "4px",
          }}
        />
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <span
        style={{
          color: "#666",
          fontSize: "0.9em",
        }}
      >
        Catégorie: {category}
      </span>
    </div>
  );
}

export default Card;
