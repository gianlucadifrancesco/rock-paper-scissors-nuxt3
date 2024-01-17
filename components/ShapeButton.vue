<script setup lang="ts">
import type { ButtonHTMLAttributes } from "vue";

interface ShapeButtonProps
  extends /* @vue-ignore */ Omit<ButtonHTMLAttributes, "onClick"> {
  shape: Shape;
  isActive?: boolean;
  onClick: (shape: Shape) => void;
}

const props = defineProps<ShapeButtonProps>();
</script>

<template>
  <button
    :style="{
      textTransform: 'capitalize',
      ...(isActive && { outline: '4px auto #fafafefa' }),
    }"
    v-bind="{
      ...props,
      isActive: undefined,
      shape: undefined,
      onClick: undefined,
    }"
    :type="props.type || 'button'"
    @click="() => onClick(shape)"
  >
    {{ emojis[shape] }} {{ capitalize(shape) }}
  </button>
</template>
