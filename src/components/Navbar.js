import React from 'react';
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-transparent">
      <div class="container">
        <a class="navbar-brand" href="#"><span className='brand-tune'>TUNE</span><span className='brand-chatter'>CHATTER</span></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link nav-link-small" href="#">SIGN IN</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-small" href="#">CREATE ACCOUNT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-link-small" href="#">ALBUMS</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
