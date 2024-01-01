const Navbar = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateAreas: '"title about contact"',
        gridTemplateColumns: "1fr auto auto",
        width: "100%",
        gap: "5px",
      }}
    >
      <div style={{ gridArea: "title" }}>Eli Miller</div>
      <div style={{ gridArea: "about" }}>About</div>
      <div style={{ gridArea: "contact" }}>Contact</div>
    </div>
  );
};

export default Navbar;
