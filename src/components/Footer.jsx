import { createSignal } from 'solid-js';

export default function Footer() {
  const [year] = createSignal(new Date().getFullYear());

  const links = {
    main: [
      { name: 'Features', href: '#features' },
      { name: 'Benefits', href: '#benefits' },
      { name: 'Documentation', href: '#docs' }
    ],
    social: [
      { name: 'GitHub', icon: 'github', href: 'https://github.com/suriya-mca/pimify' },
      { name: 'Twitter', icon: 'twitter', href: '#' },
      { name: 'Discord', icon: 'discord', href: '#' }
    ]
  };

  return (
    <footer class="footer">
      <div class="container">
        <div class="columns is-centered">
          {/* Main Links */}
          <div class="column is-8 has-text-centered">
            <h3 class="title is-4 has-text-white mb-4">Pimify</h3>
            <ul class="footer-links mb-4">
              {links.main.map(link => (
                <li class="is-inline-block mx-3">
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
            {/* Social Links */}
            <div class="social-links mb-4">
              {links.social.map(social => (
                <a href={social.href} class="mx-2 footer-social-link" target="_blank" rel="noopener noreferrer">
                  <span class="icon is-medium">
                    <i class={`fab fa-${social.icon} fa-lg`}></i>
                  </span>
                </a>
              ))}
            </div>
            {/* Copyright */}
            <p class="is-size-7">
              &copy; {year()} Pimify. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}