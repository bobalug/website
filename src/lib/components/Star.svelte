<script lang="ts">
	import { onMount } from 'svelte';

	export let idx: number;
	export let pos: { x: number; y: number };

	onMount(() => {
		// get the button element by the slug
		const button = document.getElementById(idx.toString());

		// set the position of the element
		button!.style.left = `${pos.x}vw`;
		button!.style.top = `${pos.y}vh`;
		button!.style.display = `flex`;
	});
</script>

<div
	id={`${idx}`}
	class="absolute hidden size-2 rounded-full bg-zinc-300 opacity-15"
></div>
