<script lang="ts">
	import ProfilePicture from './ProfilePicture.svelte';

	export let displayName: string;
	export let position: string;
	export let placement: string = 'None';
	export let src: string;
	export let onEdit: () => void;
	export let onDelete: () => void;
</script>

<div class="m-3 flex items-center justify-between rounded-lg p-3 transition-all hover:bg-zinc-800">
	<div class="ml-3 flex items-center gap-5">
		<ProfilePicture {src} char={displayName.charAt(0)} />
		<div class="flex flex-col">
			<strong>{displayName}</strong>
			<small class="text-zinc-400">{position} | Placement: {placement}</small>
		</div>
	</div>
	<div class="flex gap-3">
		<button on:click={onEdit} class="my-2 size-10 rounded-full transition-all hover:bg-zinc-700">
			<i class="fa-regular fa-pen"></i>
		</button>
		<button
			on:click={onDelete}
			class="my-2 size-10 rounded-full text-red-500 transition-all hover:bg-red-500 hover:text-white"
		>
			<i class="fa-regular fa-trash-can"></i>
		</button>
	</div>
</div>
