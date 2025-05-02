import {create} from 'zustand';

type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

type CartState = {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    clear: () => void;
}

export const useCart = create<CartState>((set) => ({
    items: [],
    addItem: (item) => set((state) => ({
        items: [...state.items, item]
    })),
    removeItem: (id) => set((state) => ({
        items: state.items.filter((item) => item.id !== id)
    })),
    clear: () => set({ items: []})
}));