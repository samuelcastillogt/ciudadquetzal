import { create } from 'zustand'
export interface IZustandStore{
    bussiness: any[]
}
export const setBussiness = ()=>{}
export const useStore = create((set) => ({
    business : []
}))