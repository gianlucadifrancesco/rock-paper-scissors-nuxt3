<script setup lang="ts">
import { usePlayerStore } from "~/store/PlayerStore";

const playersStore = usePlayerStore();
</script>

<template>
  <div class="col" :style="{ alignItems: 'flex-start' }">
    <p
      v-for="(shape, i) in playersStore.playersShapes"
      :key="i"
      :style="{ margin: '0', marginBottom: '10px' }"
    >
      - Player {{ i + 1 }} ({{
        playersStore.players[i] === "human" ? "You" : "Computer"
      }}) played{{ " " }}
      <b> {{ emojis[shape] }} {{ capitalize(shape) }} </b>
    </p>
  </div>
</template>
