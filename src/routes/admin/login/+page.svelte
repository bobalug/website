<script lang="ts">
	export let form;
</script>

<div class="flex min-h-[65vh] items-center justify-center">
	<div class="flex w-1/2 flex-col items-center justify-center rounded-lg bg-zinc-900 p-5">
		{#if form}
			<div class="text-red-500">
				{form.message}
			</div>
		{/if}

		<div class="w-full">
			<form class="flex flex-col gap-3" method="post" action="?/login">
				<label class="flex flex-col gap-1">
					<span>Email<span class="text-red-500">*</span></span>
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
					class="rounded bg-green-boba px-2 py-1 transition-all hover:bg-green-boba/75"
					type="submit">Login</button
				>
			</form>
		</div>
	</div>
</div>
