import { CSSProperties } from 'react';

declare module '@mui/material/styles' {
    interface Theme {
        root?: {};
        appDrawer?: {
            width?: CSSProperties['width'];
        };
        background?: string;
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        root?: {};
        appDrawer?: {
            width?: CSSProperties['width'];
        };
        background?: string;
    }
}

declare module '@mui/material/styles/createPalette' {
    interface PaletteOptions {
        success?: PaletteColorOptions;
        warning?: PaletteColorOptions;
        baseColor?: string;
        baseColorTxt?: string;
        roseTxt?: string;
        lightGreyTxt?: string;
        backgroundGray?: string;
        titleDarkRed?: string;
        fontColorRed?: string;
    }

    interface Palette {
        success: PaletteColor;
        warning: PaletteColor;
        baseColor: string;
        baseColorTxt?: string;
        lightGreyTxt?: string;
        roseTxt?: string;
    }
}

export interface Action {
    type: string;
    payload?: any;
    error?: any;
}