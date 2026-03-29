<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import FeedbackDialogHeader from './FeedbackDialogHeader.vue'
import FeedbackDialogBody from './FeedbackDialogBody.vue'
</script>

<template>
  <div
        class="inline"
        data-component-id="feedback-dialog"
      >
        <dialog
          id="feedback-dialog"
          aria-labelledby="feedback-dialog-title"
          aria-describedby="feedback-dialog-description"
          class="bg-white w-0 h-0 min-w-0 min-h-0 max-w-0 max-h-0 hidden flex-col m-auto rounded-br-[12px] rounded-t-[12px] rounded-bl-[12px] inset-0"
        >
          <FeedbackDialogHeader />
          <FeedbackDialogBody />
          <div class="z-[1] flex flex-wrap shrink-0 justify-end gap-y-2 gap-x-2 pb-4 px-4">
            <Button variant="secondary" type="button" size="sm" class="border border-[#d1d9e0] bg-muted text-[#25292e] hover:bg-[#eaeef2]">
              Cancel
            </Button>
            <Button variant="success" type="submit" size="sm">
              Submit feedback
            </Button>
          </div>
        </dialog>
      </div>
</template>
