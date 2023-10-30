import { Choice } from "@/lib/types";
import { create } from "zustand";

interface State {
    partyType: "normal"|"bonus"|null;
    playerChoice: Choice|null;
    homeChoice: Choice|null;
    winner: "player"|"home"|"tie"|null;
    isSameChoice: boolean;
    score: number;
    homeScore: number;
}

interface Action {
    setPartyType: (type:State["partyType"]) => void;
    setPlayerChoice: (choice:Choice) => void;
    setHomeChoice: (homeChoice:Choice) => void;
    setWinner: (winner:State["winner"]) => void;
    setIsSameChoice: (isSameChoice:boolean) => void;
    addScore: () => void;
    addHomeScore: () => void;
    resetParty: () => void;
    resetPage: () => void;
}

const initialState:State = {
    partyType: null,
    playerChoice: null,
    homeChoice: null,
    winner: null,
    isSameChoice: false,
    score: 0,
    homeScore: 0,
}

export const useParty = create<State>(
    set => ({
        ...initialState
    })
)

export const {
    setPartyType,
    setPlayerChoice,
    setHomeChoice,
    setWinner,
    setIsSameChoice,
    addScore,
    addHomeScore,
    resetParty,
    resetPage
}:Action = {
    setPartyType: (partyType) => useParty.setState({ partyType }),
    setPlayerChoice: (playerChoice) => useParty.setState({ playerChoice }),
    setHomeChoice: (homeChoice) => useParty.setState({ homeChoice }),
    setWinner: (winner) => useParty.setState({ winner }),
    setIsSameChoice: (isSameChoice) => useParty.setState({ isSameChoice }),
    addScore: () => useParty.setState(state => ({ score: state.score+1 })),
    addHomeScore: () => useParty.setState(state => ({ homeScore: state.homeScore+1 })),
    resetParty: () => useParty.setState(state => ({ ...initialState, score: state.score, homeScore: state.homeScore, partyType: state.partyType })),
    resetPage: () => useParty.setState({ ...initialState }),
}