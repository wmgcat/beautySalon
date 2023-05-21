<template>
	<headerComponent
		:phones='phones'
		:address='address'
		:work='work'
		:instagram='instagram'
	/>
	<div id = 'content' v-if='!loading'>
		<router-view
			:services='services'
			:title='title'
			:sponsors='sponsors'
			:examples='examples'
			:address='address'
			:phones='phones'
			:work='work'
			:workers='workers'
		></router-view>
	</div>
	<footerComponent
		:phones='phones'
		:address='address'
		:work='work'
		:instagram='instagram'
	/>
</template>

<script>
	import headerComponent from './components/header.vue';
	import footerComponent from './components/footer.vue';
	export default {
		components: {
			headerComponent,
			footerComponent
		},
		data: function() {
			return {
				loading: true,
				sponsors: [
					{
						image: 'aldo_coppola.png',
						alt: 'Aldo Coppola'
					},
					{
						image: 'alterna.png',
						alt: 'Alterna'
					},
					{
						image: 'kevin_murrhy.png',
						alt: 'Kevin Murrhy'
					},
					{
						image: 'oribe.png',
						alt: 'Oribe'
					}
				],
				examples: {
					'Парикмахерские услуги': [
						'1.png', '2.png', '3.png'
					],
					'Маникюр': [
						'4.png', '5.png', '6.png'
					],
					'Педикюр': [
						'7.png', '8.png', '9.png'
					]
				}
			}
		},
		methods: {
			getAPIMethods: async function(_get) {
				try {
					const data = await fetch(_get);
					const _json = await data.json();
					return _json;
				}
				catch(err) {
					console.error(err);
					return false;
				}
			},
			getServices: async function() {
				try {
					const obj = await this.getAPIMethods('/get/services');
					return obj;
				}
				catch(err) {
					console.error(err);
					return false;
				}
			},
			getWorkers: async function() {
				try {
					const obj = await this.getAPIMethods('/get/workers');
					return obj.map(item => {
						return {
							fullname: `${item.firstname} ${item.lastname}`,
							prof: item.prof,
							photo: item.photo
						}
					});
				}
				catch(err) {
					console.error(err);
					return false;
				}
			},
			getInfo: async function() {
				try {
					const obj = await this.getAPIMethods('/get/info');
					return obj;
				}
				catch(err) {
					console.error(err);
					return false;
				}
			},
			funcLoader: async function() {
				for (const [ key, value ] of Object.entries({
					info: this.getInfo,
					services: this.getServices,
					workers: this.getWorkers
				})) {
					try {
						const data = await value();
						if (key != 'info') {
							this[key] = data;
							continue;
						}
						this.title = data.title;
						this.address = data.address;
						this.phones = data.phones;
						this.instagram = data.instagram;
						this.work = data.work;
					}
					catch(err) { console.error(err); }
				}
				this.loading = false;
			}
		},
		beforeMount() {
			this.funcLoader();
		}
	}
</script>