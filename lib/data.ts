import { Choice } from "./types";

export const NORMAL_CHOICES:Choice[] = ["paper","rock","scissors"]
export const ALL_CHOICES:Choice[] = [...NORMAL_CHOICES,"lizard","spock"]

export const WINNERS:{
    [x in Choice]: Choice[]
} = {
    "scissors": ["paper","lizard"],
    "paper": ["rock","spock"],
    "rock": ["lizard","scissors"],
    "lizard": ["paper","spock"],
    "spock": ["scissors","rock"],
}
export const checkWinner = (player: Choice, home: Choice) => {
    if(WINNERS[player].includes(home)) return "player"
    if(WINNERS[home].includes(player)) return "home"
    return "tie"
}