import {create} from 'zustand';
import { Pet } from '@/types/pet';


type CartState = {
    cart: Pet[];
    addToCart: (pet: Pet) => void;
    removeFromCart: (petId: string) => void;
};
 


export const useCartStore = create<CartState>((set) => ({
  cart: [],

  addToCart: (pet) =>
    set((state) => ({
      cart: [...state.cart, pet],
    })),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((p) => p.id !== id),
    })),
}));
