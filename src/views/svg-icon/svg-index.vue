<template>
  <div class="SvgIconIndex">
    <svg-icon icon="exit-fullscreen" />
    <svg-icon icon="fullscreen" />
    <svg-icon icon="guide" /> <svg-icon icon="password"></svg-icon>
    <svg-icon icon="user"></svg-icon>
    <svg-icon icon="eye"></svg-icon>
    <svg-icon icon="eye-open"></svg-icon>
    <svg-icon icon="reward" />
    <svg-icon icon="hamburger-opened"></svg-icon>
    <svg-icon icon="hamburger-closed"></svg-icon>
    <svg-icon class-name="search-icon" icon="search" />
    <svg-icon icon="language" />
    <svg-icon icon="change-theme" />
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.SvgIconIndex {
  display: flex;
  margin: 10px;
  :deep(.svg-icon) {
    margin: 10px;
  }
}
</style>
