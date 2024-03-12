import { makeAutoObservable } from "mobx";

class ColorStore {
	backgroundColor: string = "white";

	constructor() {
		makeAutoObservable(this);
	}

	setBackgroundColor(color: string) {
		this.backgroundColor = color;
	}
}

const colorStore = new ColorStore();
export default colorStore;
