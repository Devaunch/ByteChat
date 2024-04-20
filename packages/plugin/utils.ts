export function swapColorValues<T extends Object>(colors: T) {
    const swappedColors = {};
    const keys = Object.keys(colors);
    const length = keys.length;

    for (let i = 0; i < length / 2; i++) {
        const key1 = keys[i];
        const key2 = keys[length - 1 - i];

        // @ts-ignore
        swappedColors[key1] = colors[key2];
        // @ts-ignore
        swappedColors[key2] = colors[key1];
    }
    if (length % 2 !== 0) {
        const middleKey = keys[Math.floor(length / 2)];

        // @ts-ignore
        swappedColors[middleKey] = colors[middleKey];
    }

    return swappedColors;
}

const readableColorIsBlack = (color: string): boolean => {
    const [L] = color.split(' ').map(parseFloat);
    const lightness = L / 100;

    return lightness > 0.179;
};

export const readableColor = (color: string): string => {
    return readableColorIsBlack(color) ? '0% 0 0' : '100% 0 0';
};
