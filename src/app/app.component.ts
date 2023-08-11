import { Component, OnInit } from '@angular/core';
import { ImageService } from './services/image/image.service';
import { IPicture } from './models/Image.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  pictures: Array<IPicture> = []

  constructor(private imageService: ImageService){}
  
  ngOnInit(){
    this.imageService.getImages().subscribe( (response: Array<IPicture>) => {
      console.log("res", response)
      this.pictures = response
    })
  }
}
