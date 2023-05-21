<template>
	<div class = 'block content page'>
		<h1>Наши мастера</h1>
		<ul class = 'grid'>
			<li v-for='worker of workers'>
				<div class = 'image'>
					<img :src = "require(`../images/workers/${worker.photo}.png`)"/>
				</div>
				<h1>{{ worker.fullname }}</h1>
				<h2>{{ worker.prof }}</h2>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: ['workers']
	}
</script>