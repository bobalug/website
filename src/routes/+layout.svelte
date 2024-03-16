<script lang="ts">
	import '../app.css';

	import logo from '$lib/images/bobalug-logo.png';

	let navOpen = false;
</script>

{#if navOpen}
	<div class="sticky top-0 z-50 w-full bg-black/70 backdrop-blur-lg">
		<a class="flex items-center gap-3 p-3" href="/">
			<img src={logo} alt="BobaLUG" class="w-10 rounded-lg bg-green-boba p-1" />
			<h1 class="text-2xl font-bold">BobaLUG</h1>
		</a>
		<div class="flex flex-col items-center gap-5 rounded-lg p-5">
			<button on:click={() => (navOpen = false)} class="absolute right-3 top-3">
				<i class="fa-solid fa-times text-3xl" />
			</button>
			<a href="/" class="transition-all hover:text-green-boba">Home</a>
			<a
				href="https://bobalug-instructions.creator-spring.com/"
				target="_blank"
				class="transition-all hover:text-green-boba">Instruction Store</a
			>
			<a
				href="https://bobalugmerchcom.creator-spring.com/"
				target="_blank"
				class="transition-all hover:text-green-boba">Merch Store</a
			>
			<a href="/" class="text-zinc-400 transition-all hover:cursor-not-allowed">Members</a>
			<a
				href="https://discord.gg/4EDXhSg7"
				target="_blank"
				class="transition-all hover:text-green-boba">Apply</a
			>
		</div>
	</div>
{:else}
	<nav
		class="sticky top-0 z-50 flex w-full items-center justify-between bg-black bg-opacity-70 p-3 font-rethink text-white backdrop-blur-lg"
	>
		<a class="flex items-center gap-3" href="/">
			<img src={logo} alt="BobaLUG" class="w-10 rounded-lg bg-green-boba p-1" />
			<h1 class="text-2xl font-bold">BobaLUG</h1>
		</a>
		<div class="text-xl nav-headers:hidden">
			<button on:click={() => (navOpen = true)}>
				<i class="fa-solid fa-bars"></i>
			</button>
		</div>
		<div class="hidden items-center gap-5 nav-headers:flex">
			<a href="/" class="transition-all hover:text-green-boba">Home</a>
			<a
				href="https://bobalug-instructions.creator-spring.com/"
				target="_blank"
				class="transition-all hover:text-green-boba">Instruction Store</a
			>
			<a
				href="https://bobalugmerchcom.creator-spring.com/"
				target="_blank"
				class="transition-all hover:text-green-boba">Merch Store</a
			>
			<a href="/" class="text-zinc-400 transition-all hover:cursor-not-allowed">Members</a>
			<a
				href="https://discord.gg/63Wdn4FNX7"
				target="_blank"
				class="transition-all hover:text-green-boba">Apply</a
			>
		</div>
		<div class="hidden items-center gap-3 nav-socials:flex">
			<a href="https://instagram.com/bobalug" class="hover:text-slate-300">
				<i class="fa-brands fa-instagram text-lg" />
			</a>
			<a href="https://linktr.ee/bobalug" class="hover:text-slate-300">
				<i class="fa-solid fa-tree text-lg" />
			</a>
			<a href="https://flic.kr/p/2jmk7gt" class="hover:text-slate-300">
				<i class="fa-brands fa-flickr text-lg" />
			</a>
			<a href="https://youtube.com/channel/UCnyRsIywqpCCw2rn_51Zsgw" class="hover:text-slate-300">
				<i class="fa-brands fa-youtube text-lg" />
			</a>
			<a href="https://discord.gg/zgMZFJcEsn" class="hover:text-slate-300">
				<i class="fa-brands fa-discord text-lg" />
			</a>
		</div>
	</nav>
{/if}

<slot />

<footer class="mt-10 bg-zinc-900 font-rethink">
	<div class="hidden justify-around p-5 md:flex">
		<img src={logo} alt="" class="w-24 rounded-lg bg-green-boba p-1" />

		<div class="flex flex-col gap-1">
			<strong>Community</strong>
			<div class="flex flex-col text-sm text-slate-300">
				<a href="https://discord.gg/63Wdn4FNX7" target="_blank" class=" w-fit hover:underline"
					>Become a Member</a
				>
				<span class="w-fit text-zinc-400 hover:cursor-not-allowed">Members</span>
			</div>
		</div>

		<div class="flex flex-col gap-1">
			<strong>Shopping</strong>
			<div class="flex flex-col text-sm text-slate-300">
				<a
					target="_blank"
					href="https://bobalug-instructions.creator-spring.com/"
					class=" w-fit hover:underline">Instruction Store</a
				>
				<a
					target="_blank"
					href="https://bobalugmerchcom.creator-spring.com/"
					class="w-fit hover:underline">Merch Store</a
				>
				<a target="_blank" href="https://forms.gle/8RsQVgksTa8RRvCv8" class="w-fit hover:underline"
					>Merch Store Feedback</a
				>
			</div>
		</div>

		<div class="flex flex-col gap-1">
			<strong>Management</strong>
			<div class="flex flex-col text-sm text-slate-300">
				<span class=" w-fit text-zinc-400 hover:cursor-not-allowed">Admin Login</span>
				<span class="w-fit text-zinc-400 hover:cursor-not-allowed">Admin Panel</span>
			</div>
		</div>
	</div>
	<div class="flex w-full flex-col items-center bg-zinc-800 p-2 text-xs text-slate-300">
		<p class="text-center">
			BobaLUG <i class="fa-regular fa-copyright scale-90"></i> 2024. All rights reserved.
		</p>
		<p class="text-center">
			LEGO <i class="fa-regular fa-registered scale-90"></i> is a trademark of the LEGO group of companies
			which does not sponsor, authorize, or endorse this site.
		</p>
	</div>
</footer>
