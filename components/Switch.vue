<script setup lang="ts">
defineProps<{ checked?: boolean; onChange: (evt: Event) => void }>();
</script>

<template>
  <label class="switch">
    <input type="checkbox" :checked="checked" @input="onChange" />
    <span class="switch-inner-wrapper">
      <span class="switch-inner"></span>
    </span>
  </label>
</template>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.switch-inner-wrapper {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

.switch-inner {
  position: absolute;
  width: 26px;
  height: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: all 0.2s ease;
}

input:checked + .switch-inner-wrapper {
  background-color: var(--blueLight);
}

input:focus + .switch-inner-wrapper {
  box-shadow: 0 0 1px var(--blueLight);
}

input:checked + .switch-inner-wrapper .switch-inner {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.switch-inner-wrapper {
  border-radius: 99999px;
}

.switch-inner {
  border-radius: 50%;
}
</style>
