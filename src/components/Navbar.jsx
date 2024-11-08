function Navbar() {
  return (
    <nav class="navbar is-transparent">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <span class="has-text-weight-bold is-size-4">Pimify</span>
          </a>
        </div>

        <div class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item" href="#features">
              Features
            </a>
            <a class="navbar-item" href="#benefits">
              Benefits
            </a>
            <a class="navbar-item" href="#docs">
              Documentation
            </a>
            <div class="navbar-item">
              <div class="buttons">
                <a
                  class="button is-primary"
                  target="_blank"
                  href="https://github.com/suriya-mca/pimify"
                >
                  <span class="icon">
                    <i class="fab fa-github"></i>
                  </span>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
