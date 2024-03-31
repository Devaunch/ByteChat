import { fail } from "@sveltejs/kit";
import * as v from "valibot";

const signUpSchema = v.object({
    username: v.string([ v.minLength(3), v.maxLength(20)]),
    email: v.string([ v.email()]),
    password: v.string([
		v.minLength(8),
		v.custom(v => v.match(/[A-Z]/) !== null ),
	    v.custom(v => v.match(/[0-9]/) !== null,),
		v.custom(v => v.match(/[^a-zA-Z0-9]/) !== null,)
	]),
    gender: v.picklist(['male', 'female', 'non-binary', 'other', 'prefer not to say']),
    dob: v.date([v.maxValue(new Date()), v.minValue(new Date(1872, 1, 1))]),
});

export const actions = {
	signup: async ({ request }) => {
        const formData = await request.formData();

        if (!formData.has('signup-username') || !formData.has('signup-email') || !formData.has('signup-password') || !formData.has('signup-gender') || !formData.has('signup-dob-year') || !formData.has('signup-dob-month') || !formData.has('signup-dob-day')) {
            return fail(400, {
                success: false,
                message: 'Missing required fields',
            });
        }

        const raw = {
            username: formData.get('signup-username'),
            email: formData.get('signup-email'),
            password: formData.get('signup-password'),
            gender: formData.get('signup-gender'),
            dob: new Date(formData.get('signup-dob-year') as unknown as number, formData.get('signup-dob-month') as unknown as number, formData.get('signup-dob-day') as unknown as number),
        }

        const result = await v.safeParseAsync(signUpSchema, raw);

        if (!result.success) {
            return fail(400, {
                success: false,
                message: 'Invalid input',
                issues: result.issues,
            });
        }

        const data = result.output;

        console.log(data);

        return {
            success: true,
            message: 'Signup successful',
        }
    }
};