<script lang="ts">
	import type { Member } from '$lib/types/member.js';

	export let data;

	const members: Member[] = data.members ?? [];
	let sortedMembers = [...members].sort((a, b) => {
		if (a.priority === null && b.priority === null) {
			return 0;
		} else if (a.priority === null) {
			return 1;
		} else if (b.priority === null) {
			return -1;
		} else {
			return a.priority - b.priority;
		}
	});

	let leftMembers: Member[] = [];
	let rightMembers: Member[] = [];
	for (let i = 0; i < sortedMembers.length; i++) {
		if (i % 2 === 0) {
			leftMembers.push(sortedMembers[i]);
		} else {
			rightMembers.push(sortedMembers[i]);
		}
	}
</script>

<main class="my-10 flex min-h-[60vh] justify-center gap-5">
	<div class="members-cols:flex hidden w-full flex-col gap-5">
		{#each leftMembers as member}
			<section class="ml-20 flex h-fit flex-col gap-3 rounded-lg bg-zinc-900 p-5">
				<div class="flex items-center gap-3">
					{#if !member.avatar_url || member.avatar_url === ''}
						<div
							class="flex size-16 items-center justify-center rounded-full bg-zinc-700 uppercase"
						>
							<span class="font-sans text-3xl font-bold">{member.display_name.charAt(0)}</span>
						</div>
					{:else}
						<img
							class="size-16 rounded-full object-cover object-center"
							src={member.avatar_url}
							alt={member.display_name}
						/>
					{/if}
					<div>
						<h2 class="font-bold">{member.display_name}</h2>
						<p class="text-zinc-400">{member.position}</p>
					</div>
				</div>
				<p>{member.about}</p>
			</section>
		{/each}
	</div>
	<div class="members-cols:flex hidden w-full flex-col gap-5">
		{#each rightMembers as member}
			<section class="mr-20 flex h-fit flex-col gap-3 rounded-lg bg-zinc-900 p-5">
				<div class="flex items-center gap-3">
					{#if !member.avatar_url || member.avatar_url === ''}
						<div
							class="flex size-16 items-center justify-center rounded-full bg-zinc-700 uppercase"
						>
							<span class="font-sans text-3xl font-bold">{member.display_name.charAt(0)}</span>
						</div>
					{:else}
						<img
							class="size-16 rounded-full object-cover object-center"
							src={member.avatar_url}
							alt={member.display_name}
						/>
					{/if}
					<div>
						<h2 class="font-bold">{member.display_name}</h2>
						<p class="text-zinc-400">{member.position}</p>
					</div>
				</div>
				<p>{member.about}</p>
			</section>
		{/each}
	</div>
	<div class="members-cols:hidden flex flex-col gap-5">
		{#each sortedMembers as member}
			<section
				class="mx-[5vw] flex h-fit flex-col gap-3 rounded-lg bg-zinc-900 p-5 nav-headers:mx-[10vw]"
			>
				<div class="flex items-center gap-3">
					{#if !member.avatar_url || member.avatar_url === ''}
						<div
							class="flex size-16 items-center justify-center rounded-full bg-zinc-700 uppercase"
						>
							<span class="font-sans text-3xl font-bold">{member.display_name.charAt(0)}</span>
						</div>
					{:else}
						<img
							class="size-16 rounded-full object-cover object-center"
							src={member.avatar_url}
							alt={member.display_name}
						/>
					{/if}
					<div>
						<h2 class="font-bold">{member.display_name}</h2>
						<p class="text-zinc-400">{member.position}</p>
					</div>
				</div>
				<p>{member.about}</p>
			</section>
		{/each}
	</div>
</main>
