import { readableColor, swapColorValues } from '../utils';
import common from './common';
import type { SemanticBaseColors, ThemeColors } from './types';

const base: SemanticBaseColors = {
    light: {
        background: {
            DEFAULT: '100% 0 0'
        },
        foreground: {
            ...common.zinc,
            DEFAULT: '20.38% 0.013 233.32'
        },
        content1: {
            DEFAULT: '100% 0 0',
            foreground: '20.38% 0.013 233.32'
        },
        content2: {
            DEFAULT: common.zinc[100],
            foreground: common.zinc[800]
        },
        content3: {
            DEFAULT: common.zinc[200],
            foreground: common.zinc[700]
        },
        content4: {
            DEFAULT: common.zinc[300],
            foreground: common.zinc[600]
        }
    },
    dark: {
        background: {
            DEFAULT: '0% 0 0'
        },
        foreground: {
            ...swapColorValues(common.zinc),
            DEFAULT: '94.56% 0.002 247.84'
        },
        content1: {
            DEFAULT: common.zinc[900],
            foreground: common.zinc[50]
        },
        content2: {
            DEFAULT: common.zinc[800],
            foreground: common.zinc[100]
        },
        content3: {
            DEFAULT: common.zinc[700],
            foreground: common.zinc[200]
        },
        content4: {
            DEFAULT: common.zinc[600],
            foreground: common.zinc[300]
        }
    }
};

export const themeColorsLight: ThemeColors = {
    ...base.light,
    default: {
        ...common.zinc,
        foreground: readableColor(common.zinc[300]),
        DEFAULT: common.zinc[300]
    },
    primary: {
        ...common.purple,
        foreground: readableColor(common.purple[500]),
        DEFAULT: common.purple[500]
    },
    secondary: {
        ...common.blue,
        foreground: readableColor(common.blue[500]),
        DEFAULT: common.blue[500]
    },
    accent: {
        ...common.pink,
        foreground: readableColor(common.pink[500]),
        DEFAULT: common.pink[500]
    },
    success: {
        ...common.green,
        foreground: readableColor(common.green[500]),
        DEFAULT: common.green[500]
    },
    warning: {
        ...common.yellow,
        foreground: readableColor(common.yellow[500]),
        DEFAULT: common.yellow[500]
    },
    danger: {
        ...common.red,
        foreground: common.white,
        DEFAULT: common.red[500]
    }
};

export const themeColorsDark: ThemeColors = {
    ...base.dark,
    default: {
        ...swapColorValues(common.zinc),
        foreground: readableColor(common.zinc[700]),
        DEFAULT: common.zinc[700]
    },
    primary: {
        ...swapColorValues(common.purple),
        foreground: readableColor(common.purple[500]),
        DEFAULT: common.purple[500]
    },
    secondary: {
        ...swapColorValues(common.blue),
        foreground: readableColor(common.blue[400]),
        DEFAULT: common.blue[400]
    },
    accent: {
        ...swapColorValues(common.pink),
        foreground: readableColor(common.pink[500]),
        DEFAULT: common.pink[500]
    },
    success: {
        ...swapColorValues(common.green),
        foreground: readableColor(common.green[500]),
        DEFAULT: common.green[500]
    },
    warning: {
        ...swapColorValues(common.yellow),
        foreground: readableColor(common.yellow[500]),
        DEFAULT: common.yellow[500]
    },
    danger: {
        ...swapColorValues(common.red),
        foreground: common.white,
        DEFAULT: common.red[500]
    }
};

export const semanticColors = {
    light: themeColorsLight,
    dark: themeColorsDark
};
