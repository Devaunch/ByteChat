import svgToDataUri from 'mini-svg-data-uri';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
import plugin from 'tailwindcss/plugin';
import common from './colors/common';
import { semanticColors } from './colors/semantic';
import { ThemeColors } from './colors/types';

const generateVariables = () => {
    const variables: Record<string, string> = {};
    for (const [key, value] of Object.entries(common)) {
        if (typeof value === 'string') {
            variables[`--${key}`] = value;
        } else {
            for (const [subKey, subValue] of Object.entries(value)) {
                variables[`--${key}-${subKey}`] = subValue;
            }
        }
    }
    return variables;
};

const generateTailwindColors = () => {
    const theme = {};

    for (const [key, value] of Object.entries(common)) {
        if (typeof value === 'string') {
            theme[key] = `oklch(var(--${key}) / <alpha-value>)`;
        } else {
            theme[key] = {};
            for (const [subKey] of Object.entries(value)) {
                theme[key][subKey] = `oklch(var(--${key}-${subKey}) / <alpha-value>)`;
            }
        }
    }

    return theme;
};

const generateSemanticVariables = () => {
    const variables: {
        light: Record<string, string>;
        dark: Record<string, string>;
    } = {
        light: {},
        dark: {}
    };

    const generateVariables = (colors: ThemeColors) => {
        const variables = {};

        for (const [key, value] of Object.entries(colors)) {
            if (typeof value === 'string') {
                variables[`--${key}`] = value;
            } else {
                for (const [subKey, subValue] of Object.entries(value)) {
                    if (subKey === 'DEFAULT') {
                        variables[`--${key}`] = subValue;
                    } else {
                        variables[`--${key}-${subKey}`] = subValue;
                    }
                }
            }
        }

        return variables;
    };

    variables.light = generateVariables(semanticColors.light);
    variables.dark = generateVariables(semanticColors.dark);

    return variables;
};

const generateSemanticColors = () => {
    const theme = {};

    for (const [key, value] of Object.entries(semanticColors.light)) {
        if (typeof value === 'string') {
            theme[key] = `oklch(var(--${key}) / <alpha-value>)`;
        } else {
            theme[key] = {};
            for (const [subKey] of Object.entries(value)) {
                if (subKey === 'DEFAULT') {
                    theme[key][subKey] = `oklch(var(--${key}) / <alpha-value>)`;
                } else {
                    theme[key][subKey] = `oklch(var(--${key}-${subKey}) / <alpha-value>)`;
                }
            }
        }
    }

    return theme;
};

export const colors = () => {
    const vars = generateVariables();
    const colors = generateTailwindColors();
    const semanticVars = generateSemanticVariables();
    const semanticColors = generateSemanticColors();

    return plugin(
        ({ addBase }) => {
            addBase({
                ':root': {
                    ...vars,
                    ...semanticVars.light
                },
                ':is(.dark *)': {
                    ...semanticVars.dark
                }
            });
        },
        {
            theme: {
                extend: {
                    colors: {
                        ...colors,
                        ...semanticColors
                    }
                }
            }
        }
    );
};

export const utils = () => {
    return plugin(({ matchUtilities, theme }) => {
        matchUtilities(
            {
                'bg-dot-thick': (value: any) => ({
                    backgroundImage: `url("${svgToDataUri(
                        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20" fill="none"><circle fill="${value}" id="pattern-circle" cx="14" cy="14" r="4"></circle></svg>`
                    )}")`
                })
            },
            {
                values: flattenColorPalette(theme('backgroundColor')),
                type: 'color'
            }
        );
    });
};
