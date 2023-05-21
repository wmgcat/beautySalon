<template>
	<div class = 'info' v-if='isInfoOpen'>
		<span class = 'button close' v-on:click='this.parent.setInfoView(this.parent)'>
			<img src = '../svg/close.svg'>
		</span>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, adipiscing amet in egestas sem dui, arcu faucibus scelerisque. Nisl est felis id volutpat. Sed dolor fermentum amet lectus nibh quis. Tortor donec pellentesque leo ac placerat. Morbi.
		</p>
		<ul>
			<li>
				<h1 class = 'ul-list-title'>Контакты</h1>
				<ul class = 'ul-list'>
					<li v-for='key of phones'>{{key}}</li>
					<li>{{ address }}</li>
				</ul>
			</li>
			<li>
				<h1 class = 'ul-list-title'>Режим работы</h1>
				<ul class = 'ul-list'>
					<li v-for='[key, value] of Object.entries(work)'>С {{ value.to }} до {{ value.from }} ({{ key }})</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: ['work', 'phones', 
				'address', 'isInfoOpen',
				'setInfoView'],
	}
</script>