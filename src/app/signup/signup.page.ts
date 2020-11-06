import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private toastCtrl: ToastController, private route: Router) { }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: 'Cadastro realizado com sucesso!',
      duration: 2000,
      position: 'middle'
    });

    this.route.navigate(['/'])

    toast.present();
  }
  
  ngOnInit() {  
  }

}
