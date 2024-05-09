<script lang="ts" context="module">
	export type ToastData = {
		title: string;
		description: string;
		icon: string;
		color: string;
	};

	const {
		elements: { content, title, description, close },
		helpers,
		states: { toasts },
		actions: { portal }
	} = createToaster<ToastData>();

	export const addToast = helpers.addToast;
</script>

<script lang="ts">
	import { createToaster, melt } from '@melt-ui/svelte';
</script>

<div class="fixed bottom-3 right-3 drop-shadow-2xl" use:portal>
	{#each $toasts as { id, data } (id)}
		<div use:melt={$content(id)} class="z-[100] mt-3 rounded-lg bg-zinc-900 p-5">
			<div>
				<div>
					<div class="flex flex-nowrap items-center gap-3">
						<i class={`${data.icon} ${data.color}`}></i>
						<h3 class={`font-rethink text-lg font-semibold ${data.color}`} use:melt={$title(id)}>
							{data.title}
						</h3>
					</div>
					<div use:melt={$description(id)}>
						{data.description}
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>
