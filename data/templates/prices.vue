<template>
	<div class = 'block content page'>
		<h1>Цены на услуги</h1>
		<div class = 'prices' v-for='(block, i) in getList()'>
			<img src = '../images/image.png'>
			<compPrice :services='block' />
		</div>
	</div>
</template>

<script>
	import compPrice from '../components/price.vue';
	export default {
		props: ['services'],
		components: { compPrice },
		methods: {
			getList: function() {
				let arr = [], max = 3;
				for (let i = 0; i < this.services.length / max; i++)
					arr.push([...this.services.slice(i * max, i * max + max)]);
				return arr;
			}
		}
	}
</script>