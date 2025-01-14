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
    title: 'Raspberry Lime Rickey',
    price: '$10',
    tags: 'Freshly picked raspberries mixed with lime juice and soda water',
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
    title: 'Michelin Star',
    subtitle: 'Award for exceptional culinary quality and innovation.',
  },
  {
    imgUrl: images.award02,
    title: 'James Beard Award',
    subtitle: 'Recognizes culinary excellence in the U.S.',
  },
  {
    imgUrl: images.award03,
    title: 'World’s 50 Best Restaurants',
    subtitle: 'The world’s top dining experiences.',
  },
  
];


const FullMenu = [
  {
    name: "Amuse-Bouche: Tonburi and Pea Harmony",
    description: "A vibrant presentation of fresh peas and tonburi seeds (land caviar), served over ice. Complemented by crisp lettuce leaves adorned with thinly sliced vegetables.",
  },
  {
    name: "First Course: Tomato and Herb Mosaic",
    description: "A vibrant tartare of sun-ripened tomatoes, delicately seasoned and sprinkled with edible flowers and fresh herbs. Finished with crispy brioche crumbs and a hint of citrus essence for a perfect balance of texture and flavor.",
  },
  {
    name: "Second Course: Silken Tofu Mosaic",
    description: "Chilled silken tofu layered with basil oil, ponzu gel, and pickled cucumber ribbons, garnished with sesame seeds and edible flowers.",
  },
  {
    name: "Third Course: Truffled Cauliflower Velouté",
    description: "Silky cauliflower soup infused with black truffle oil, garnished with pickled cauliflower florets and a chive-basil drizzle.",
  },
  {
    name: "Fourth Course: Asparagus and Edamame Salad",
    description: "Tender asparagus tips and edamame tossed in a citrus-yuzu dressing, garnished with toasted sesame and black basil.",
  },
  {
    name: "Fifth Course: Charred Carrot Ravioli",
    description: "Handmade carrot-stuffed ravioli served in a carrot-ginger beurre blanc, topped with crispy carrot greens.",
  },
  {
    name: "Sixth Course: Smoked Tofu and Wild Mushroom Medley",
    description: "Smoked tofu cubes served with sautéed wild mushrooms, crispy shallots, and a thyme-infused soy reduction.",
  },
  {
    name: "Seventh Course: Palate Cleanser - Cucumber Lime Granita", 
    description: "A refreshing granita made from cucumber juice, lime, and a hint of mint, served in a chilled martini glass.",
  },
  {
    name: "Eighth Course: Sweetcorn Risotto",
    description: "Creamy sweetcorn risotto with charred corn kernels, parmesan crisps, and a drizzle of chili-infused black basil oil.",
  },
  {
    name: "Dessert: Noir Chocolate Mousse",
    description: "A velvety dark chocolate mousse, served with hazelnut crumble and edible gold leaf.",
  },
];


const TakeOut = [
  {
    name: "Grilled Vegetable & Halloumi Skewers",
    description: "A selection of colorful vegetables and rich halloumi cheese grilled to perfection, drizzled with a balsamic glaze and served with a side of herb-infused couscous.",
    price: 30.99,
    calories: '| 650 calories',
  },
  {
    name: "Wild Mushroom Risotto",
    description: "Creamy risotto made with a blend of wild mushrooms, finished with a touch of white truffle oil and grated parmesan for an earthy and luxurious flavor.",
    price: 29.99,
    calories: '| 800 calories',
  },
  {
    name: "Smoked Carrot & Beetroot Tartare",
    description: "A vibrant tartare of finely diced smoked carrots and roasted beets, complemented by a tangy mustard dressing and served with crispy black sesame crackers.",
    price: 25.75,
    calories: '| 500 calories',
  },
  {
    name: "Crispy Cauliflower Steak",
    description: "A golden-brown cauliflower steak, seasoned with turmeric and cumin, topped with a mint yogurt sauce and served with a side of sautéed spinach and roasted cherry tomatoes.",
    price: 20.49,
    calories: '| 550 calories',
  },
  {
    name: "Vegan Truffle Mac 'n' Cheese",
    description: "A rich, creamy vegan cheese sauce made with cashews and nutritional yeast, combined with al dente pasta and finished with a drizzle of black truffle oil.",
    price: 17.25,
    calories: '| 700 calories',
  },
  {
    name: "Lentil & Mushroom Wellington",
    description: "A vegetarian twist on the classic Wellington, featuring a savory lentil and wild mushroom filling wrapped in flaky puff pastry and served with a rich red wine reduction.",
    price: 26.99,
    calories: '| 850 calories',
  },
  {
    name: "Butternut Squash & Sage Ravioli",
    description: "Homemade ravioli filled with a smooth butternut squash and sage mixture, served in a brown butter sauce with toasted pine nuts and fresh parmesan.",
    price: 25.75,
    calories: '| 770 calories',
  },
  {
    name: "Mediterranean Harvest Bowl",
    description: "A layered bowl of lemon-herb quinoa, roasted red peppers, and spiced chickpeas, served with a side of warm pita bread.",
    price: 20.75,
    calories: '| 500 calories',
  }
];

const Dessert = [
  {
    name: "Vegan Chocolate Tart",
    description: "A decadent chocolate tart with a smooth, rich vegan chocolate filling in a crisp pastry shell, topped with fresh raspberries and a dusting of cocoa powder.",
    price: 15.75,
    calories: '| 500 calories',
  },
  {
    name: "Lemon & Lavender Panna Cotta",
    description: "A delicate panna cotta infused with lemon and lavender, served with a fresh berry compote and a hint of vanilla bean.",
    price: 19.95,
    calories: '| 600 calories',
  },
  {
    name: "Tiramisu with Vegan Mascarpone",
    description: "A creamy, indulgent tiramisu made with layers of espresso-soaked ladyfingers, a rich vegan mascarpone cream, and dusted with cocoa powder.",
    price: 20.25,
    calories: '| 500 calories',
  },
  {
    name: "Pistachio & Rosewater Baklava",
    description: "Flaky, buttery layers of phyllo dough filled with crushed pistachios and scented with rosewater, drizzled with honey syrup for a sweet, aromatic finish.",
    price: 20.25,
    calories: '450 calories',
  },
  {
    name: "Raspberry & Almond Frangipane Tart",
    description: "A buttery almond frangipane filling in a crisp pastry shell, topped with fresh raspberries and finished with a light dusting of powdered sugar.",
    price: 15.25,
    calories: '400 calories',
  },
  {
    name: "Chocolate & Hazelnut Mousse",
    description: "A rich and velvety chocolate mousse with a hint of hazelnut, topped with chopped hazelnuts and a drizzle of caramel sauce.",
    price: 16.49,
    calories: '450 calories',
  },
]


export default { wines, cocktails, awards, FullMenu, TakeOut, Dessert };
