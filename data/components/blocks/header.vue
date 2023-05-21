<template>
	<div class = 'block parallax'>
		<div class = 'image'></div>
		<h1>Салон красоты «{{ title }}» на Крестовском</h1>
		<span class = 'scroll'>
			<span>
				<svg width = 20 height = 30>
					<rect width="19" height="29" rx="7.5" ry="7.5" transform="translate(.5 0.5)" fill="none" stroke="#fff"/>
					<circle r="2" transform="translate(10 9)" fill="#fff" id = 'scrollCircle'/>
				</svg>
			</span>
			<p>Прокрутите вниз</p>
		</span>
	</div>
</template>

<script>
	export default {
		props: ['title']
	}
</script>