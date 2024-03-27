import { browser } from "$app/environment";

const getUserRegion = () => {
    if (!browser) return;
    const region = window.navigator.language
    return region;
}

export { getUserRegion };

