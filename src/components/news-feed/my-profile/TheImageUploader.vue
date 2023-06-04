<script setup>
import AvatarPlaceholder from '@/assets/images/Profile_avatar_placeholder_large.png'
</script>

<template>
  <div class="flex items-center flex-col gap-2">
    <div class="w-48 h-48 relative rounded-full overflow-hidden">
      <input
        type="file"
        accept=".jpg, .png, .webp"
        class="absolute scale-[2000%] top-1/3 opacity-0 cursor-pointer"
      />
      <img :src="AvatarPlaceholder" alt="avatar" class="rounded-full" />
    </div>
    <h3 class="text-xl">Upload new photo</h3>
  </div>
</template>
