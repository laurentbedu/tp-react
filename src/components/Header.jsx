function Header() {
  return (
    <header
      style={{
        backgroundColor: "#282c34",
        color: "white",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <h1>Mon Super Site</h1>
      <nav>
        <a href="#" style={{ color: "white", margin: "0 10px" }}>
          Accueil
        </a>
        <a href="#" style={{ color: "white", margin: "0 10px" }}>
          À propos
        </a>
        <a href="#" style={{ color: "white", margin: "0 10px" }}>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
