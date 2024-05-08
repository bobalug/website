<script lang="ts">
	import ProfilePicture from '$lib/components/ProfilePicture.svelte';
	import { blankMember, type Member } from '$lib/types/member';
	import { fly, fade } from 'svelte/transition';
	import countries from '$lib/database/countries.json';
	import { onMount } from 'svelte';
	import { createDialog, createCombobox, melt, type ComboboxOptionProps } from '@melt-ui/svelte';
	import { enhance } from '$app/forms';

	let imageUrl = true;

	export let data;

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

	const toOption = (str: string): ComboboxOptionProps<string> => ({
		value: str,
		label: str,
		disabled: false
	});

	const {
		elements: { menu: comboMenu, input: comboInput, option: comboOption, label: comboLabel },
		states: {
			open: comboOpen,
			inputValue: comboInputValue,
			touchedInput: comboTouchedInput,
			selected: comboSelected
		},
		helpers: { isSelected: comboIsSelected }
	} = createCombobox<string>({
		onSelectedChange: ({ curr, next }) => {
			currentMember.country = next?.label ?? '';
			return next;
		}
	});

	// there is some weirdness here with the way things are being updated/displayed
	$: if (!$comboOpen) {
		$comboInputValue = $comboSelected?.label ?? '';
	}

	$: filteredCountries = $comboTouchedInput
		? countries.filter((country) => {
				const normalizedInput = $comboInputValue.toLowerCase();
				return country.toLowerCase().includes(normalizedInput);
			})
		: countries;

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

	let currentMember: Member = blankMember();

	function populateFields(id?: string) {
		currentMember = members.find((member) => member.uuid === id) ?? blankMember();
	}

	const {
		elements: { trigger, overlay, content, title, description, close, portalled },
		states: { open }
	} = createDialog();
</script>

<form id="logout" method="POST" action="?/logout"></form>
<form class="hidden" id="delete" method="POST" action="?/delete">
	<input type="hidden" name="uuid" id="deleteName" />
</form>

<main class="m-10 flex min-h-[60vh] flex-col gap-3">
	<section class="flex items-center justify-between rounded-lg bg-zinc-900 px-5 py-3">
		<div class="flex gap-3">
			<button
				on:click={() => {
					populateFields();
				}}
				use:melt={$trigger}
				class="rounded-lg bg-white px-2 py-1 text-black transition-all hover:bg-white/80"
				>Create Member
			</button>
			<input
				bind:value={filter}
				type="search"
				placeholder="Search by any field..."
				class="w-[28rem] rounded-lg border-[1px] border-white/30 bg-zinc-900 px-2 py-1 outline-none"
			/>
		</div>
		<small>Showing {filteredMembers.length} of {members.length} entries</small>
		<button
			form="logout"
			class="rounded-lg border-[1px] border-red-500 px-2 py-1 text-red-500 transition-all hover:bg-zinc-800"
			>Logout</button
		>
	</section>

	<section class="rounded-lg bg-zinc-900">
		{#each filteredMembers as member}
			<div
				class="m-3 flex items-center justify-between rounded-lg p-3 transition-all hover:bg-zinc-800"
			>
				<div class="ml-3 flex items-center gap-5">
					<ProfilePicture src={member.avatar_url ?? ''} char={member.display_name.charAt(0)} />
					<div class="flex flex-col">
						<strong>{member.display_name}</strong>
						<small class="text-zinc-400">{member.position}</small>
					</div>
				</div>
				<div class="flex gap-3">
					<button
						use:melt={$trigger}
						on:click={() => populateFields(member.uuid)}
						class="my-2 size-10 rounded-full transition-all hover:bg-zinc-700"
					>
						<i class="fa-regular fa-pen"></i>
					</button>
					<button
						class="my-2 size-10 rounded-full text-red-500 transition-all hover:bg-red-500 hover:text-white"
						on:click={() => {
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
					>
						<i class="fa-regular fa-trash-can"></i>
					</button>
				</div>
			</div>
		{/each}
	</section>
</main>

<!-- edit modal -->

{#if $open}
	<div>
		<div
			class="fixed inset-0 z-50 bg-black/50"
			use:melt={$overlay}
			transition:fade={{ duration: 150 }}
		/>
		<div
			class="fixed left-1/2 top-1/2 z-50 max-h-[85vh] max-w-[500px] -translate-x-1/2 -translate-y-1/2 overflow-auto rounded-lg bg-zinc-900 p-5 shadow-xl"
			use:melt={$content}
			transition:fade={{ duration: 150 }}
		>
			<h2 class="font-rethink font-bold" use:melt={$title}>Edit Member</h2>
			<p use:melt={$description} class="pb-3 text-sm text-zinc-400">
				Manage all member information
			</p>
			<form class="flex flex-col gap-3" method="POST" action="?/update">
				<input type="hidden" name="uuid" bind:value={currentMember.uuid} />
				<fieldset class="flex w-full flex-nowrap items-center gap-3">
					<label class="w-full">
						<span class="text-xs text-zinc-200">Display Name</span>
						<input
							class="w-full rounded-lg border-[1px] border-white/30 bg-zinc-900 px-2 py-1 outline-none"
							type="text"
							name="display_name"
							bind:value={currentMember.display_name}
						/>
					</label>
					<label class="w-1/4">
						<span class="text-xs text-zinc-200">Placement</span>
						<input
							class="w-full rounded-lg border-[1px] border-white/30 bg-zinc-900 px-2 py-1 outline-none"
							type="number"
							name="priority"
							bind:value={currentMember.priority}
						/>
					</label>
				</fieldset>
				<fieldset class="flex w-full flex-nowrap items-center gap-3">
					<label class="w-1/2">
						<span class="text-xs text-zinc-200">Position</span>
						<input
							class="w-full rounded-lg border-[1px] border-white/30 bg-zinc-900 px-2 py-1 outline-none"
							type="text"
							name="position"
							bind:value={currentMember.position}
						/>
					</label>
					<label class="w-1/2">
						<span class="text-xs text-zinc-200">Country</span>
						<input
							class="w-full rounded-lg border-[1px] border-white/30 bg-zinc-900 px-2 py-1 outline-none"
							name="country"
							bind:value={currentMember.country}
							use:melt={$comboInput}
						/>
					</label>
				</fieldset>
				<fieldset class="flex w-full flex-nowrap items-center gap-3">
					<label class="w-full">
						<span class="text-xs text-zinc-200">Biography</span>
						<textarea
							class="w-full rounded-lg border-[1px] border-white/30 bg-zinc-900 px-2 py-1 outline-none"
							name="about"
							value={currentMember.about}
						/>
					</label>
				</fieldset>
				<div>
					<label for="profilePicture">
						<span class="text-xs text-zinc-200">Profile Picture</span>
					</label>
					{#if imageUrl}
						<div class="flex w-full justify-around rounded-lg border-[1px] border-white/30">
							<button
								class="h-full w-full rounded-l-lg bg-white px-2 py-1 text-black"
								on:click={() => (imageUrl = true)}>Image URL</button
							>
							<!-- TODO: Reimplement file upload logic -->
							<button
								class="h-full w-full cursor-not-allowed px-2 py-1 text-zinc-500"
								on:click={() => (imageUrl = false)}
								disabled>File Upload</button
							>
						</div>
						<label>
							<span class="text-xs text-zinc-200">Image URL</span>
							<input
								name="avatar_url"
								type="text"
								value={currentMember.avatar_url}
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
				<fieldset class="flex w-full flex-nowrap justify-between gap-5">
					<button
						class="rounded-lg border-[1px] border-red-500 px-2 py-1 text-red-500 transition-all hover:bg-zinc-800"
						use:melt={$close}
					>
						Cancel
					</button>
					<input
						value="Save Changes"
						type="submit"
						class="rounded-lg bg-white px-2 py-1 text-black transition-all hover:bg-white/80"
					/>
				</fieldset>
			</form>
		</div>
	</div>
{/if}

<!-- country combobox -->

{#if $comboOpen}
	<ul
		class=" z-[70] flex max-h-[300px] flex-col overflow-hidden rounded-lg"
		use:melt={$comboMenu}
		transition:fly={{ duration: 150, y: -5 }}
	>
		<div
			class="flex max-h-full flex-col gap-0 overflow-y-auto bg-zinc-900 px-2 py-2 text-black drop-shadow-lg"
		>
			{#each filteredCountries as country}
				{#if $comboIsSelected(country)}
					<li
						class="relative cursor-pointer scroll-my-2 rounded-md bg-zinc-600 py-2 pl-4 pr-4 text-white hover:bg-zinc-600"
						use:melt={$comboOption(toOption(country))}
					>
						{country}
					</li>
				{:else}
					<li
						class="relative cursor-pointer scroll-my-2 rounded-md bg-zinc-900 py-2 pl-4 pr-4 text-white hover:bg-zinc-600"
						use:melt={$comboOption(toOption(country))}
					>
						{country}
					</li>
				{/if}
			{/each}
		</div>
	</ul>
{/if}
