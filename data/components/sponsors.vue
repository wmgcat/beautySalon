<template>
	<ul class = 'list'>
		<li v-for='sponsor of sponsors'>
			<img :src = "require('../images/sponsors/' + sponsor.image)" :alt="sponsor.alt" />
		</li>
	</ul>
</template>

<script>
	export default {
		props: ['sponsors']
	}
</script>