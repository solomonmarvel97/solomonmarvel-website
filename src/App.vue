<script setup lang="ts">
import { onMounted, provide } from 'vue'

provide('weight', 'regular')

function runDelayedScripts() {
  const delayedScripts = document.querySelectorAll<HTMLScriptElement>(
    'script[type="text/delayed"]',
  )

  delayedScripts.forEach((script) => {
    const newScript = document.createElement('script')

    if (script.dataset.src) {
      newScript.src = script.dataset.src
      Array.from(script.attributes).forEach((attr) => {
        if (attr.name !== 'type' && attr.name !== 'data-src') {
          newScript.setAttribute(attr.name, attr.value)
        }
      })
    } else {
      newScript.textContent = script.textContent
      Array.from(script.attributes).forEach((attr) => {
        if (attr.name !== 'type' && attr.name.startsWith('data-')) {
          newScript.setAttribute(attr.name, attr.value)
        }
      })
    }

    document.body.appendChild(newScript)
  })

  const delayedModules = document.querySelectorAll<HTMLScriptElement>(
    'script[type="text/delayed-module"]',
  )

  delayedModules.forEach((script) => {
    const newScript = document.createElement('script')
    newScript.type = 'module'

    if (script.dataset.src) {
      newScript.src = script.dataset.src
      Array.from(script.attributes).forEach((attr) => {
        if (attr.name !== 'type' && attr.name !== 'data-src') {
          newScript.setAttribute(attr.name, attr.value)
        }
      })
    } else {
      newScript.textContent = script.textContent
      Array.from(script.attributes).forEach((attr) => {
        if (attr.name !== 'type' && attr.name.startsWith('data-')) {
          newScript.setAttribute(attr.name, attr.value)
        }
      })
    }

    document.body.appendChild(newScript)
  })
}

onMounted(() => {
  runDelayedScripts()
})
</script>

<template>
  <RouterView />
</template>
