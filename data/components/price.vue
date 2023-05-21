<template>
	<ul class = 'list'>
		<li v-for='service of services'>
			<div class = 'content'>
				<div>
					<h1>{{ service.title }}</h1>
					<ul class = 'props'>
						<li v-for = 'props of service.props'>
							<span>{{ props }}</span>
						</li>
					</ul>
				</div>
				<h2>{{ service.price }} ₽</h2>
			</div>
			<hr>
		</li>
	</ul>
</template>
<script>
	export default {
		props: ['services']
	}
</script>