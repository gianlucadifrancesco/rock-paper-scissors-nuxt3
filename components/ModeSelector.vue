<script setup lang="ts">
const router = useRouter();
const route = useRoute();

const isAdvancedMode = computed(() => route.query.mode === "advanced");
</script>

<template>
  <div class="col">
    <h2 :style="{ margin: '10px' }">Mode</h2>
    <div
      class="row"
      :style="{
        width: '500px',
        maxWidth: '80vw',
        gap: '20px',
        fontSize: '18px',
      }"
    >
      <div :style="{ flex: 1, textAlign: 'right' }">Normal</div>
      <div :style="{ display: 'flex', justifyContent: 'center' }">
        <Switch
          :checked="isAdvancedMode"
          :onChange="
            () =>
              router.push({
                query: { mode: isAdvancedMode ? undefined : 'advanced' },
              })
          "
        />
      </div>
      <div :style="{ flex: 1, textAlign: 'left' }">Advanced</div>
    </div>
  </div>
</template>
