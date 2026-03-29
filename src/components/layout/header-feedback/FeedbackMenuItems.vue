<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import FeedbackLinkGithub from './FeedbackLinkGithub.vue'
import FeedbackDropdownPanel from './FeedbackDropdownPanel.vue'
</script>

<template>
  <div
        class=""
        data-component-id="feedback-menu-items"
      >
        <div class="inline">
          <dialog
            id="custom-scopes-dialog"
            aria-labelledby="custom-scopes-dialog-title"
            aria-describedby="custom-scopes-dialog-description"
            class="bg-white w-0 h-0 min-w-0 min-h-0 max-w-0 max-h-0 hidden flex-col m-auto rounded-br-[12px] rounded-t-[12px] rounded-bl-[12px] inset-0"
          >
            <FeedbackLinkGithub />
            <FeedbackDropdownPanel />
            <div class="z-[1] flex flex-wrap shrink-0 justify-end gap-y-2 gap-x-2 shadow-[rgb(209,217,224)_0px_1px_0px_0px_inset] p-4">
              <Button variant="secondary" type="button" size="sm" class="border border-[#d1d9e0] bg-muted text-[#25292e] hover:bg-[#eaeef2]">
                Cancel
              </Button>
              <Button variant="success" type="submit" size="sm">
                Create saved search
              </Button>
            </div>
          </dialog>
        </div>
      </div>
</template>
