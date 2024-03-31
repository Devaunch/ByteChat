<script lang="ts">
	import Logo from '$assets/logo.webp';
	import Boxbg from '$components/Boxbg.svelte';
	import PasswordField from '$components/ui/Field/PasswordField.svelte';
	import SelectField from '$components/ui/Field/SelectField.svelte';
	import TextField from '$components/ui/Field/TextField.svelte';
	import { createLabel, melt } from '@melt-ui/svelte';
	import { ripple } from 'svelte-ripple-action';
	import * as v from 'valibot';

	const passwordValidator = v.string([
		v.minLength(8, 'Password must have at least 8 characters.'),
		v.custom(
			(v) => v.match(/[A-Z]/) !== null,
			'Password must contain at least one uppercase letter.'
		),
		v.custom(
			(value) => value.match(/[0-9]/) !== null,
			'Password must contain at least one number.'
		),
		v.custom(
			(value) => value.match(/[^a-zA-Z0-9]/) !== null,
			'Password must contain at least one special character.'
		)
	]);

	const {
		elements: { root }
	} = createLabel();

	let currentYear = new Date().getFullYear();

	let dateOfBirthData = {
		days: Array.from({ length: 31 }, (_, i) => String(i + 1)),
		months: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		],
		years: Array.from({ length: currentYear - 1871 }, (_, i) => String(currentYear - i))
	};
</script>

<main
	class="min-h-screen w-full relative bg-slate-900 overflow-hidden flex justify-center items-center"
>
	<Boxbg />
	<div class="min-w-96 space-y-8 p-6 rounded-lg bg-black z-10 col-span-8">
		<h1 class="text-2xl font-semibold text-white text-center space-y-4">
			<img src={Logo} alt="Logo" width="70" height="70" class="mx-auto" />
			Welcome to ByteChat
		</h1>
		<form
			method="post"
			action="?/signup"
			class="flex flex-col gap-12 justify-center items-center"
		>
			<TextField
				validator={v.string([
					v.minLength(3, 'Username must be atleast 3 characters'),
					v.maxLength(20, 'username cannot be greater than 20 characters')
				])}
				type="text"
				label="Username"
				name="signup-username"
			/>
			<TextField
				validator={v.string([v.email('Please enter a valid email address')])}
				type="text"
				label="Email"
				name="signup-email"
			/>
			<PasswordField validator={passwordValidator} label="Password" name="signup-password" />
			<SelectField
				options={['male', 'female', 'non-binary', 'other', 'prefer not to say']}
				label="Gender"
				defaultOption="prefer not to say"
				name="signup-gender"
			/>
			<div class="relative grid grid-cols-3 grid-rows-1 gap-4 w-full">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label
					class="absolute -translate-y-1/2 text-[0.9rem] block text-gray-300 px-2 text-sm"
					use:melt={$root}>Date of birth</label
				>
				<SelectField
					options={dateOfBirthData.days}
					label=""
					defaultOption="1"
					name="signup-dob-day"
				/>
				<SelectField
					options={dateOfBirthData.months}
					label=""
					defaultOption="January"
					name="signup-dob-month"
				/>
				<SelectField
					options={dateOfBirthData.years}
					label=""
					defaultOption={currentYear.toString()}
					name="signup-dob-year"
				/>
			</div>
			<button
				class="w-full px-5 py-2.5 text-lg font-normal rounded-md border-2 border-primary-500 hover:bg-primary-500 hover:text-white duration-300 scale-100 active:scale-95"
				use:ripple
				type="submit"
			>
				Sign Up
			</button>
			<a
				href="/auth/signin"
				class="w-full text-left text-base font-normal text-accent-500 duration-300 -mt-6"
				>Already have an account?</a
			>
		</form>
	</div>
</main>
