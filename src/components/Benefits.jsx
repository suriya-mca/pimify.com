import { createSignal, onMount } from 'solid-js';

function Benefits() {
  const benefits = [
    {
      icon: 'fa-code-branch',
      title: 'Open Source',
      description:
        'Full control over your data with the freedom to modify and extend functionality',
    },
    {
      icon: 'fa-rocket',
      title: 'Scalable',
      description:
        'Grows with your business, from startups to enterprise-level operations',
    },
    {
      icon: 'fa-user-shield',
      title: 'User-Friendly',
      description:
        'Intuitive interface designed for efficient product data management',
    },
    {
      icon: 'fa-code',
      title: 'API-First',
      description:
        'Robust API for seamless integration with your existing tools',
    },
  ];

  return (
    <section class="section" id="benefits">
      <div class="container">
        <h2 class="title has-text-centered mb-6">
          Why Choose <span class="has-text-primary">Pimify</span>?
        </h2>
        <div class="columns is-multiline is-4 is-variable">
          {benefits.map((benefit, index) => (
            <div class="column is-6">
              <div 
                class="box benefit-card"
                style={`animation-delay: ${index * 0.1}s`}
              >
                <div class="benefit-icon-wrapper">
                  <span class="icon is-large has-text-primary">
                    <i class={`fas ${benefit.icon} fa-2x`}></i>
                  </span>
                </div>
                <div class="benefit-content">
                  <h3 class="title is-4 mb-2">{benefit.title}</h3>
                  <p class="subtitle is-6 mt-2">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;