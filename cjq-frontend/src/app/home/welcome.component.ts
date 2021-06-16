import { Component } from '@angular/core';
import { ContactService } from '../shared/contact.service';

@Component({
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  public pageTitle = 'Bienvenu au Club de Judo de Québec';
  public vale = 1;
  


  onClick(): void {
    console.log('Clicou no botao de envio');
    let res = this.validateInput();
    console.log("Validation: ", res);
    if(res){
      let res = this.submitContact();
      console.log("Submit: ", res); 
    }
  }

  validateInput(): boolean {
    if(this.vale == 1 ){
      return true;
    }
    return false;
  }

  submitContact(): boolean{
    //this.ContactService.
    return false;
  }
}
