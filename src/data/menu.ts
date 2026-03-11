export interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 'lamb-barbacoa-1kg',
    title: 'Lamb Barbacoa 1kg',
    description:
      'Lean meat: shoulder, ribs, loin, or mixed. Includes: corn tortillas, 4 sodas, onion, cilantro, lemons, spicy hot sauce and 1 liter of consomme.',
    price: '98.00',
    image: '/assets/AntijotosElRincondelMexicano_LambBarbacoa_1Kg.webp',
    category: 'Barbacoa',
  },
  {
    id: 'lamb-barbacoa-3-4kg',
    title: 'Lamb Barbacoa 3/4kg',
    description:
      'Lean meat: shoulder, ribs, loin, or mixed. Includes: corn tortillas, 3 sodas, onion, cilantro, lemons, spicy hot sauce and 3/4 liter of consomme.',
    price: '80.00',
    image: '/assets/AntijotosElRincondelMexicano_LambBarbacoa_1Kg.webp',
    category: 'Barbacoa',
  },
  {
    id: 'lamb-barbacoa-1-2kg',
    title: 'Lamb Barbacoa 1/2kg',
    description:
      'Lean meat: shoulder, ribs, loin, or mixed. Includes: corn tortillas, 2 sodas, onion, cilantro, lemons, spicy hot sauce and 1/2 liter of consomme.',
    price: '55.00',
    image: '/assets/AntijotosElRincondelMexicano_LambBarbacoa_1Kg.webp',
    category: 'Barbacoa',
  },
  {
    id: 'lamb-barbacoa-1-4kg',
    title: 'Lamb Barbacoa 1/4kg',
    description:
      'Lean meat: shoulder, ribs, loin, or mixed. Includes: corn tortillas, 1 soda, onion, cilantro, lemons, spicy hot sauce.',
    price: '30.00',
    image: '/assets/AntijotosElRincondelMexicano_LambBarbacoa_1Kg.webp',
    category: 'Barbacoa',
  },
  {
    id: 'lamb-consomme-1l',
    title: 'Lamb Consomme 1 liter',
    description: 'Includes: onion, cilantro, lemons.',
    price: '22.00',
    image: '/assets/AntijotosElRincondelMexicano_LambBarbacoaConsomme__5L.webp',
    category: 'Consomme',
  },
  {
    id: 'lamb-consomme-1-2l',
    title: 'Lamb Consomme 1/2 liter',
    description: 'Includes: onion, cilantro, lemon.',
    price: '11.00',
    image: '/assets/AntijotosElRincondelMexicano_LambBarbacoaConsomme__5L.webp',
    category: 'Consomme',
  },
  {
    id: 'lunch-tacos-lamb-barbacoa-3pc',
    title: 'Lunch Tacos (3) Lamb Barbacoa',
    description:
      '3 tacos of lamb barbacoa. Choice of lean meat, shoulder, ribs, loin, or mixed. Includes: 1 soda, onion, cilantro, lemons, hot sauce and small consomme.',
    price: '30.00',
    image: '/assets/AntijotosElRincondelMexicano_LunchTacosLamb_3pc.webp',
    category: 'Lunch',
  },
  {
    id: 'huaraches-simple-plain',
    title: 'Huarache Simple / Plain',
    description:
      '32 cm oval corn tortilla, crispy with refried beans, onion, fresh lettuce, fresh cheese, cream and hot green sauce or pasilla.',
    price: '15.00',
    image: '/assets/AntijotosElRincondelMexicano_HuarachesPlain.webp',
    category: 'Huaraches',
  },
  {
    id: 'huaraches-with-rib',
    title: 'Huaraches with Rib',
    description:
      '32 cm oval corn tortilla, crispy with refried beans, onion, fresh lettuce, fresh cheese, cream, beef rib and hot green sauce or pasilla. Includes 1 soda.',
    price: '25.00',
    image: '/assets/AntijotosElRincondelMexicano_HuarachesWithRib.webp',
    category: 'Huaraches',
  },
  {
    id: 'huaraches-with-pork-chop',
    title: 'Huaraches with Pork Chop',
    description:
      '32 cm oval corn tortilla, crispy with refried beans, onion, fresh lettuce, fresh cheese, cream, pork chop and hot green sauce or pasilla. Includes 1 soda.',
    price: '21.00',
    image: '/assets/AntijotosElRincondelMexicano_HuarachesWithPorkChop.webp',
    category: 'Huaraches',
  },
  {
    id: 'huaraches-with-chorizo',
    title: 'Huaraches with Chorizo',
    description:
      '32 cm oval corn tortilla, crispy with refried beans, onion, fresh lettuce, fresh cheese, cream, chorizo and hot green sauce or pasilla. Includes 1 soda.',
    price: '20.00',
    image: '/assets/AntijotosElRincondelMexicano_HuarachesWithChorizo.webp',
    category: 'Huaraches',
  },
  {
    id: 'huaraches-with-eggs',
    title: 'Huaraches with Eggs',
    description:
      '32 cm oval corn tortilla, crispy with refried beans, onion, fresh lettuce, fresh cheese, cream, scrambled eggs and hot green sauce or pasilla. Includes 1 soda.',
    price: '18.00',
    image: '/assets/AntijotosElRincondelMexicano_HuarachesWithEgg.webp',
    category: 'Huaraches',
  },
  {
    id: 'huaraches-with-melted-cheese',
    title: 'Huaraches with Melted Cheese',
    description:
      '32 cm oval corn tortilla with refried beans, onion, fresh lettuce, fresh cheese, cream and melted cheese. Includes 1 soda.',
    price: '18.00',
    image: '/assets/AntijotosElRincondelMexicano_HuarachesWithMeltedCheese.webp',
    category: 'Huaraches',
  },
  {
    id: 'pork-carnitas-1kg',
    title: 'Pork Carnitas 1kg',
    description:
      'Choice of lean meat, skin, stomach, ribs, pork belly or mixed. Includes: corn tortillas, 4 sodas, 1/2 refried beans, lemons, onion, cilantro, spicy hot sauce.',
    price: '70.00',
    image: '/assets/AntijotosElRincondelMexicano_PorkCanitas_1Kg.webp',
    category: 'Pork Carnitas',
  },
  {
    id: 'pork-carnitas-3-4kg',
    title: 'Pork Carnitas 3/4kg',
    description:
      'Choice of lean meat, skin, stomach, ribs, pork belly or mixed. Includes: corn tortillas, 3 sodas, 1/2 refried beans, lemons, onion, cilantro, spicy hot sauce.',
    price: '55.00',
    image: '/assets/AntijotosElRincondelMexicano_PorkCanitas_1Kg.webp',
    category: 'Pork Carnitas',
  },
  {
    id: 'pork-carnitas-1-2kg',
    title: 'Pork Carnitas 1/2kg',
    description:
      'Choice of lean meat, skin, stomach, ribs, pork belly or mixed. Includes: corn tortillas, 2 sodas, lemons, onion, cilantro, spicy hot sauce.',
    price: '40.00',
    image: '/assets/AntijotosElRincondelMexicano_PorkCanitas_1Kg.webp',
    category: 'Pork Carnitas',
  },
  {
    id: 'pork-carnitas-1-4kg',
    title: 'Pork Carnitas 1/4kg',
    description:
      'Choice of lean meat, skin, stomach, ribs, pork belly or mixed. Includes: corn tortillas, 1 soda, lemon, onion, cilantro, spicy hot sauce.',
    price: '20.00',
    image: '/assets/AntijotosElRincondelMexicano_PorkCanitas_1Kg.webp',
    category: 'Pork Carnitas',
  },
  {
    id: 'lunch-tacos-pork-carnitas-4pc',
    title: 'Lunch Tacos (4) Pork Carnitas',
    description:
      '4 tacos of pork carnitas. Choice of lean meat, skin, stomach, ribs, pork belly or mixed. Includes: 1 soda, lemon, onion, cilantro, spicy hot sauce.',
    price: '25.00',
    image: '/assets/AntijotosElRincondelMexicano_LunchTacosCarnitas_4pc.webp',
    category: 'Pork Carnitas',
  },
  {
    id: 'lunch-gorditas-pork-carnitas-3pc',
    title: 'Lunch Gorditas (3) Pork Carnitas',
    description:
      '3 delicious gorditas filled with pork carnitas. Includes: 1 soda, lemon, onion, cilantro, spicy hot sauce.',
    price: '25.00',
    image: '/assets/AntijotosElRincondelMexicano_LunchGorditas_3Pc.webp',
    category: 'Pork Carnitas',
  },
  {
    id: 'lunch-torta-pork-carnitas',
    title: 'Lunch Torta Pork Carnitas',
    description:
      'Sponge bread roll filled with pork carnitas. Includes: 1 soda, lemon, onion, cilantro, spicy hot sauce.',
    price: '30.00',
    image: '/assets/Lunch-Torta-Pork-Carnitas.webp',
    category: 'Pork Carnitas',
  },
  {
    id: 'tlacoyos-3pc',
    title: 'Tlacoyos',
    description:
      'Bag with 3 tlacoyos stuffed with beans or potatoes or fresh cheese, sealed in a vacuum to prepare them at home.',
    price: '12.00',
    image: '/assets/AntijotosElRincondelMexicano_Tlacoyos_3pc.webp',
    category: 'Tlacoyos',
  },
  {
    id: 'grilled-platter-cdmx',
    title: 'Grilled platter style CDMX',
    description:
      'Onion, bell pepper, chorizo, beef steak, bacon, pineapple, ham and melted cheese. Includes: 1 soda, corn tortillas. For 1 or 2 people.',
    price: '30.00',
    image: '/assets/AntijotosElRincondelMexicano_GrilledPlatterCDMX.webp',
    category: 'Grilled Platter CDMX',
  },
  {
    id: 'tres-leches-cake',
    title: 'Tres leches Cake',
    description:
      'Exquisite and juicy individual cake of milks (vanilla or chocolate) filled with walnut and peach.',
    price: '12.00',
    image: '/assets/AntijotosElRincondelMexicano_TresLechesCake.webp',
    category: 'Desserts',
  },
  {
    id: 'cheesecake',
    title: 'Cheesecake',
    description: 'Delicious traditional and artisanal cheesecake.',
    price: '12.00',
    image: '/assets/AntijotosElRincondelMexicano_ChurrisCake.webp',
    category: 'Desserts',
  },
  {
    id: 'choco-flan',
    title: 'Choco flan',
    description:
      'Delicious chocoflan, half bread and half neapolitan flan with an incomparable flavor.',
    price: '12.00',
    image: '/assets/AntijotosElRincondelMexicano_ChocoFlan.webp',
    category: 'Desserts',
  },
  {
    id: 'cornbread',
    title: 'Cornbread',
    description: 'Delicious traditional and artisanal cornbread.',
    price: '12.00',
    image: '/assets/AntijotosElRincondelMexicano_CornBread.webp',
    category: 'Desserts',
  },
  {
    id: 'conchas',
    title: 'Traditional Mexican Conchas',
    description: 'Traditional Mexican vanilla bread (2 pieces).',
    price: '15.00',
    image: '/assets/AntijotosElRincondelMexicano_Conchas.webp',
    category: 'Desserts',
  },
  {
    id: 'coca-cola',
    title: 'Coca-Cola',
    description: '',
    price: '3.00',
    image: '/assets/Coca-Cola-2_25-L-Bottle.webp',
    category: 'Drinks',
  },
  {
    id: 'coca-cola-zero',
    title: 'Coca-Cola Zero',
    description: '',
    price: '3.00',
    image: '/assets/Coca-cola-zero.webp',
    category: 'Drinks',
  },
  {
    id: 'canada-dry',
    title: 'Canada Dry',
    description: '',
    price: '3.00',
    image: '/assets/CanadaDry-GingerAle.webp',
    category: 'Drinks',
  },
  {
    id: 'horchata-drink',
    title: 'Horchata',
    description: '',
    price: '8.00',
    image: '/assets/AntijotosElRincondelMexicano_Horchata.webp',
    category: 'Drinks',
  },
  {
    id: 'hibiscus-water',
    title: 'Hibiscus Water',
    description: '',
    price: '8.00',
    image: '/assets/AntijotosElRincondelMexicano_HibiscusWater.webp',
    category: 'Drinks',
  },
];

export const categories = [
  'All',
  'Barbacoa',
  'Consomme',
  'Lunch',
  'Huaraches',
  'Tlacoyos',
  'Pork Carnitas',
  'Grilled Platter CDMX',
  'Desserts',
  'Drinks',
];
