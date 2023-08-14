import { Component, ViewChild } from '@angular/core';
import { LocalService } from 'src/app/services/local/local.service';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  @ViewChild('userName') name: any
  constructor(private localService: LocalService){}


  onSubmitUser(userName: string){
    if(this.isValid(userName)){
      this.localService.setUser(userName)
      this.name.nativeElement.value = ''
    } else{
      // TODO: Add valition error
    }
  }

  isValid(str: string): boolean {
    const regex = /^(?=.*[a-zA-Z0-9])[\w]+$/
    return str.match(regex) ? true : false
  }
}
