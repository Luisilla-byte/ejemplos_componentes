import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent],
})
export class HomePage {
  videos = [
    {
      videoUrl: 'https://www.youtube.com/embed/KSkFFe_-xLc',
      likes: 0,
      liked: false,
      Texto: 'Me gusta',
      color: 'primary',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/fDMLb-owurE',
      likes: 0,
      liked: false,
      Texto: 'Me gusta',
      color: 'primary',
    },
    {
      videoUrl: "https://www.youtube.com/embed/Ipxk9TXKE1E",
      likes: 0,
      liked: false,
      Texto: 'Me gusta',
      color: 'primary',
    },
  ];

  darLike(video: any) {
    if(video.liked){
      video.liked = false;
      video.likes--;
      video.Texto = 'Me gusta';
      video.color = 'primary';
    }else{
      video.liked = true;
      video.likes++;
      video.Texto = 'No me gusta';
      video.color = 'danger';
    }
  }
}
