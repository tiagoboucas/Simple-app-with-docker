import hexRgb from "hex-rgb";

interface RGBColor {
	red: number;
	green: number;
	blue: number;
	alpha?: number;
}

export const blendColors = (color1: string, color2: string): string => {
	// Convert hex colors to RGB objects
	const hexColor1 = hexRgb(color1) as RGBColor;
	const hexColor2 = hexRgb(color2) as RGBColor;

	// Calculate blended color
	const blendedColor: RGBColor = {
		red: Math.abs(hexColor2.red - hexColor1.red),
		green: Math.abs(hexColor2.green - hexColor1.green),
		blue: Math.abs(hexColor2.blue - hexColor1.blue),
	};

	return `rgb(${blendedColor.red}, ${blendedColor.green}, ${blendedColor.blue})`;
};
