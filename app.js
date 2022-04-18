const features = [
  {
    type: 'Card',
    routes: [
      { label: 'Box border hover', route: 'cards/box-border-hover/' },
      { label: 'Ribbon card', route: 'cards/ribbon-card/' },
    ],
  },
  {
    type: 'Icons',
    routes: [
      { label: 'Glowing social icons', route: 'icons/glowing-social-icons/' },
      { label: 'Icon fill hover', route: 'icons/icon-fill-hover/' },
    ],
  },
  {
    type: 'Inputs',
    routes: [
      { label: 'Custom checkbox', route: 'inputs/custom-checkbox/' },
      { label: 'Light bulb', route: 'inputs/light-bulb/' },
      { label: 'Day night switch', route: 'inputs/day-night-switch/' },
    ],
  },
  {
    type: 'Loaders',
    routes: [
      { label: 'Circle dots loader', route: 'loaders/circle-dots-loader/' },
      { label: 'Glowing loader', route: 'loaders/glowing-loader/' },
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
    ],
  },
  {
    type: 'Widgets',
    routes: [{ label: 'Calculator', route: 'widgets/calculator/' }],
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