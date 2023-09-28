import { create } from 'zustand'

type State = {
  isOpen: boolean
}

type Actions = {
  openModal: (value: boolean) => void
  closeModal: (value: boolean) => void
}

export const useStoresStore = create<State & Actions>((set) => ({
  isOpen: false,
  openModal: (value: boolean) => { set(() => ({ isOpen: value })) },
  closeModal: (value: boolean) => { set(() => ({ isOpen: value })) }
}))
