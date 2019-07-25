<template>
  <v-content>
			<h1 class="text-xs-center mt-2 mb-2">Yandex map</h1>
      <div id="map" class="map"></div>
  </v-content>
</template>

<script>
/* eslint-disable */
import {
	banks,
	beauty,
	education,
	entertainment,
	medicine,
	religion,
	rest,
	shops,
	sports,
	all,
	park,
	logo,
} from './data.js'
import './style.scss'

export default {
	name: 'Map',
	mounted() {
		ymaps.ready(this.init)
	},
	methods: {
		init() {
			var curObjectManager, curButton

			var myMap = new ymaps.Map('map', {
				center: [43.20858788060069, 76.9169249208208],
				zoom: 14,
				controls: [],
				suppressMapOpenBlock: true,
			})

			var myCircle = new ymaps.Circle(
				[[43.20518250378338, 76.91627849999998], 2200],
				{
					balloonContent: '',
					hintContent: 'ЖК Горное Солнце',
				},
				{
					draggable: false,
					fillColor: '#147278',
					strokeColor: '#149778',
					fillOpacity: 0.1,
					strokeOpacity: 0.8,
					strokeWidth: 2,
				}
			)

			myMap.geoObjects.add(myCircle)
			myMap.controls.add('zoomControl')

			var logoObjectManager = new ymaps.ObjectManager({
				clusterize: false,
				gridSize: 1,
				clusterDisableClickZoom: true,
			})
			logoObjectManager.add(logo)
			myMap.geoObjects.add(logoObjectManager)

			var entertainmentButton = new ymaps.control.Button({
				data: {
					content: 'Развлечения',
					image: '/img/icons_gs_blank/entertainment.svg',
				},
			})
			myMap.controls.add(entertainmentButton, {float: 'left'})

			var myObjectManager = new ymaps.ObjectManager({
				clusterize: false,
				gridSize: 1,
				clusterDisableClickZoom: true,
			})
			myObjectManager.add(entertainment)

			entertainmentButton.events
				.add('deselect', function() {
					myMap.geoObjects.remove(myObjectManager)
				})
				.add('select', function() {
					entertainmentButton._layout._buttonIconElement.classList.add(
						'entertain-button'
					)
					myMap.geoObjects.remove(curObjectManager)
					curButton.deselect()
					myMap.geoObjects.add(myObjectManager)
					curObjectManager = myObjectManager
					curButton = entertainmentButton
				})

			var banksButton = new ymaps.control.Button({
				data: {
					content: 'Банки',
					image: '/img/icons_gs_blank/bank.svg',
				},
			})
			myMap.controls.add(banksButton, {float: 'left'})

			var banksObjectManager = new ymaps.ObjectManager({
				clusterize: false,
				gridSize: 1,
				clusterDisableClickZoom: true,
			})

			banksObjectManager.add(banks)

			banksButton.events
				.add('deselect', function() {
					myMap.geoObjects.remove(banksObjectManager)
				})
				.add('select', function() {
					banksButton._layout._buttonIconElement.classList.add('bank-button')
					myMap.geoObjects.remove(curObjectManager)
					curButton.deselect()
					myMap.geoObjects.add(banksObjectManager)
					curObjectManager = banksObjectManager
					curButton = banksButton
				})

			var shopsButton = new ymaps.control.Button({
				data: {
					content: 'Магазины',
					image: '/img/icons_gs_blank/shops.svg',
				},
			})
			myMap.controls.add(shopsButton, {float: 'left'})

			var shopsObjectManager = new ymaps.ObjectManager({
				clusterize: false,
				gridSize: 1,
				clusterDisableClickZoom: true,
			})
			shopsObjectManager.add(shops)

			shopsButton.events
				.add('deselect', function() {
					myMap.geoObjects.remove(shopsObjectManager)
				})
				.add('select', function() {
					shopsButton._layout._buttonIconElement.classList.add('shops-button')
					myMap.geoObjects.remove(curObjectManager)
					curButton.deselect()
					myMap.geoObjects.add(shopsObjectManager)
					curObjectManager = shopsObjectManager
					curButton = shopsButton
				})

			var sportsButton = new ymaps.control.Button({
				data: {
					content: 'Спорт',
					image: '/img/icons_gs_blank/sport.svg',
				},
			})
			myMap.controls.add(sportsButton, {float: 'left'})

			var sportsObjectManager = new ymaps.ObjectManager({
				clusterize: false,
				gridSize: 1,
				clusterDisableClickZoom: true,
			})
			sportsObjectManager.add(sports)

			sportsButton.events
				.add('deselect', function() {
					myMap.geoObjects.remove(sportsObjectManager)
				})
				.add('select', function() {
					sportsButton._layout._buttonIconElement.classList.add('sports-button')
					myMap.geoObjects.remove(curObjectManager)
					curButton.deselect()
					myMap.geoObjects.add(sportsObjectManager)
					curObjectManager = sportsObjectManager
					curButton = sportsButton
				})

			var religionButton = new ymaps.control.Button({
				data: {
					content: 'Религия',
					image: '/img/icons_gs_blank/religion.svg',
				},
			})
			myMap.controls.add(religionButton, {float: 'left'})

			var religionObjectManager = new ymaps.ObjectManager({
				clusterize: false,
				gridSize: 1,
				clusterDisableClickZoom: true,
			})
			religionObjectManager.add(religion)

			religionButton.events
				.add('deselect', function() {
					myMap.geoObjects.remove(religionObjectManager)
				})
				.add('select', function() {
					religionButton._layout._buttonIconElement.classList.add(
						'religion-button'
					)
					myMap.geoObjects.remove(curObjectManager)
					curButton.deselect()
					myMap.geoObjects.add(religionObjectManager)
					curObjectManager = religionObjectManager
					curButton = religionButton
				})

			var educationButton = new ymaps.control.Button({
				data: {
					content: 'Школы',
					image: '/img/icons_gs_blank/education.svg',
				},
			})
			myMap.controls.add(educationButton, {float: 'left'})

			var educationObjectManager = new ymaps.ObjectManager({
				clusterize: false,
				gridSize: 1,
				clusterDisableClickZoom: true,
			})
			educationObjectManager.add(education)

			educationButton.events
				.add('deselect', function() {
					myMap.geoObjects.remove(educationObjectManager)
				})
				.add('select', function() {
					educationButton._layout._buttonIconElement.classList.add(
						'educat-button'
					)
					myMap.geoObjects.remove(curObjectManager)
					curButton.deselect()
					myMap.geoObjects.add(educationObjectManager)
					curObjectManager = educationObjectManager
					curButton = educationButton
				})

			var restButton = new ymaps.control.Button({
				data: {
					content: 'Кафе и рестораны',
					image: '/img/icons_gs_blank/restaraunts.svg',
				},
			})
			myMap.controls.add(restButton, {float: 'left'})

			var restObjectManager = new ymaps.ObjectManager({
				clusterize: false,
				gridSize: 1,
				clusterDisableClickZoom: true,
			})
			restObjectManager.add(rest)

			restButton.events
				.add('deselect', function() {
					myMap.geoObjects.remove(restObjectManager)
				})
				.add('select', function() {
					restButton._layout._buttonIconElement.classList.add('rest-button')
					myMap.geoObjects.remove(curObjectManager)
					curButton.deselect()
					myMap.geoObjects.add(restObjectManager)
					curObjectManager = restObjectManager
					curButton = restButton
				})

			var medicineButton = new ymaps.control.Button({
				data: {
					content: 'Медецина',
					image: '/img/icons_gs_blank/medecine.svg',
				},
			})
			myMap.controls.add(medicineButton, {float: 'left'})

			var medicineObjectManager = new ymaps.ObjectManager({
				clusterize: false,
				gridSize: 1,
				clusterDisableClickZoom: true,
			})
			medicineObjectManager.add(medicine)

			medicineButton.events
				.add('deselect', function() {
					myMap.geoObjects.remove(medicineObjectManager)
				})
				.add('select', function() {
					medicineButton._layout._buttonIconElement.classList.add('med-button')
					myMap.geoObjects.remove(curObjectManager)
					curButton.deselect()
					myMap.geoObjects.add(medicineObjectManager)
					curObjectManager = medicineObjectManager
					curButton = medicineButton
				})

			var beautyButton = new ymaps.control.Button({
				data: {
					content: 'Красота и здоровье',
					image: '/img/icons_gs_blank/beauty.svg',
				},
			})
			myMap.controls.add(beautyButton, {float: 'left'})

			var beautyObjectManager = new ymaps.ObjectManager({
				clusterize: false,
				gridSize: 1,
				clusterDisableClickZoom: true,
			})
			beautyObjectManager.add(beauty)

			beautyButton.events
				.add('deselect', function() {
					myMap.geoObjects.remove(beautyObjectManager)
				})
				.add('select', function() {
					beautyButton._layout._buttonIconElement.classList.add('beauty-button')
					myMap.geoObjects.remove(curObjectManager)
					curButton.deselect()
					myMap.geoObjects.add(beautyObjectManager)
					curObjectManager = beautyObjectManager
					curButton = beautyButton
				})

			var parkButton = new ymaps.control.Button({
				data: {
					content: 'Парки',
					image: '/img/icons_gs_blank/park.svg',
				},
			})
			myMap.controls.add(parkButton, {float: 'left'})

			var parkObjectManager = new ymaps.ObjectManager({
				clusterize: false,
				gridSize: 1,
				clusterDisableClickZoom: true,
			})
			parkObjectManager.add(park)

			parkButton.events
				.add('deselect', function() {
					myMap.geoObjects.remove(parkObjectManager)
				})
				.add('select', function() {
					parkButton._layout._buttonIconElement.classList.add('park-button')
					myMap.geoObjects.remove(curObjectManager)
					curButton.deselect()
					myMap.geoObjects.add(parkObjectManager)
					curObjectManager = parkObjectManager
					curButton = parkButton
				})

			var allButton = new ymaps.control.Button({
				data: {
					content: 'Все',
				},
			})
			myMap.controls.add(allButton, {float: 'left'})

			var allObjectManager = new ymaps.ObjectManager({
				clusterize: false,
				gridSize: 1,
				clusterDisableClickZoom: true,
			})
			allObjectManager.add(all)
			allButton.select()
			myMap.geoObjects.add(allObjectManager)
			curObjectManager = allObjectManager
			curButton = allButton

			allButton.events
				.add('deselect', function() {
					myMap.geoObjects.remove(allObjectManager)
				})
				.add('select', function() {
					myMap.geoObjects.remove(curObjectManager)
					curButton.deselect()
					myMap.geoObjects.add(allObjectManager)
					curObjectManager = allObjectManager
					curButton = allButton
				})
		},
	},
}
</script>