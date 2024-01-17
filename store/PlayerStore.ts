import { defineStore } from "pinia";
import { match } from "~/utils/match";

export type Player = "human" | "computer";

export type PlayerState = {
  players: [Player, "computer"] | [];
  playersShapes: Shape[];
};

export const usePlayerStore = defineStore("player", {
  state: (): PlayerState => ({
    players: [],
    playersShapes: [],
  }),
  getters: {
    winnerIndex: ({ players, playersShapes }) => {
      if (players.length && players.every((_, i) => !!playersShapes[i])) {
        const result = match(playersShapes[0], playersShapes[1]);
        if (result === "win") return 0;
        if (result === "lose") return 1;
        if (result === "tie") return false;
      }
      return null;
    },
    isAllComputer: ({ players }) =>
      players.every((player) => player === "computer"),
  },
  actions: {
    restartGame() {
      this.playersShapes = [];
    },
    exit() {
      this.players = [];
      this.playersShapes = [];
    },
  },
  persist: true,
});
