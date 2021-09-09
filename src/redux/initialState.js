import hamster from '../images/hamster.svg';
import battery from '../images/battery.svg';
import duck from '../images/duck.svg';
import bubbles from '../images/bubbles.svg';
import magnet from '../images/magnet.svg';
import umbrella from '../images/umbrella.svg';

export const initialState = {
  darkMode: true,
  api: {
    saved: false,
    loading: {
      active: false,
      error: false,
    }
  },
  user: {
    logged: false,
    id: '',
    name: '',
    email: '',
    loading: {
      active: false,
      error: false,
    }
  },
  points: {
    points: 0,
    pointsPerSec: 0,
    total: 0,
  },
  shop: [
    {id: 1, image: hamster, price: 10, pointsPerSec: 1, newPrice: 4, name: 'Hamster', count: 0},
    {id: 2, image: battery, price: 200, pointsPerSec: 5, newPrice: 70, name: 'Battery', count: 0},
    {id: 3, image: duck, price: 12000, pointsPerSec: 25, newPrice: 3000, name: 'Duck', count: 0},
    {id: 4, image: bubbles, price: 50000, pointsPerSec: 120, newPrice: 15500, name: 'Soap bubbles', count: 0},
    {id: 5, image: magnet, price: 100000, pointsPerSec: 180, newPrice: 50000, name: 'Magnet', count: 0},
    {id: 6, image: umbrella, price: 1000000, pointsPerSec: 250, newPrice: 180000, name: 'Umbrella', count: 0}
  ],
  achievements: {
    requiredPoints: [
      {id: 1, seen: false, required: 100, unlocked: false, description: 'You have earned 100 dogecoins!'},
      {id: 2, seen: false, required: 2000, unlocked: false, description: 'You have earned 2,000 dogecoins!'},
      {id: 3, seen: false, required: 10000, unlocked: false, description: 'You have earned 10,000 dogecoins!'},
      {id: 4, seen: false, required: 20000, unlocked: false, description: 'You have earned 20,000 dogecoins!'},
      {id: 5, seen: false, required: 30000, unlocked: false, description: 'You have earned 30,000 dogecoins!'}
    ],
    requiredPointsPerSec: [
      {id: 1, seen: false, required: 10, unlocked: false, description: 'You have reached 10 dogecoins per second!'},
      {id: 2, seen: false, required: 25, unlocked: false, description: 'You have reached 25 dogecoins per second!'},
      {id: 3, seen: false, required: 50, unlocked: false, description: 'You have reached 50 dogecoins per second!'},
      {id: 4, seen: false, required: 100, unlocked: false, description: 'You have reached 100 dogecoins per second!'},
      {id: 5, seen: false, required: 200, unlocked: false, description: 'You have reached 200 dogecoins per second!'}
    ]
  }
};
