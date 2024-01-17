<script setup lang="ts">
import { usePlayerStore } from "~/store/PlayerStore";

const playerStore = usePlayerStore();

const winner = computed(
  () =>
    typeof playerStore.winnerIndex === "number" &&
    playerStore.players[playerStore.winnerIndex]
);
</script>

<template>
  <div v-if="winner !== null && playerStore.winnerIndex !== null" class="col">
    <h2>
      {{
        winner === "human"
          ? "You win!"
          : winner === "computer"
            ? `Computer (player ${+playerStore.winnerIndex + 1}) wins!`
            : "Tie!"
      }}
    </h2>
    <button
      type="button"
      :style="{ marginTop: '10px' }"
      @click="() => playerStore.restartGame()"
    >
      Restart
    </button>
  </div>
</template>
