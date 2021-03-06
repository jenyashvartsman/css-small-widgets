const features = [
  {
    type: 'Buttons',
    routes: [
      { label: 'Sketch hover button', route: 'buttons/sketch-hover-button' },
    ],
  },
  {
    type: 'Card',
    routes: [
      { label: 'Box border hover', route: 'cards/box-border-hover/' },
      { label: 'Gradient border card', route: 'cards/gradient-border-card/' },
      { label: 'Ribbon card', route: 'cards/ribbon-card/' },
      { label: 'Product card', route: 'cards/product-card/' },
    ],
  },
  {
    type: 'Icons',
    routes: [
      { label: 'Animated stroke icons', route: 'icons/animated-stroke-icons/' },
      { label: 'Glowing social icons', route: 'icons/glowing-social-icons/' },
      { label: 'Icon fill hover', route: 'icons/icon-fill-hover/' },
    ],
  },
  {
    type: 'Inputs',
    routes: [
      { label: 'Custom checkbox', route: 'inputs/custom-checkbox/' },
      { label: 'Custom checkbox 2', route: 'inputs/custom-checkbox-2/' },
      { label: 'Light bulb', route: 'inputs/light-bulb/' },
      { label: 'Day night switch', route: 'inputs/day-night-switch/' },
      { label: 'Dark light switch', route: 'inputs/dark-light-switch/' },
    ],
  },
  {
    type: 'Loaders',
    routes: [
      { label: 'Circle dots loader', route: 'loaders/circle-dots-loader/' },
      { label: 'Fingerprint scanner', route: 'loaders/fingerprint-scanner/' },
      { label: 'Glowing loader', route: 'loaders/glowing-loader/' },
      { label: 'Infinity', route: 'loaders/infinity/' },
    ],
  },
  {
    type: 'Navigation',
    routes: [
      {
        label: 'Circular navigation menu',
        route: 'navigation/circular-navigation-menu/',
      },
    ],
  },
  {
    type: 'Text',
    routes: [
      { label: 'Glowing text', route: 'text/glowing-text/' },
      { label: 'Hover text', route: 'text/hover-text/' },
      { label: 'Wavy text', route: 'text/wavy-text/' },
      { label: 'Water text', route: 'text/water-text/' },
    ],
  },
  {
    type: 'Widgets',
    routes: [
      { label: 'analog clock', route: 'widgets/analog-clock/' },
      { label: 'Calculator', route: 'widgets/calculator/' },
      { label: 'Dots hover effect', route: 'widgets/dots-hover-effect/' },
      { label: 'Testimonial slider', route: 'widgets/testimonial-slider/' },
      { label: 'Animated login form', route: 'widgets/animated-login-form/' },
      { label: 'Hexagon hover', route: 'widgets/hexagon-hover/' },
      {
        label: 'Swiper slider gallery',
        route: 'widgets/swiper-slider-gallery/',
      },
    ],
  },
];

const container = document.querySelector('.container');

features.forEach((feature) => {
  // feature title
  const cardTitle = document.createElement('h3');
  cardTitle.innerText = feature.type;

  // features list
  const cardList = document.createElement('ul');
  feature.routes.forEach((route) => {
    // href
    const cardListItemHref = document.createElement('a');
    cardListItemHref.href = route.route;
    cardListItemHref.innerText = route.label;
    cardListItemHref.target = '_blank';

    // li
    const cardListItem = document.createElement('li');

    cardListItem.append(cardListItemHref);
    cardList.appendChild(cardListItem);
  });

  // card
  const card = document.createElement('div');
  card.className = 'card';
  card.append(cardTitle);
  card.append(cardList);

  container.append(card);
});
