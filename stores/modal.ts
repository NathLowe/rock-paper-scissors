import { create } from "zustand";

interface State {
    isModalOpen: boolean;
}

interface Action {
    openModal: () => void;
    closeModal: () => void;
}

const initialState:State = {
    isModalOpen: false,
}

export const useModal = create<State>(
    set => ({
        ...initialState
    })
)

export const {
    openModal, closeModal
}:Action = {
    openModal: () => useModal.setState({ isModalOpen: true }),
    closeModal: () => useModal.setState({ isModalOpen: false }),
}