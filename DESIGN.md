---
colors:
  background: '#101218'
layout:
  viewport: full-screen
  overflow: hidden
---

# Client base

A blank, full-viewport Phaser canvas hosted by Vue. No visible controls, demo artwork or gameplay. Phaser owns world rendering; Vue owns the surrounding application UI. The canvas resizes with its container. Default pixel-art rendering can be changed in src/game/createGame.ts when choosing the game's visual style.
