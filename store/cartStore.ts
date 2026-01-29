import {create} from 'zustand';
import { Pet } from '@/types/pet';


type CartState = {
    cart: Pet[];
    addToCart: (pet: Pet) => void;
    removeFromCart: (petId: string) => void;
    getTotal: () => number;
};
 


export const useCartStore = create<CartState>((set, get) => ({
  cart: [],

  addToCart: (pet) =>
    set((state) => {
      const exists = state.cart.find((p) => p.id === pet.id);
      if (exists){
        return state;
      }
      return {cart: [...state.cart, pet]};
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((p) => p.id !== id),
    })),
  getTotal: () => {
    return get().cart.reduce((sum, item) => sum + item.price, 0);
  }
}));
