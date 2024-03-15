<script lang="ts">
	import type { Behold } from '$lib/types/behold';

	export let data: { behold: Behold };
	export let idx: number;

	function getCaptionLines(caption: string) {
		const trimmed = caption.split('@firestartoys')[0];
		const lines = trimmed.split('\n').slice(1);
		const linesWithPeriods = lines.map((line) => {
			const trimmedLine = line.trim();
			if (trimmedLine && !/[.?!]$/.test(trimmedLine)) {
				return trimmedLine + '.';
			}
			return trimmedLine;
		});

		return linesWithPeriods;
	}
</script>

{#await data.behold.posts[idx]}
	<div class="w-3/4 rounded border-[1px] md:hidden">
		<div class="h-96 w-full animate-pulse rounded bg-zinc-800" />
		<div class="m-3 flex flex-col gap-1">
			<div class="mb-2 flex items-center justify-between">
				<div class="h-5 w-3/4 animate-pulse rounded bg-zinc-800"></div>
			</div>
			<div class="h-4 w-full animate-pulse rounded bg-zinc-800" />
			<div class="h-4 w-3/4 animate-pulse rounded bg-zinc-800" />
			<div class="h-4 w-full animate-pulse rounded bg-zinc-800" />
			<div class="h-4 w-5/6 animate-pulse rounded bg-zinc-800" />
		</div>
	</div>

	<div class="hidden w-3/4 rounded border-[1px] md:flex">
		<div class="w-1/2">
			<div class="h-96 animate-pulse rounded bg-zinc-800" />
		</div>
		<div class="flex w-1/2 flex-col gap-1 p-3">
			<div class="mb-2 flex items-center justify-between">
				<div class="h-5 w-3/4 animate-pulse rounded bg-zinc-800"></div>
			</div>
			<div class="h-4 w-full animate-pulse rounded bg-zinc-800" />
			<div class="h-4 w-3/4 animate-pulse rounded bg-zinc-800" />
			<div class="h-4 w-full animate-pulse rounded bg-zinc-800" />
			<div class="h-4 w-5/6 animate-pulse rounded bg-zinc-800" />
		</div>
	</div>
{:then post}
	<a
		href={post.permalink}
		target="_blank"
		class="w-3/4 rounded border-[1px] border-white/25 transition-all hover:border-white/50 md:hidden"
	>
		<img src={post.mediaUrl} alt="" class="rounded object-cover" />
		<div class="m-3 flex flex-col justify-between">
			<div>
				<h3 class="text-xl font-bold">{post.prunedCaption.split('\n')[0].trim()}</h3>
				{#each getCaptionLines(post.prunedCaption) as line}
					<p class="pt-1 text-xs sm:text-sm md:text-base">{line}</p>
				{/each}
			</div>
			<div class="flex items-center gap-1 text-xs text-zinc-600">
				<i class="fa-brands fa-instagram"></i>
				Post from @bobalug Instagram.
			</div>
		</div>
	</a>

	<a
		href={post.permalink}
		class="hidden w-3/4 rounded border-[1px] border-white/25 transition-all hover:border-white/50 md:flex"
	>
		<div class="w-1/2">
			<img src={post.mediaUrl} alt="" class="h-full rounded-l object-cover" />
		</div>
		<div class="flex w-1/2 flex-col justify-between p-3">
			<div>
				<h3 class="text-xl font-bold">{post.prunedCaption.split('\n')[0].trim()}</h3>
				{#each getCaptionLines(post.prunedCaption) as line}
					<p class="pt-1 text-xs sm:text-sm md:text-base">{line}</p>
				{/each}
			</div>
			<div class="flex items-center gap-1 text-sm text-zinc-600">
				<i class="fa-brands fa-instagram"></i>
				Post from @bobalug Instagram.
			</div>
		</div>
	</a>
{/await}
