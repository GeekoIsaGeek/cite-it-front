<script setup>
import Author from '@/components/news-feed/add-new-post-modal/TheAuthor.vue'
import TopPanel from '@/components/news-feed/add-new-post-modal/ModalTopPanel.vue'
import { onMounted, onBeforeUnmount } from 'vue'
import ModalTransition from '@/components/shared/ModalTransition.vue'
import FormWrapperTransition from '@/components/shared/FormWrapperTransition.vue'

onMounted(() => (document.body.style.overflow = 'hidden'))
onBeforeUnmount(() => (document.body.style.overflow = 'auto'))

defineProps({
  heading: {
    type: String,
    required: true
  },
  handleClose: {
    type: Function,
    required: true
  }
})
</script>

<template>
  <Teleport to="body">
    <ModalTransition>
      <div
        class="modal-bg-gradient fixed z-50 lg:z-auto top-0 lg:top-[86px] h-full left-0 w-full lg:min-h-max flex justify-center items-start"
      >
        <FormWrapperTransition>
          <div
            class="dialog bg-almostBlack overflow-y-scroll h-[100%] lg:h-[82%] text-white lg:rounded-xl min-h-max w-full md:w-[50vw] lg:mt-5 pb-[50px] lg:pb-10 py-10"
          >
            <TopPanel :heading="heading" :handleClose="handleClose" />
            <div class="px-8">
              <Author class="mb-8" />

              <slot />
            </div>
          </div>
        </FormWrapperTransition>
      </div>
    </ModalTransition>
  </Teleport>
</template>
