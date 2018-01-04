import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	loadedFeature = 'recipe';

	ngOnInit() {
		firebase.initializeApp({
			apiKey: "AIzaSyBVjROjHeDSk_oNxe3Ot9WaJG3te2dEXtM",
    	authDomain: "ng-recipe-book-ce5a5.firebaseapp.com"
		});
	}

	onNavigate(feature: string) {
		this.loadedFeature = feature;
	}
}
