<template>
	<header>
		<div class = 'back'></div>
		<ul>
			<li class = 'smart-hidden'>
				<a :href='instagram'>
					<img src = '../svg/instagram.svg' />
				</a>
			</li>
			<li v-for='key of menu.slice(0, menu.length / 2)'><router-link v-bind:to = 'key.href' class = 'menu-item' active-class='active'>{{ key.title }}</router-link></li>
			<li class = 'smart-hidden'>
				<a href = '#content'><img src = '../svg/logo.svg' /></a>
			</li>
			<li v-for='key of menu.slice(menu.length / 2)'><router-link v-bind:to = 'key.href' class = 'menu-item' active-class='active'>{{ key.title }}</router-link></li>
			<li class = 'smart-hidden'>
				<span v-on:click='setInfoView(this)' class = 'button'>
					<img src = '../svg/menu.svg'/>
				</span>
			</li>
		</ul>
		<hr />
	</header>
	<tempInfo :work = 'work'
		:phones = 'phones'
		:address = 'address'/>
</template>

<script>
	import tempInfo from './info.vue';
	export default {
		props: ['work', 'phones', 'address', 'instagram'],
		data: function() {
			return {
				menu: [
					{
						title: 'Главная',
						href: '/'
					},
					{
						title: 'Мастера',
						href: '/workers'
					},
					{
						title: 'Цены',
						href: '/prices'
					},
					{
						title: 'Контакты',
						href: '/contacts'
					},
				],
				isInfoOpen: false
			}
		},
		methods: {
			setInfoView: function(e) {
				e.isInfoOpen =! e.isInfoOpen;
			}
		},
		components: { tempInfo }
	}

</script>