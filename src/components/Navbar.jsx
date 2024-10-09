// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 
        <li><Link class="nav-link active" aria-current="page" to="/">Inicio</Link></li>
        <li><Link class="nav-link active" aria-current="page" to="/set/trainer">Trainer</Link></li>
        <li><Link class="nav-link active" aria-current="page" to="/set/ex">Pokemon EX</Link></li>
        <li><Link class="nav-link active" aria-current="page" to="/set/gx">Pokemon GX</Link></li>
        <li><Link class="nav-link active" aria-current="page" to="/set/v">Pokemon V</Link></li>
        <li><Link class="nav-link active" aria-current="page" to="/cart">Carrito</Link></li>
        </ul>
    </nav>
  );
};

export default Navbar;



