<script setup lang="ts">
import { usePlayerStore } from "~/store/PlayerStore";

const route = useRoute();
const playerStore = usePlayerStore();

const onConfirmShape = (playerIndex: number, confirmedShape: Shape) => {
  playerStore.playersShapes[playerIndex] = confirmedShape;
};
</script>

<template>
  <div class="col" :style="{ width: '100%' }">
    <h2>
      {{
        $route.query.mode === "advanced"
          ? "Advanced Mode 🪨📃✂️🖖🦎"
          : "Normal Mode 🪨📃✂️"
      }}
      <hr />
    </h2>
    <button type="button" @click="() => playerStore.exit()">Exit</button>
    <h2>
      {{ playerStore.players[0] === "human" ? "You" : "Computer" }} vs Computer
    </h2>
    <div
      :style="{
        width: '800px',
        maxWidth: '100%',
        backgroundColor: '#ffffff10',
        padding: '20px',
        borderRadius: '40px',
      }"
    >
      <div
        class="row"
        :style="{
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '100px',
        }"
      >
        <div v-for="(player, i) in playerStore.players" :key="i">
          <UserShapeSelect
            v-if="player === 'human'"
            :player-index="i"
            :on-confirm="onConfirmShape"
          />
          <ComputerShapeSelect
            v-else
            :player-index="i"
            :on-confirm="onConfirmShape"
            :delay="playerStore.isAllComputer ? 1000 : undefined"
          />
        </div>
      </div>
      <div :style="{ marginTop: '30px' }">
        <Winner />
      </div>
    </div>
  </div>
</template>
