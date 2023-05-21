<template>
	<div class = 'block content page'>
		<h1>Контакты</h1>
		
		<a class = 'map' href="https://yandex.com/maps/?um=constructor%3A885d853f05a824345f2ec2c7c41f123ae023cd3ee45bb0e50c8b4aab22dae3d4&amp;source=constructorStatic" target="_blank">
		<img src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A885d853f05a824345f2ec2c7c41f123ae023cd3ee45bb0e50c8b4aab22dae3d4&amp;width=600&amp;height=300&amp;lang=en_FR" alt="" style="border: 0;" />
		</a>
		
		<tempSponsors :sponsors = 'sponsors' />
	</div>
</template>

<script>
	import tempSponsors from '../components/sponsors.vue';

	export default {
		props: ['phones', 'address', 'work', 'sponsors'],
		components: { tempSponsors }
	}
</script>