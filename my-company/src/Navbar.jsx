import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1em', background: '#222', marginBottom: '2em', borderRadius: '0 0 8px 8px', boxShadow: '0 2px 8px #eee', display: 'flex', justifyContent: 'center' }}>
      <Link to="/" style={{ margin: '0 1em', color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 1em', color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>About</Link>
      <Link to="/services" style={{ margin: '0 1em', color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Services</Link>
      <Link to="/contact" style={{ margin: '0 1em', color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
