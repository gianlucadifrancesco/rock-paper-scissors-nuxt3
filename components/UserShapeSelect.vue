<script setup lang="ts">
import { usePlayerStore } from "~/store/PlayerStore";

const props = defineProps<{
  playerIndex: number;
  onConfirm: (playerIndex: number, confirmedShape: Shape) => void;
}>();

const shapes = useShapes();
const playerStore = usePlayerStore();
const confirmedShape = computed(
  () => playerStore.playersShapes[props.playerIndex]
);
</script>

<template>
  <div>
    <div v-if="!confirmedShape" class="col">
      <p>
        <b>Select shape to play</b>
      </p>
      <div class="col" :style="{ gap: '10px' }">
        <ShapeButton
          v-for="shape in shapes"
          :key="shape"
          :shape="shape"
          :style="{ width: '150px', textAlign: 'left' }"
          @click="() => onConfirm(playerIndex, shape)"
        />
      </div>
    </div>
    <div v-else class="col" :style="{ textAlign: 'center' }">
      <p>You played</p>
      <b>{{ emojis[confirmedShape] }} {{ capitalize(confirmedShape) }}</b>
    </div>
  </div>
</template>
