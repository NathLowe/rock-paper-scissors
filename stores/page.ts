import { create } from "zustand";

interface State {
    page: "home"|"party";
}

interface Action {
    setPage: (type:State["page"]) => void;
}

const initialState:State = {
    page: "home",
}

export const usePage = create<State>(
    set => ({
        ...initialState
    })
)

export const {
    setPage,
}:Action = {
    setPage: (page) => usePage.setState({ page }),
}