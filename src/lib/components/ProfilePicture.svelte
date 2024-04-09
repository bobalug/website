<script lang="ts">
	export let src: string;
	export let char: string;
</script>

{#if !src || src === ''}
	<div class={`flex size-16 items-center justify-center rounded-full bg-zinc-700 uppercase`}>
		<span class="font-sans text-3xl font-bold">{char}</span>
	</div>
{:else}
	<img class={`size-16 rounded-full object-cover object-center`} {src} alt={char} />
{/if}
