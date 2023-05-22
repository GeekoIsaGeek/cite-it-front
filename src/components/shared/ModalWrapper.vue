<template>
  <Teleport to="body">
    <div
      class="fixed top-0 left-0 w-full h-screen bg-semiOpaqueBlack backdrop-blur-sm flex justify-center items-center"
    >
      <slot />
    </div>
  </Teleport>
</template>
