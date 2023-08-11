import { Component, Input } from '@angular/core';
import { IPicture } from 'src/app/models/Image.model';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() picture!: IPicture

  constructor(){

  }
}
