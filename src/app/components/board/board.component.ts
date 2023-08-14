import { Component, OnInit } from '@angular/core';
import { IPicture } from 'src/app/models/Image.model';
import { ICard, CardStatus } from 'src/app/models/game.model';
import { ImageService } from 'src/app/services/image/image.service';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit{

  cards: ICard[] = []
  flippedCards: ICard[] = [];

  wins = 0;
  losses = 0;
  isGameOver = false;

  constructor(private imageService: ImageService){}
  ngOnInit(): void {
    this.imageService.getImages().subscribe( (response: Array<IPicture>) => {
      const duplicatedPictures = [...response, ...response]
      this.shuffleArray(duplicatedPictures)
      this.cards = duplicatedPictures.map(card => ({status: CardStatus.Hidden, picture: card, id: card.uuid }))
    })
  }

  flipCard(card: ICard){
    if (this.flippedCards.length < 2 && card.status === CardStatus.Hidden) {
      card.status = CardStatus.Flipped;
      this.flippedCards.push(card);

      if (this.flippedCards.length === 2) {
        setTimeout(() => {
          this.checkMatch();
          this.flippedCards = [];
        }, 1000);
      }
    }
  }

  checkMatch(): void {
    if (
      this.flippedCards[0].id === this.flippedCards[1].id
    ) {
      this.flippedCards.forEach(card => (card.status = CardStatus.Matched));
      this.wins++;
      this.checkGameEnd();
    } else {
      this.flippedCards.forEach(card => (card.status = CardStatus.Hidden));
      this.losses++;
    }
  }

  checkGameEnd(): void {
    if (this.wins === this.cards.length / 2) {
      this.isGameOver = true;
    }
  }

  private shuffleArray(array: any[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
