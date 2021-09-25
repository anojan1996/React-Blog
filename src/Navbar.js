import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
    <nav className="navbar">
      <h1>Blog Post</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#5135f1',
          borderRadius: '8px' 
        }}>New Blog</Link>
      </div>
    </nav>
     );
}
 
export default Navbar;