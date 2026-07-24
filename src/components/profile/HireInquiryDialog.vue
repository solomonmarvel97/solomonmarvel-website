<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import Button from '@/components/ui/Button.vue'
import { PhX, PhSpinner } from '@phosphor-icons/vue'

const props = defineProps<{
  open: boolean
  isDark: boolean
}>()

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const form = reactive({
  name: '',
  email: '',
  company: '',
  message: '',
  website: '',
})

const submitting = ref(false)
const errorMessage = ref('')
const success = ref(false)

watch(
  () => props.open,
  (open) => {
    if (open) {
      errorMessage.value = ''
      success.value = false
    }
  },
)

function close() {
  emit('update:open', false)
}

function onDialogOpen(v: boolean) {
  emit('update:open', v)
}

function inputClass() {
  return [
    'w-full rounded-lg border px-3 py-2 text-[13px] outline-none transition-colors',
    props.isDark
      ? 'border-[#2a2a28] bg-[#141412] text-[#e8e5de] placeholder:text-[#555] focus:border-[#555]'
      : 'border-[#e0ddd6] bg-[#faf9f6] text-[#1a1a1a] placeholder:text-[#aaa] focus:border-[#bbb]',
  ].join(' ')
}

function labelClass() {
  return [
    'mb-1.5 block text-[12px] font-medium',
    props.isDark ? 'text-[#c9c7c0]' : 'text-[#444]',
  ].join(' ')
}

async function onSubmit() {
  if (submitting.value) return

  errorMessage.value = ''
  submitting.value = true

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        company: form.company,
        message: form.message,
        website: form.website,
      }),
    })

    const data = (await res.json().catch(() => ({}))) as { error?: string; ok?: boolean }

    if (!res.ok) {
      errorMessage.value = data.error || 'Failed to send. Please try again.'
      return
    }

    success.value = true
    form.name = ''
    form.email = ''
    form.company = ''
    form.message = ''
    form.website = ''
  } catch {
    errorMessage.value = 'Network error. Please try again.'
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <Dialog :open="open" @update:open="onDialogOpen">
    <DialogContent :is-dark="isDark" :close-on-outside="false" @close="close">
      <div
        class="relative w-[min(92vw,440px)] max-h-[min(85vh,640px)] overflow-y-auto rounded-2xl shadow-2xl"
        :class="isDark ? 'bg-[#1a1a18] ring-1 ring-white/10' : 'bg-white ring-1 ring-black/10'"
      >
        <div
          class="sticky top-0 z-[1] flex items-start justify-between gap-3 border-b px-5 py-4"
          :class="isDark ? 'border-[#2a2a28]' : 'border-[#e8eaed]'"
        >
          <div class="min-w-0 pr-8">
            <h2
              class="m-0 text-[1.125rem] font-semibold leading-snug"
              :class="isDark ? 'text-[#e8e5de]' : 'text-[#1a1a1a]'"
            >
              Consulting inquiry
            </h2>
            <p class="mt-1 mb-0 text-[12px] leading-snug" :class="isDark ? 'text-[#888]' : 'text-[#888]'">
              Tell me a bit about what you need - I'll get back to you by email.
            </p>
          </div>
          <button
            type="button"
            class="absolute right-3 top-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors"
            :class="isDark ? 'text-[#aaa] hover:bg-white/10 hover:text-[#e8e5de]' : 'text-[#555] hover:bg-black/5 hover:text-[#1a1a1a]'"
            aria-label="Close"
            @click="close"
          >
            <PhX :size="18" weight="bold" aria-hidden="true" />
          </button>
        </div>

        <div v-if="success" class="px-5 py-8 text-center">
          <p class="m-0 text-[15px] font-medium" :class="isDark ? 'text-[#e8e5de]' : 'text-[#1a1a1a]'">
            Message sent.
          </p>
          <p class="mt-2 mb-6 text-[13px] leading-relaxed" :class="isDark ? 'text-[#888]' : 'text-[#666]'">
            Thanks - I'll reply to your email as soon as I can.
          </p>
          <Button type="button" variant="default" size="sm" class="text-[12px] font-semibold" @click="close">
            Close
          </Button>
        </div>

        <form v-else class="flex flex-col" @submit.prevent="onSubmit">
          <!-- Honeypot -->
          <div class="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden="true">
            <label for="hire-website">Website</label>
            <input id="hire-website" v-model="form.website" type="text" tabindex="-1" autocomplete="off" />
          </div>

          <div class="space-y-4 px-5 py-5">
            <div>
              <label for="hire-name" :class="labelClass()">Name</label>
              <input
                id="hire-name"
                v-model="form.name"
                type="text"
                required
                maxlength="120"
                autocomplete="name"
                placeholder="Your name"
                :class="inputClass()"
              />
            </div>

            <div>
              <label for="hire-email" :class="labelClass()">Email</label>
              <input
                id="hire-email"
                v-model="form.email"
                type="email"
                required
                maxlength="254"
                autocomplete="email"
                placeholder="you@company.com"
                :class="inputClass()"
              />
            </div>

            <div>
              <label for="hire-company" :class="labelClass()">
                Company <span class="font-normal opacity-60">(optional)</span>
              </label>
              <input
                id="hire-company"
                v-model="form.company"
                type="text"
                maxlength="160"
                autocomplete="organization"
                placeholder="Company or project"
                :class="inputClass()"
              />
            </div>

            <div>
              <label for="hire-message" :class="labelClass()">How can I help?</label>
              <textarea
                id="hire-message"
                v-model="form.message"
                required
                maxlength="5000"
                rows="4"
                placeholder="Briefly describe the engagement, timeline, or problem you're solving."
                :class="[inputClass(), 'resize-y min-h-[96px] max-h-[200px]']"
              />
            </div>

            <p
              v-if="errorMessage"
              class="m-0 text-[12px] leading-snug text-red-500"
              role="alert"
            >
              {{ errorMessage }}
            </p>
          </div>

          <div
            class="flex justify-end gap-2 border-t px-5 py-4"
            :class="isDark ? 'border-[#2a2a28]' : 'border-[#e8eaed]'"
          >
            <Button
              type="button"
              variant="ghost"
              size="sm"
              class="text-[12px]"
              :class="isDark
                ? 'text-[#aaa] hover:bg-white/10 hover:text-[#e8e5de]'
                : 'text-[#555] hover:bg-black/5 hover:text-[#1a1a1a]'"
              :disabled="submitting"
              @click="close"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="default"
              size="sm"
              class="gap-1 text-[12px] font-semibold"
              :disabled="submitting"
            >
              <PhSpinner v-if="submitting" :size="13" weight="bold" class="animate-spin" aria-hidden="true" />
              {{ submitting ? 'Sending…' : 'Send inquiry' }}
            </Button>
          </div>
        </form>
      </div>
    </DialogContent>
  </Dialog>
</template>
