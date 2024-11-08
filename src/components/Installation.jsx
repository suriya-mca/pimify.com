function Installation() {
  return (
    <section class="section" id="docs">
      <div class="container">
        <h2 class="title has-text-centered mb-6">Quick Installation</h2>
        <div class="columns is-centered">
          <div class="column is-8">
            <div class="box">
              <p class="mb-4">Get started with Pimify in minutes:</p>
              <pre>
                <code>
                  {`# Clone the repository
git clone https://github.com/suriya-mca/pimify.git

# Install dependencies
cd pimify

# On Mac/Linux
chmod +x install.sh
./install.sh

# On Windows
./install.bat`}
                </code>
              </pre>
              <div class="mt-4">
                <a
                  href="https://github.com/suriya-mca/pimify/blob/main/README.md"
                  target="_blank"
                  class="button is-link is-outlined"
                >
                  View Full Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Installation;
