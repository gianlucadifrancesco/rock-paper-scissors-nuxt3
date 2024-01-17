<script setup lang="ts">
import { usePlayerStore } from "~/store/PlayerStore";

const props = defineProps<{
  playerIndex: number;
  onConfirm: (playerIndex: number, confirmedShape: Shape) => void;
  delay?: number;
}>();

const shapes = useShapes();
const playersStore = usePlayerStore();
const activeShapeIdx = ref(0);
const canConfirm = ref(!props.delay);
const activeShape = computed(() => shapes[activeShapeIdx.value]);
const confirmedShape = computed(
  () => playersStore.playersShapes[props.playerIndex]
);
let placeholderShapeInterval: ReturnType<typeof setInterval>;

// Add delay for computer vs computer
watchEffect((onCleanup) => {
  if (!playersStore.playersShapes[props.playerIndex]) {
    canConfirm.value = false;
    const confirmTimeout = setTimeout(
      () => (canConfirm.value = true),
      props.delay || 0
    );
    onCleanup(() => {
      if (playersStore.playersShapes.length) clearTimeout(confirmTimeout);
    });
  }
});

watchEffect(() => {});

watchEffect((onCleanup) => {
  if (
    canConfirm.value &&
    playersStore.players.every(
      (player, i) => player === "computer" || !!playersStore.playersShapes[i]
    )
  ) {
    clearInterval(placeholderShapeInterval);
    props.onConfirm(props.playerIndex, getRandomShape());
  } else {
    placeholderShapeInterval = setInterval(() => {
      activeShapeIdx.value = (activeShapeIdx.value + 1) % shapes.length;
    }, 150);
    onCleanup(() => clearInterval(placeholderShapeInterval));
  }
});

const playerName = computed(() => `Computer (player ${props.playerIndex + 1})`);
</script>

<template>
  <div class="col">
    <div v-if="!confirmedShape" class="col">
      <p>
        <b>{{ playerName }} is choosing...</b>
      </p>
      {{ emojis[activeShape] }}
    </div>
    <div v-else class="col" :style="{ textAlign: 'center' }">
      <p>{{ playerName }} played</p>
      <b>{{ emojis[confirmedShape] }} {{ capitalize(confirmedShape) }}</b>
    </div>
  </div>
</template>
