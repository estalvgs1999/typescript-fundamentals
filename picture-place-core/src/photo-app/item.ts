export enum PhotoOrientation {
	Landscape,
	Portrait,
	Square,
	Panorama
}

export class Item {
	constructor(public readonly id: number, protected title: string) {}
}