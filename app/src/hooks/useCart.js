import { create } from "zustand";


const useCart = create((set) => ({
    cart: [],
    addToCart: (products) => (set((item) => {
        return { cart: [...item.cart, products] }
    }))
}))

export default useCart