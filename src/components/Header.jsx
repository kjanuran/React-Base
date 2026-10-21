function Header() {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    padding: '20px 40px',
    textAlign: 'center',
    color: '#fff',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
  };

  const navStyle = {
    display: 'flex',
    gap: '24px',
  };

  return (
    <header style={headerStyle}>
      <h2>KKJ Furniture Sales Centre</h2>

      <nav style={navStyle}>
          <a href="/" style={linkStyle}>Home</a>
          <a href="/products" style={linkStyle}>Products</a>
          <a href="/about" style={linkStyle}>About</a>
          <a href="/contact" style={linkStyle}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;