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
];

export const categories = ['All', 'Barbacoa', 'Consomme', 'Lunch', 'Huaraches'];
