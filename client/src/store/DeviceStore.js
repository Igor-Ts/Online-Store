import {makeAutoObservable} from "mobx"

export default class DeviceStore {
	constructor() {
		this._types = [
			{id: 1, name: "Refrigerators"},
			{id: 2, name: "Smartphones"},
			{id: 3, name: "PC"},
			{id: 4, name: "Notebooks"},
		]
		this._brands = [
			{id: 1, name: "Samsung"},
			{id: 2, name: "Apple"},
			{id: 3, name: "Lenovo"},
			{id: 4, name: "Asus"},
		]
		this._devices = [
			{
				id: 1,
				name: "12 pro",
				price: 1200,
				reating: 5,
				img: "232a2966-3d16-4952-8b76-1f5cd880e630.jpg",
			},
			{
				id: 2,
				name: "iPhone 13 Pro 128GB Silver",
				price: 1159,
				reating: 5,
				img: "9d1806a4-751a-446b-8ff8-0b970c884253.jpg",
			},
			{
				id: 3,
				name: "iPhone 13 Pro 128GB Graphite",
				price: 1159,
				reating: 5,
				img: "a47ac458-bdf9-4de3-80ae-d100061a40c0.jpg",
			},
			{
				id: 4,
				name: "iPhone 12 Pro Max 128GB Silver",
				price: 1135,
				reating: 5,
				img: "38e6eaec-4d33-4d82-93ca-80ec369c2099.jpg",
			},
			{
				id: 5,
				name: "iPhone 13 Pro 128GB Gold",
				price: 1149,
				reating: 5,
				img: "fe32ddbe-cd2f-4803-ba4a-202efb628611.jpg",
			},
			{
				id: 6,
				name: "iPhone 13 Pro 128GB Sierra Blue",
				price: 1159,
				reating: 5,
				img: "ed8bc3f2-2b09-4ca0-87e5-64742deef90b.jpg",
			},
		]
		this._selectedType = {}
		this._selectedBrand = {}
		makeAutoObservable(this)
	}
	setTypes(types) {
		this._types = types
	}
	setBrands(brands) {
		this._brands = brands
	}
	setDevices(devices) {
		this._devices = devices
	}
	setSelectedType(type) {
		this._selectedType = type
	}
	setSelectedBrand(Brand) {
		this._selectedBrand = Brand
	}

	get types() {
		return this._types
	}
	get brands() {
		return this._brands
	}
	get devices() {
		return this._devices
	}
	get selectedType() {
		return this._selectedType
	}
	get selectedBrand() {
		return this._selectedBrand
	}
}
