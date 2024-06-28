<script lang="ts">
	import Line from '$lib/components/Line.svelte';
	import Post from '$lib/components/Post.svelte';
	import PostStar from '$lib/components/PostStar.svelte';
	import Star from '$lib/components/Star.svelte';

	import figfablabs from '$lib/images/sponsors/figfablabs.png';
	import firestartoys from '$lib/images/sponsors/firestartoys.png';
	import venom from '$lib/images/sponsors/venom.png';

	import first from '$lib/images/atrt/1.jpg';
	import second from '$lib/images/atrt/2.jpg';
	import third from '$lib/images/atrt/3.jpg';

	function random(min: number, max: number) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	const positions = [
		{ x: random(10, 20), y: random(5, 15) },
		{ x: random(40, 55), y: random(5, 15) },
		{ x: random(75, 85), y: random(5, 15) },
		{ x: random(10, 20), y: random(30, 38) },
		{ x: random(40, 55), y: random(30, 38) },
		{ x: random(70, 80), y: random(30, 38) }
	];

	const elems = Array.from({ length: 1000 }, (_, i) => i + 1);

	export let data;
</script>

<div class="m-10 flex flex-col items-center justify-center gap-5 font-rethink nav-headers:my-48">
	<h1 class="mb-10 text-center text-5xl font-bold leading-tight">
		Inspiring Builders <span
			class="inline-block bg-gradient-to-br from-green-500 via-green-boba to-green-500 bg-clip-text text-transparent"
			>Across the Galaxy</span
		>
	</h1>
	<p class="mb-10 max-w-[36rem] text-pretty text-center text-xl leading-9 text-gray-400">
		BobaLUG provides a community for LEGO enthusiasts to <span class="text-gray-200">share</span>
		their creations, <span class="text-gray-200">learn</span> new techniques, and be
		<span class="text-gray-200">inspired</span>.
	</p>
	<div class="flex items-center justify-center gap-3 text-lg">
		<a
			href="https://discord.gg/63Wdn4FNX7"
			target="_blank"
			class="flex items-center gap-3 rounded-lg border border-white bg-white px-3 py-2 text-center text-black transition-all hover:border-white/85 hover:bg-opacity-85"
		>
			<i class="fa-solid fa-user hidden nav-headers:block"></i>
			Become a Member
		</a>
		<a
			href="/#explore"
			class="flex items-center gap-3 rounded-lg border border-white/30 bg-black px-3 py-2 text-center transition-all hover:bg-zinc-900"
		>
			Learn More
		</a>
	</div>
</div>

<h6
	class="ml-10 max-w-[26rem] rounded-t-lg border-x border-t border-white/30 bg-black p-3 text-center font-rethink text-xl text-gray-400"
>
	Select a <span class="text-gray-200">destination</span> to learn about
	<span
		><strong
			class="inline-block bg-gradient-to-br from-green-500 via-green-boba to-green-500 bg-clip-text text-transparent"
			>BobaLUG</strong
		>'s</span
	>
	recent
	<span class="text-gray-200">adventures</span>.
</h6>
<section class="relative h-96 w-[100vw] overflow-hidden border-b border-t border-white/30 bg-black">
	<PostStar title="Gourmet AT-RT" date="June 25, 2024" pos={positions[0]} focused={true} />
	<PostStar title="Brickworld Chicago 2024" date="June 22, 2024" pos={positions[1]} />
	<PostStar title="Fallout Trailer" date="May 30, 2024" pos={positions[2]} />
	<PostStar title="Crashed TIE Fighter" date="May 28, 2024" pos={positions[3]} />
	<PostStar title="Origin of the Rebellion" date="May 16, 2024" pos={positions[4]} />
	<PostStar title="Bryx Security Bureau" date="May 13, 2024" pos={positions[5]} />
	{#each elems as _, i}
		<Star pos={{ x: random(0, 100), y: random(0, 50) }} idx={i}></Star>
	{/each}
</section>
<section class="mx-10 mb-20">
	<div
		class="flex h-96 items-center gap-5 overflow-scroll rounded-b-lg border-x border-b border-white/30 bg-black px-5"
	>
		<div
			class="flex size-[21.5rem] min-w-[21.5rem] flex-col justify-between rounded-lg border border-white/30 px-3 py-2"
		>
			<div>
				<div class="flex items-center gap-2">
					<h6 class="font-rethink text-xl font-semibold">Gourmet AT-RT</h6>
					<a
						class="text-sm text-zinc-400 hover:underline"
						href="https://www.instagram.com/p/C8pXNdUOZ_G/"
						target="_blank"><i class="fa-regular fa-arrow-up-right-from-square scale-90"></i></a
					>
				</div>

				<p class="mb-3 font-rethink text-sm text-zinc-400">June 25, 2024</p>

				<p class="font-rethink leading-[1.6rem]">
					Checkout this detailed AT-RT built by our member @jackwhat11 The build has an assortment
					of techniques ranging from poseable legs to the mini-fig being able to be in a seated
					position!
				</p>
			</div>
		</div>
		<div class="size-[21.5rem] min-w-[21.5rem] overflow-hidden rounded-lg">
			<img class="h-full w-full object-cover" src={first} alt="Gourmet AT-RT" />
		</div>
		<div class="size-[21.5rem] min-w-[21.5rem] overflow-hidden rounded-lg">
			<img class="h-full w-full object-cover" src={second} alt="Gourmet AT-RT" />
		</div>
		<div class="size-[21.5rem] min-w-[21.5rem] overflow-hidden rounded-lg">
			<img class="h-full w-full object-cover" src={third} alt="Gourmet AT-RT" />
		</div>
	</div>
</section>

<!-- <div class="mt-10 flex flex-col items-center gap-5">
	<h3 id="explore" class="text-5xl font-bold">Recent Builds</h3>
	<Post {data} idx={0} />
	<Post {data} idx={1} />
	<Post {data} idx={2} />
	<Post {data} idx={3} />
	<Post {data} idx={4} />
	<Post {data} idx={5} />
</div>

<section class="my-10 flex flex-col items-center">
	<div class="flex w-3/4 flex-col items-center gap-5">
		<h2 class="text-center text-3xl font-bold">Check out our Sponsors!</h2>

		<a
			href="https://www.fig-fablabs.com/"
			target="_blank"
			class="flex w-full items-center rounded-lg border-[1px] border-white/25 bg-black p-3 transition-all hover:border-white/50"
		>
			<img
				class="ml-3 mr-5 w-1/4 max-w-28 object-contain md:ml-5 md:mr-10"
				src={figfablabs}
				alt="FigFabLabs Logo"
			/>
			<div class="flex flex-col gap-1">
				<h5 class="text-lg font-semibold">FigFabLabs</h5>
				<p class="hidden nav-headers:block">
					FigFabLabs specializes in custom machine printed figures while providing the highest
					customer satisfcation by using UV digital printing and child-safe inks.
				</p>
				<small>5% Discount Code: Bobalug</small>
			</div>
		</a>
		<a
			href="https://venomcbw.com/collections/all-products"
			target="_blank"
			class="flex w-full items-center rounded-lg border-[1px] border-white/25 bg-black p-3 transition-all hover:border-white/50"
		>
			<img
				class="min- ml-3 mr-5 w-1/4 max-w-28 object-contain md:ml-5 md:mr-10"
				src={venom}
				alt="Venom Logo"
			/>
			<div class="flex flex-col gap-1">
				<h5 class="text-lg font-semibold">VenomCBW</h5>
				<p class="hidden nav-headers:block">
					Explore VenomCBW (Custom Brick Works) for the best in custom LEGO minifigures and
					minifigure accessories all in one place. Let your creativity go wild!
				</p>
				<small>5% Discount Code: BOBALUG</small>
			</div>
		</a>
		<a
			href="https://www.firestartoys.com/"
			target="_blank"
			class="flex w-full items-center rounded-lg border-[1px] border-white/25 bg-black p-3 transition-all hover:border-white/50"
		>
			<img
				class="ml-3 mr-5 w-1/4 max-w-28 object-contain md:ml-5 md:mr-10"
				src={firestartoys}
				alt="FireStarToys Logo"
			/>
			<div class="flex flex-col gap-1">
				<h5 class="text-lg font-semibold">FireStarToys</h5>
				<p class="hidden nav-headers:block">
					An online store that has a fantastic range of creative, collectible and rare LEGO and
					custom minifigures. They want to inspire people's love for LEGO Minifigs.
				</p>
				<small>10% Discount Code: FSBOBALUG</small>
			</div>
		</a>
	</div>
</section> -->
