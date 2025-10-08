import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonButton, IonCard, IonCardHeader} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonButton, IonCard, IonCardHeader],
})
export class AppComponent {
  constructor() {}
}
