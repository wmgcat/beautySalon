<template>
	<div class = 'block content'>
		<span>
			<img src = '../../svg/paragraf.svg' />
		</span>
		<div>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nibh vitae amet. Ipsum, pharetra donec ornare velit. Id at quisque accumsan risus ac ipsum ut. Sit elit, facilisi proin non malesuada sociis tristique. Viverra augue lorem ut quisque quam tortor, malesuada iaculis.</p>
			<br />
			<p>Et elementum at nulla venenatis, faucibus integer. Auctor neque eros, viverra rutrum. Fames ultrices condimentum tortor nec penatibus. Velit imperdiet sapien fringilla vestibulum sit fames.</p>
		</div>
		<ul class = 'grid'>
			<li v-for='service of services'>
				<router-link to = '/prices'>
					<div class = 'image' >
						<img :src = "require(`../../images/services/${service.id}.png`)" />
					</div>
					<h1>{{ service.title }}</h1>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: ['services']
	}
</script>