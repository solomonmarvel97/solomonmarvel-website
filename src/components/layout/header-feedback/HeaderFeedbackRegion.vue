<script setup lang="ts">
import FeedbackDialog from './FeedbackDialog.vue'
import FeedbackMenuItems from './FeedbackMenuItems.vue'
</script>

<template>
  <div
        class="text-foreground"
        data-component-id="header-feedback-region"
      >
        <FeedbackDialog />
        <FeedbackMenuItems />
      </div>
</template>
