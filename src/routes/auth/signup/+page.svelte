<script lang="ts">
	import Logo from '$assets/logo.webp';
	import Boxbg from '$components/Boxbg.svelte';
	import DateField from '$components/ui/Field/DateField.svelte';
	import PasswordField from '$components/ui/Field/PasswordField.svelte';
	import SelectField from '$components/ui/Field/SelectField.svelte';
	import TextField from '$components/ui/Field/TextField.svelte';
	import { ripple } from 'svelte-ripple-action';
</script>

<main
	class="min-h-screen w-full relative bg-slate-900 overflow-hidden flex flex-col items-center justify-center"
>
	<Boxbg />
	<div class="md:w-1/5 space-y-8 p-3 md:p-6 rounded-lg bg-black z-10">
		<img src={Logo} alt="Logo" width="60" height="60" class="mx-auto -my-3" />
		<h1 class="text-2xl font-bold text-white text-center">Welcome to ByteChat</h1>
		<form
			method="post"
			action="?/signup"
			class="flex flex-col gap-8 justify-center items-center"
		>
			<TextField type="text" label="Username" id="signup-username" />
			<TextField type="text" label="Email" id="signup-email" />
			<PasswordField label="Password" id="signup-password" />
			<SelectField
				options={['male', 'female', 'non-binary', 'other', 'prefer not to say']}
				label="Gender"
				defaultOption="prefer not to say"
			/>
			<DateField label="Date of birth" />
			<button
				class="w-full px-5 py-2.5 text-lg font-normal rounded-md border-2 border-primary-dark hover:bg-primary-dark hover:text-white duration-300 scale-100 active:scale-95"
				use:ripple
				type="submit"
			>
				Sign Up
			</button>
			<a
				href="/auth/signin"
				class="w-full text-left text-base font-normal text-blue-300 duration-300"
				>Already have an account?</a
			>
		</form>
	</div>
</main>
