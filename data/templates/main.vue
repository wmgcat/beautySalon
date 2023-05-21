<template>
	<tempMain :title = 'title' />
	<tempServices :services = 'services' />

	<div class = 'block content'>
		<tempSponsors :sponsors = 'sponsors' />
		<h1>Наши работы</h1>
		<ul class = 'list menu'>
			<li v-for='category of getCategory()'
				:class = '["menu-item", exampleCategory == category ? "active" : ""]'
				@click = "setCategory(category)">
				{{ category }}
			</li>
		</ul>
		<ul class = 'grid'>
			<li v-for='example of getCategoryList()'>
				<div class = 'image' >
					<img :src = "require('../images/examples/' + example)"/>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import tempMain from '../components/blocks/header.vue';
	import tempServices from '../components/blocks/services.vue';
	import tempSponsors from '../components/sponsors.vue';

	export default {
		data: function() {
			return {
				exampleCategory: 'Показать все'
			}
		},
		props: ['services', 'title', 'sponsors', 'examples'],
		methods: {
			getCategoryList: function() {
				if (this.exampleCategory != 'Показать все')
					return this.examples[this.exampleCategory];

				let arr = [];
				for (const category of Object.keys(this.examples))
					arr.push(...this.examples[category]);
				return arr;
			},
			getCategory: function() {
				let arr = Object.keys(this.examples);
				arr.unshift('Показать все');
				return arr;
			},
			setCategory: function(category) { this.exampleCategory = category; }
		},
		components: { tempMain, tempServices, tempSponsors }
	}
</script>