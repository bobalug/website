<script lang="ts">
	import Post from '$lib/components/Post.svelte';

	import figfablabs from '$lib/images/sponsors/figfablabs.png';
	import firestartoys from '$lib/images/sponsors/firestartoys.png';
	import venom from '$lib/images/sponsors/venom.png';

	export let data;
</script>

<div class="m-10 flex flex-col items-center justify-center gap-5 font-rethink nav-headers:my-48">
	<h1 class="text-center text-6xl font-bold">Inspiring Builders Across the Galaxy</h1>
	<p class="text-center">
		BobaLUG was created on September 19, 2019 with a goal to help inspire the minds of builders
		across the globe, and to create a community of talented artists who can collaborate and connect
		on the hobby they all love and enjoy. It’s our mission to continue to improve and connect in
		various ways with builders all over to provide a sense of belonging and community.
	</p>
	<div class="flex items-center justify-center gap-3 text-lg">
		<a
			href="/#explore"
			class="flex items-center gap-3 rounded-lg border-[1px] border-white border-opacity-20 px-3 py-2 transition-all hover:bg-gray-900 hover:bg-gradient-to-br hover:from-zinc-900 hover:via-zinc-800 hover:to-zinc-900"
		>
			Explore
			<i class="fa-solid fa-arrow-down hidden nav-headers:block"></i>
		</a>
		<a
			href="https://discord.gg/63Wdn4FNX7"
			target="_blank"
			class="flex items-center gap-3 rounded-lg border-[1px] border-green-boba border-opacity-20 bg-green-boba bg-opacity-80 px-3 py-2 font-bold transition-all hover:border-opacity-100 hover:bg-opacity-90"
		>
			Become a Member
			<i class="fa-solid fa-arrow-right hidden nav-headers:block"></i>
		</a>
	</div>
</div>

<div class="mt-10 flex flex-col items-center gap-5">
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
			class="flex w-full items-center rounded-lg border-[1px] border-white/25 p-3 transition-all hover:border-white/50"
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
			class="flex w-full items-center rounded-lg border-[1px] border-white/25 p-3 transition-all hover:border-white/50"
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
			class="flex w-full items-center rounded-lg border-[1px] border-white/25 p-3 transition-all hover:border-white/50"
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
</section>
