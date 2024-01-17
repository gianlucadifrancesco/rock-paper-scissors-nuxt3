<script setup lang="ts">
import { usePlayerStore } from "~/store/PlayerStore";

const route = useRoute();
const router = useRouter();
const playerStore = usePlayerStore();
const loaded = ref(false);

watchEffect(() => router.isReady().then(() => (loaded.value = true)));
</script>

<template>
  <div v-if="loaded" :style="{ padding: '50px' }">
    <Game v-if="playerStore.players?.length" />
    <div v-else class="col" :style="{ width: '100%' }">
      <h1 :style="{ textAlign: 'center' }">
        {{
          route.query.mode === "advanced"
            ? "Rock Paper Scissors Spock Lizard 🪨📃✂️🖖🦎"
            : "Rock Paper Scissors 🪨📃✂️"
        }}
      </h1>

      <div :style="{ marginBottom: '30px' }">
        <ModeSelector />
      </div>

      <div class="col" :style="{ gap: '10px' }">
        <button
          type="button"
          @click="() => (playerStore.players = ['human', 'computer'])"
        >
          Play against the Computer
        </button>
        <button
          type="button"
          @click="() => (playerStore.players = ['computer', 'computer'])"
        >
          Computer vs Computer
        </button>
      </div>
    </div>
  </div>
</template>
