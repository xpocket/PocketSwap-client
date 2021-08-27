import { DefaultTheme } from "styled-components";
import {Colors, dark, light} from '@pancakeswap/uikit'

export interface K extends Colors{
	primary: string,
	text: string,
	textSubtle: string,
	mainBg: string
}

declare module "styled-components" {
	export interface DefaultTheme {
		colors: K
	}
}

export const lightTheme: DefaultTheme = {
	...light,
	colors: {
		...light.colors,
		primary: '#E96150',
		text: '#033C6C',
		textSubtle: 'rgba(3, 60, 108, 0.6)',
		mainBg: '#FBF6F0'
	}
};