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
    title: "Virgin Piña Colada",
    price: '$12',
    tags: 'Coconut cream and fresh pineapple juiced, garnished with a slice of pineapple',
  },
  {
    title: 'Mango Mule',
    price: '$10',
    tags: 'Ripe mango accompanied by zesty notes of alcohol-free ginger beer',
  },
  {
    title: 'Rasberry Lime Rickey',
    price: '$10',
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
    tags: 'A vibrant mix of muddled strawberries, raspberries, and orange slices, topped with lemon-lime soda',
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

const FullMenu = [
  {
    name: "Amuse-Bouche: Tomato Consommé Sphere",
    description: "A clear tomato consommé encapsulated in a delicate gel sphere, served with a micro basil leaf and a hint of smoked sea salt.",
  },
  {
    name: "First Course: Heirloom Beet Tartare",
    description: "Finely diced heirloom beets, dressed with a mustard vinaigrette, topped with a quail egg mimosa made from vegan ingredients, and served with crispy sourdough shards.",
  },
  {
    name: "Second Course: Asparagus and Edamame Salad",
    description: "Tender asparagus tips and edamame, tossed in a yuzu dressing, garnished with sesame seeds and edible flowers.",
  },
  {
    name: "Third Course: Truffled Cauliflower Velouté",
    description: "Silky cauliflower soup infused with black truffle oil, garnished with pickled cauliflower florets and chive oil.",
  },
  {
    name: "Fourth Course: Charred Carrot Ravioli",
    description: "Handmade carrot-stuffed ravioli served in a carrot-ginger beurre blanc, topped with crispy carrot tops.",
  },
  {
    name: "Fifth Course: Wild Mushroom and Polenta",
    description: "Creamy truffle polenta topped with sautéed wild mushrooms, crispy shallots, and a drizzle of thyme jus.",
  },
  {
    name: "Sixth Course: Smoked Eggplant Mille-Feuille",
    description: "Thin layers of smoked eggplant and zucchini, stacked with cashew ricotta and sundried tomato pesto, finished with a balsamic glaze.",
  },
  {
    name: "Seventh Course: Palate Cleanser – Cucumber Lime Granita",
    description: "A refreshing granita made from cucumber juice, lime, and a hint of mint, served in a chilled martini glass.",
  },
  {
    name: "Eighth Course: Sweetcorn Risotto",
    description: "Creamy sweetcorn risotto with charred corn kernels, parmesan crisps, and a hint of chili oil.",
  },
  {
    name: "Ninth Course: Stuffed Squash Blossom",
    description: "Delicate squash blossoms filled with herbed ricotta and lightly fried, served with a tomato coulis and a drizzle of basil oil.",
  },
  {
    name: "Tenth Course: Roasted Baby Vegetables",
    description: "A medley of roasted baby vegetables (carrots, parsnips, and turnips), glazed with miso butter and topped with puffed quinoa for crunch.",
  },
  {
    name: "Dessert: Chocolate Avocado Mousse",
    description: "A velvety avocado-based chocolate mousse served with a hazelnut crumble, passionfruit gel, and gold leaf garnish.",
  },
];


export default { wines, cocktails, awards, FullMenu };
