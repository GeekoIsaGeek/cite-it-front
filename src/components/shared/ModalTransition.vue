<script setup></script>

<template>
  <Transition appear enter-from-class="opacity-0" enter-active-class="transition-opacity duration-500 ease-in-out">
    <slot />
  </Transition>
</template>
