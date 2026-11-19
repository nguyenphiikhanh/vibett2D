<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, shallowRef } from 'vue'
import type Phaser from 'phaser'
import { createGame } from '../game/createGame'
import { EventBus } from '../game/EventBus'

const emit = defineEmits<{ 'scene-ready': [scene: Phaser.Scene] }>()
const container = ref<HTMLDivElement | null>(null)
const game = shallowRef<Phaser.Game | null>(null)
const scene = shallowRef<Phaser.Scene | null>(null)

function sceneReady(value: Phaser.Scene): void {
  scene.value = value
  emit('scene-ready', value)
}

onMounted(() => {
  if (!container.value) return
  EventBus.on('scene-ready', sceneReady)
  game.value = createGame(container.value)
})

onBeforeUnmount(() => {
  EventBus.off('scene-ready', sceneReady)
  game.value?.destroy(true)
  game.value = null
  scene.value = null
})

defineExpose({ game, scene })
</script>

<template>
  <div ref="container" class="game-container" role="region" aria-label="Game canvas"></div>
</template>

<style scoped>
.game-container {
  width: 100%;
  height: 100%;
}
</style>
