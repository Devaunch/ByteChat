export const actions = {
	signup: async ({ request }) => {
        const formData = await request.formData();
        console.log(formData);

        return {
            success: true,
        }
    }
};