import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonButton,
} from '@ionic/angular/standalone';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
	standalone: true,
	imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
	readonly #http = inject(HttpClient);
	readonly videoSrc =
		'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_5MB.mp4';

	sendUntouchedRequest() {
		this.#http
			.post('https://jsonplaceholder.typicode.com/posts', {
				title: 'foo',
				body: 'bar',
				userId: 1,
			})
			.subscribe(external => console.log({ external }));
	}

	sendInterceptedRequest() {
		this.#http
			.post('typicode.com/posts', {
				title: 'foo',
				body: 'bar',
				userId: 1,
			})
			.subscribe(external => console.log({ external }));
	}
}
