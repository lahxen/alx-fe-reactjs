function Footer() {
  return (
    <footer style={{
      background: '#222',
      color: '#fff',
      textAlign: 'center',
      padding: '1em 0',
      marginTop: '3em',
      borderRadius: '8px 8px 0 0',
      boxShadow: '0 -2px 8px #eee',
      fontSize: '1em',
      letterSpacing: '1px'
    }}>
      © {new Date().getFullYear()} My Company. All rights reserved.
    </footer>
  );
}

export default Footer;
