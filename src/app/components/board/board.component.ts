import { Component, OnInit } from '@angular/core';
import { IPicture } from 'src/app/models/Image.model';
import { ImageService } from 'src/app/services/image/image.service';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit{

  pictures: Array<IPicture> = []

  constructor(private imageService: ImageService){

  }
  ngOnInit(): void {
    this.imageService.getImages().subscribe( (response: Array<IPicture>) => {
      console.log("res", response)
      this.pictures = response
    })
  }
}
