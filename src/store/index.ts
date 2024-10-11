import { create } from 'zustand'

export const useStore = create((set) => ({
  busines: [],
  categories: [],
  posts: [],
  setPosts: (data:any[]) => set((state:any) => ({ posts: data})),
  setCategories: (data:string[]) => set((state:any) => ({ categories: data})),
  setBusines: (data:any[]) => set((state:any) => ({ busines: data})),
}))
