import { Component, Input } from '@angular/core';
import { CardStatus, ICard } from 'src/app/models/game.model';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card!: ICard
  cardStatus = CardStatus
}
