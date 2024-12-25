import images from './images';

const wines = [
  {
    title: 'Café au Lait',
    price: '$15',
    tags: 'A French classic, featuring rich espresso and velvety steamed milk',
  },
  {
    title: 'Affogato al Caffè',
    price: '$12',
    tags: 'A decadent dessert-style coffee, with a scoop of vanilla gelato immersed in a shot of hot, bold espresso',
  },
  {
    title: 'Viennese Coffee',
    price: '$11',
    tags: 'A refined black coffee topped with whipped cream, elegantly presented with a hint of chocolate or cinnamon',
  },
  {
    title: 'Dragonwell Green Tea',
    price: '$10',
    tags: 'Premium Chinese green tea with a gentle, grassy flavor and light, refreshing aftertaste',
  },
  {
    title: 'Tie Guan Yin Oolong',
    price: '$12',
    tags: 'Our take on the classic chinese oolong with a fragrant, creamy texture and a complex, floral flavor profile',
  },
  {
    title: 'Darjeeling First Flush',
    price: '$16',
    tags: 'Black tea with a floral bouquet and light astringency',
  },
];

const cocktails = [
  {
    title: 'Shirley Temple',
    price: '$15',
    tags: 'A refreshing blend of ginger ale and grenadine, topped with a maraschino cherry',
  },
  {
    title: "Virgin Pina Colada",
    price: '$12',
    tags: 'Coconut cream and fresh pineapple juiced, garnished with a slice of pineapple',
  },
  {
    title: 'Mango Mule',
    price: '$10',
    tags: 'Ripe mango accomplanied by zesty notes of alcohol-free ginger beer',
  },
  {
    title: 'Rasberry Lime Rickey',
    price: '10',
    tags: 'Freshly picked rasberries mixed with lime juice and soda water',
  },
  {
    title: 'Saffron Lemon Iced Tea',
    price: '$13',
    tags: 'Saffron infused iced tea with a lemon twist',
  },
  {
    title: 'Citrus Berry Spritzer',
    price: '$12',
    tags: 'A vibrant mix of muddled strawberries, raspberries, and orange slices, topped with lemon-lime soda.',
  }
];

const awards = [
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
