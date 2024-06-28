<script lang="ts">
	import { onMount } from 'svelte';

	export let date: string;
	export let title: string;
	export let pos: { x: number; y: number };
	export let focused: boolean = false;

	// title to lowercase and replace spaces with underscores
	const titleSlug = title.toLowerCase().replace(/\s/g, '_');

	onMount(() => {
		// get the button element by the slug
		const button = document.getElementById(titleSlug);

		// set the position of the element
		button!.style.left = `${pos.x}vw`;
		button!.style.top = `${pos.y}vh`;
		button!.style.display = `flex`;
	});
</script>

{#if focused}
	<button id={titleSlug} class={`group absolute hidden items-center gap-3 p-1 font-rethink`}>
		<i class="fa-solid fa-circle rounded-full text-green-boba transition-all shadow-[0_0_2px_#0fa691,inset_0_0_2px_#0fa691,0_0_5px_#0fa691,0_0_15px_#0fa691,0_0_30px_#0fa691]"></i>
		<div class="flex flex-col items-start">
			<span>{title}</span>
			<span class="text-sm text-zinc-400">{date}</span>
		</div>
	</button>
{:else}
	<button id={titleSlug} class={`group absolute hidden items-center gap-3 p-1 font-rethink`}>
		<i
			class="fa-solid fa-circle rounded-full transition-all duration-100 group-hover:text-green-boba group-hover:shadow-[0_0_2px_#0fa691,inset_0_0_2px_#0fa691,0_0_5px_#0fa691,0_0_15px_#0fa691,0_0_30px_#0fa691]"
		></i>
		<div class="flex flex-col items-start">
			<span>{title}</span>
			<span class="text-sm text-zinc-400">{date}</span>
		</div>
	</button>
{/if}
