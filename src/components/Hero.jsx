import { onMount } from 'solid-js';

function Hero() {
  onMount(() => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.classList.add('fade-in');
    }
  });

  return (
    <section class="hero is-dark is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered is-centered">
            <div class="column is-10">
              <div class="hero-content">
                <div class="has-text-centered mb-6">
                  <span class="tag is-black is-medium mb-4">
                    Open Source PIM Solution
                  </span>
                  <h1 class="hero-title mt-4">
                    Manage Product Data with
                    <span class="has-text-primary"> Confidence</span>
                  </h1>
                  <h2 class="hero-subtitle">
                    Streamline your product information workflow with our
                    powerful, open-source PIM solution. Built for modern
                    commerce.
                  </h2>
                  {/* <div class="buttons is-centered mt-6">
                    <a href="#features" class="button is-primary is-medium pulse-button">
                      <span class="icon">
                        <i class="fas fa-rocket"></i>
                      </span>
                      <span>Explore Features</span>
                    </a>
                    <a href="https://github.com/suriya-mca/pimify" class="button is-light is-medium is-outlined">
                      <span class="icon">
                        <i class="fab fa-github"></i>
                      </span>
                      <span>View on GitHub</span>
                    </a>
                  </div> */}
                </div>
                <div class="screenshot-wrapper">
                  <div class="screenshot-container">
                    <div class="corner-shine"></div>
                    <img
                      src="public/pim1.png"
                      alt="Pimify Dashboard"
                      class="screenshot"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
