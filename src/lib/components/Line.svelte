<script lang="ts">
	import { onMount } from 'svelte';

	export let from: { x: number; y: number };
	export let to: { x: number; y: number };

	// calculate the rotation angle of the line
	const angle = (Math.atan2(to.y - from.y, to.x - from.x) * 180) / Math.PI;

	// calculate the length of the line
	const length = Math.sqrt((to.x - from.x) ** 2 + (to.y - from.y) ** 2) * 100;
</script>

<svg class="absolute" style="left: {from.x}vw; top: {from.y}vh; transform: rotate({angle}deg);">
	<line x1="0" y1="0" x2={length} y2="0" stroke="white" stroke-width="2" />
</svg>
