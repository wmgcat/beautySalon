<template>
	<footer>
		<hr />
		<ul>
			<li>
				<a href = '#content'>
					<img src = '../svg/logo.svg' />
				</a>
			</li>
			<li>
				<h1 class = 'ul-list-title'>Контакты</h1>
				<ul class = 'ul-list'>
					<li v-for='key of phones'>
						<a :href = '"tel:" + key'>{{ key }}</a>
					</li>
					<li>
						<address>{{ address }}</address>
					</li>
				</ul>
			</li>
			<li>
				<h1 class = 'ul-list-title'>Режим работы</h1>
				<ul class = 'ul-list'>
					<li v-for='[key, value] of Object.entries(work)'>С {{ value.to }} до {{ value.from }} ({{ key }})</li>
				</ul>
			</li>
			<li>
				<h1 class = 'ul-list-title'>Мы в Instagram</h1>
				<ul class = 'ul-list'>
					<li>
						<a :href='instagram'>
							<img src = '../svg/instagram.svg' />
						</a>
					</li>
				</ul>
			</li>
		</ul>
		<hr />
		<p class='copyright'>Copyright © 2017 - {{ currentDate }}</p>
	</footer>
</template>

<script>
	export default {
		name: 'footerComponent',
		props: [
			'phones',
			'address',
			'work',
			'instagram'
		],
		data: function() {
			return {
				currentDate: '2023'
			}
		}
	}
</script>