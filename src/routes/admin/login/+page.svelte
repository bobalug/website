<script lang="ts">
	export let form;
</script>

<div class="flex min-h-[71vh] items-center justify-center">
	<div class="flex w-fit flex-col items-center justify-center rounded-lg bg-zinc-900 p-5">
		{#if form}
			<div class="text-red-500">
				{form.message}
			</div>
		{/if}

		<div class="w-full">
			<div class="pb-3">
				<h2 class="font-rethink font-bold">Login to the Admin Panel</h2>
				<small class="text-sm text-zinc-400"
					>Login information must be provided to you via site administrators.</small
				>
			</div>

			<form class="flex flex-col gap-3" method="post" action="?/login">
				<label class="flex flex-col gap-1">
					<span>Email Address<span class="text-red-500">*</span></span>
					<input
						class="rounded bg-zinc-800 px-2 py-1 text-white outline-none"
						type="email"
						placeholder="Email"
						id="email"
						name="email"
					/>
				</label>
				<label class="flex flex-col gap-1">
					<span>Password<span class="text-red-500">*</span></span>
					<input
						class="rounded bg-zinc-800 px-2 py-1 text-white outline-none"
						type="password"
						placeholder="Password"
						id="password"
						name="password"
					/>
				</label>

				<button
					class="mt-3 rounded bg-green-boba px-2 py-1 transition-all hover:bg-green-boba/75"
					type="submit">Login</button
				>
			</form>
		</div>
	</div>
</div>
