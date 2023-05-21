import './data/scss/main.scss';
import {createApp} from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './data/app.vue';

// templates:
import templateMain from './data/templates/main.vue';
import templateContacts from './data/templates/contact.vue';
import templateWorkers from './data/templates/workers.vue';
import templatePrices from './data/templates/prices.vue';

const app = createApp(App);
app.use(
	createRouter({
		routes: [
			{
				path: '/',
				component: templateMain
			},
			{
				path: '/contacts',
				component: templateContacts
			},
			{
				path: '/workers',
				component: templateWorkers
			},
			{
				path: '/prices',
				component: templatePrices
			}
		],
		history: createWebHistory(),
		mode: 'history'
	})
).mount('#app');