<script lang="ts">
	import Post from '$lib/components/Post.svelte';

	export let data;
</script>

<div class="m-10 flex flex-col items-center justify-center gap-5 font-rethink nav-headers:my-48">
	<h1 class="text-center text-6xl font-bold">Inspiring Builders Across the Galaxy</h1>
	<p class="text-center">
		Building Galactic Connections, One Brick at a Time - Where Inclusivity and Creativity Collide in
		the Lego Universe!
	</p>
	<div class="flex items-center justify-center gap-3 text-lg">
		<a
			href="/#explore"
			class="hover:to-zinc-900x` flex items-center gap-3 rounded-lg border-[1px] border-white border-opacity-20 px-3 py-2 transition-all hover:bg-gray-900 hover:bg-gradient-to-br hover:from-zinc-900 hover:via-zinc-800"
		>
			Explore
			<i class="fa-solid fa-arrow-down hidden nav-headers:block"></i>
		</a>
		<a
			href="https://discord.gg/4EDXhSg7"
			target="_blank"
			class="flex items-center gap-3 rounded-lg border-[1px] border-green-boba border-opacity-20 bg-green-boba bg-opacity-80 px-3 py-2 font-bold transition-all hover:border-opacity-100 hover:bg-opacity-90"
		>
			Become a Member
			<i class="fa-solid fa-arrow-right hidden nav-headers:block"></i>
		</a>
	</div>
</div>

<div class="mt-10 flex flex-col items-center gap-5">
	<Post {data} idx={0} />
	<Post {data} idx={1} />
	<Post {data} idx={2} />
	<Post {data} idx={3} />
	<Post {data} idx={4} />
	<Post {data} idx={5} />
</div>
