<script lang="ts">
	import AdminTableMember from '$lib/components/AdminTableMember.svelte';
	import type { Member } from '$lib/types/member';
	import { v4 as uuidv4 } from 'uuid';
	import { fly } from 'svelte/transition';
	import countries from '$lib/database/countries.json';
	import { onMount } from 'svelte';

	let blurBackground = false;
	let memberEdit = false;

	let imageUrl = true;

	export let data;
	export let form;

	let updateTimer = 3;
	onMount(() => {
		const timer = setInterval(() => {
			if (updateTimer === 0) {
				clearInterval(timer);
			} else {
				updateTimer--;
			}
		}, 1000);
	});

	const members: Member[] = data.members;
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

	let filter = '';

	$: filteredMembers = [...sortedMembers].filter((member) => {
		return (
			member.display_name.toLowerCase().includes(filter.toLowerCase()) ||
			member.position.toLowerCase().includes(filter.toLowerCase()) ||
			member.country?.toLowerCase().includes(filter.toLowerCase()) ||
			member.about?.toLowerCase().includes(filter.toLowerCase())
		);
	});

	function createMember(): Member {
		return {
			about: '',
			avatar_url: '',
			country: '',
			created_at: '',
			display_name: '',
			joined_at: '',
			position: '',
			priority: null,
			uuid: uuidv4()
		};
	}

	let activeMember: Member = createMember();

	function findMember(id?: string) {
		if (id === null || id === undefined) {
			activeMember = createMember();
			return;
		}
		activeMember = members.find((member) => member.uuid === id) ?? createMember();
	}
</script>

{#if form && form.status === 200 && updateTimer > 0}
	{#if form.member}
		<div
			class="fixed bottom-5 right-5 z-[1000] h-fit w-fit rounded-lg border-[1px] border-green-500/75 bg-black px-2 py-1"
		>
			<span class="text-green-500">Successfully updated member.</span>
		</div>
	{:else}
		<div
			class="fixed bottom-5 right-5 z-[1000] h-fit w-fit rounded-lg border-[1px] border-red-500/75 bg-black px-2 py-1"
		>
			<span class="text-red-500">Successfully deleted member.</span>
		</div>
	{/if}
{/if}

{#if blurBackground}
	<div class="fixed inset-0 z-[500] bg-black/30 backdrop-blur-sm"></div>
{/if}

{#if memberEdit}
	<div
		in:fly={{ x: 1000, duration: 1000 }}
		out:fly={{ x: 1000, duration: 1000 }}
		class="fixed right-0 top-0 z-[1000] h-[100vh] w-1/2 bg-zinc-900 p-5"
	>
		<div>
			<strong>Edit Member</strong>
		</div>
		<form class="my-5 flex h-fit flex-col gap-3" method="post" action="?/update" name="update">
			<label class="w-full">
				<small>Member ID</small>
				<input
					name="uuid"
					type="text"
					bind:value={activeMember.uuid}
					class="w-full rounded-lg border-[1px] border-white/30 bg-zinc-800 px-2 py-1 text-zinc-400 outline-none hover:cursor-not-allowed"
				/>
			</label>
			<div class="flex w-full gap-3">
				<label class="w-2/3">
					<small>Display Name</small>
					<input
						type="text"
						name="display_name"
						bind:value={activeMember.display_name}
						placeholder="Display Name"
						class="w-full rounded-lg border-[1px] border-white/30 bg-zinc-900 px-2 py-1 outline-none"
					/>
				</label>
				<label class="w-1/3">
					<small>Rank</small>
					<input
						type="text"
						name="priority"
						bind:value={activeMember.priority}
						placeholder="Rank"
						class="w-full rounded-lg border-[1px] border-white/30 bg-zinc-900 px-2 py-1 outline-none"
					/>
				</label>
			</div>

			<label class="w-full">
				<small>Position</small>
				<input
					type="text"
					name="position"
					bind:value={activeMember.position}
					placeholder="Position"
					class="w-full rounded-lg border-[1px] border-white/30 bg-zinc-900 px-2 py-1 outline-none"
				/>
			</label>
			<div class="flex gap-3">
				<label class="w-full">
					<small>Country</small>
					<select
						name="country"
						bind:value={activeMember.country}
						class="w-full rounded-lg border-[1px] border-white/30 bg-zinc-900 px-2 py-1 outline-none"
					>
						{#each countries.sort() as country}
							<option value={country}>{country}</option>
						{/each}
					</select>
				</label>
				<label class="w-full">
					<small>Join Date</small>
					<input
						type="date"
						name="joined_at"
						bind:value={activeMember.joined_at}
						placeholder="Join Date"
						class="w-full rounded-lg border-[1px] border-white/30 bg-zinc-900 px-2 py-1 outline-none"
					/>
				</label>
			</div>

			<label class="w-full">
				<small>Biography</small>
				<textarea
					bind:value={activeMember.about}
					name="about"
					placeholder="Biography"
					class="h-40 w-full resize-none rounded-lg border-[1px] border-white/30 bg-zinc-900 px-2 py-1 outline-none"
				/>
			</label>
			<div>
				<label for="profilePicture">
					<small>Profile Picture</small>
				</label>
				{#if imageUrl}
					<div class="flex w-full justify-around rounded-lg border-[1px] border-white/30">
						<button
							class="h-full w-full rounded-l-lg bg-white px-2 py-1 text-black"
							on:click={() => (imageUrl = true)}>Image URL</button
						>
						<button class="h-full w-full px-2 py-1" on:click={() => (imageUrl = false)}
							>File Upload</button
						>
					</div>
					<label>
						<small>Image URL</small>
						<input
							name="avatar_url"
							type="text"
							bind:value={activeMember.avatar_url}
							placeholder="Image URL"
							class="w-full rounded-lg border-[1px] border-white/30 bg-zinc-900 px-2 py-1 outline-none"
						/>
					</label>
				{:else}
					<div class="flex w-full justify-around rounded-lg border-[1px] border-white/30">
						<button class="h-full w-full px-2 py-1" on:click={() => (imageUrl = true)}
							>Image URL</button
						>
						<button
							class="h-full w-full rounded-r-lg bg-white px-2 py-1 text-black"
							on:click={() => (imageUrl = false)}>File Upload</button
						>
					</div>
					<button
						class="mt-3 flex h-32 w-full items-center justify-center rounded-lg border-[1px] border-dashed border-white/30"
						on:dragover={() => ''}
						on:drop={() => ''}
					>
						<span class="text-zinc-400">Drag Image or Click to Upload</span>
						<input
							name="avatar_file"
							type="file"
							id="profilePicture"
							accept=".jpg, .jpeg, .png, .webp"
							class="hidden"
						/>
					</button>
				{/if}
			</div>
			<div class="flex justify-between">
				<button
					type="reset"
					class="rounded-lg border-[1px] border-red-500 px-2 py-1 text-red-500 transition-all hover:bg-zinc-800"
					on:click={() => {
						blurBackground = false;
						memberEdit = false;
					}}
				>
					Cancel
				</button>
				<input
					type="submit"
					value="Save Changes"
					class="rounded-lg bg-white px-2 py-1 text-black transition-all hover:bg-white/80"
					on:click={() => {
						blurBackground = false;
						memberEdit = false;
					}}
				/>
			</div>
		</form>
	</div>
{/if}

<form id="logout" method="POST" action="?/logout"></form>
<form class="hidden" id="delete" method="POST" action="?/delete">
	<input type="hidden" name="uuid" id="deleteName" />
</form>

<main class="m-10 flex min-h-[60vh] flex-col gap-3">
	<section class="flex items-center justify-between rounded-lg bg-zinc-900 px-5 py-3">
		<div class="flex gap-3">
			<button
				on:click={() => {
					blurBackground = true;
					memberEdit = true;
					findMember();
				}}
				class="rounded-lg bg-white px-2 py-1 text-black transition-all hover:bg-white/80"
				>Create Member
			</button>
			<input
				bind:value={filter}
				type="search"
				placeholder="Search for members... (name, bio, position, country)"
				class="w-[28rem] rounded-lg border-[1px] border-white/30 bg-zinc-900 px-2 py-1 outline-none"
			/>
		</div>
		<button
			form="logout"
			class="rounded-lg border-[1px] border-red-500 px-2 py-1 text-red-500 transition-all hover:bg-zinc-800"
			>Logout</button
		>
	</section>

	<section class="rounded-lg bg-zinc-900">
		{#each filteredMembers as member}
			<AdminTableMember
				onDelete={() => {
					let form = document.getElementById('delete');
					let input = document.getElementById('deleteName');
					if (
						form &&
						input &&
						form instanceof HTMLFormElement &&
						input instanceof HTMLInputElement
					) {
						input.value = member.uuid;
						form.submit();
					}
				}}
				onEdit={() => {
					blurBackground = true;
					memberEdit = true;
					findMember(member.uuid);
				}}
				src={member.avatar_url ?? ''}
				displayName={member.display_name}
				position={member.position}
			/>
		{/each}
	</section>
</main>
