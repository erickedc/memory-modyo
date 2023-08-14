import { Component, OnInit } from '@angular/core';
import { LocalService } from './services/local/local.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  user: string | null = null
  constructor(private localService: LocalService){}
  
  ngOnInit(){
    this.localService.userName$.subscribe((user) => {
      this.user = user
    })
  }

  switchUser(){
    this.localService.clear()
  }
}
