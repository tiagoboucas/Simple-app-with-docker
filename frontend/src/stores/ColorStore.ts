import { makeAutoObservable } from "mobx";
import { blendColors } from "../utils/ColorUtils";

interface Color {
	name: string;
	rgb: string;
}

const INITIAL_COLOR = process.env.REACT_APP_INITIAL_COLOR ?? "#ffffff";

class ColorStore {
	backgroundColor: string = INITIAL_COLOR;
	colors: Color[] = [];

	constructor() {
		makeAutoObservable(this);
	}

	setBackgroundColor(color: string) {
		this.backgroundColor = color;
	}

	setColorByIndex(index: number, color: Color) {
		this.colors[index] = color;
		const numberOfColors = this.colors.filter((el) => el)?.length;

		if (numberOfColors === 1)
			this.backgroundColor =
				this.colors.find((el) => el && el?.name === color.name)?.rgb ??
				INITIAL_COLOR;
		else if (numberOfColors === 2)
			this.backgroundColor = blendColors(
				this.colors[0]?.rgb,
				this.colors[1]?.rgb
			);
		else this.backgroundColor = INITIAL_COLOR;
	}
}

const colorStore = new ColorStore();
export default colorStore;
