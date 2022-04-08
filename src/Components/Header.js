import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/home" className="navbar-brand" href="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/homecomp" className="nav-link" >Home</Link>
        <Link to="/classComp" className="nav-link" href="#">Counter</Link>
        <Link to="/listkeys" className="nav-link" href="#">ListsKeys</Link>
        <Link to="/classlifecycle" className="nav-link" href="#">classlifecycle</Link>
        <Link to="/contactus" className="nav-link" href="#">ContactUS</Link>
        <Link to="/pagination" className="nav-link" href="#">Pagination</Link>
        <Link to="/usestate" className="nav-link" href="#">useStateHook</Link>
        <Link to="/useeffect" className="nav-link" href="#">Todo</Link>
        <Link to="/useeffectpagination" className="nav-link" href="#">useEffectPagination</Link>

        <a  className="nav-link" href="#">Pricing</a>
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header