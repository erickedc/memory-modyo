import { Component, Input, OnInit } from '@angular/core';
import { IPicture } from 'src/app/models/Image.model';
import { ICard, CardStatus } from 'src/app/models/game.model';
import { ImageService } from 'src/app/services/image/image.service';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() user!: string
  cards: ICard[] = []
  flippedCards: ICard[] = [];

  wins = 0;
  losses = 0;
  isGameOver = false;

  constructor(private imageService: ImageService) { }
  ngOnInit(): void {
    this.initGame()
  }

  initGame(): void {
    this.imageService.getImages().subscribe((response: Array<IPicture>) => {
      this.shuffleArray(response)
      const filteredResponse = response.splice(0, 10)
      let duplicatedPictures = [...filteredResponse, ...filteredResponse]
      this.shuffleArray(duplicatedPictures)
      this.cards = duplicatedPictures.map(card => ({ status: CardStatus.Hidden, picture: card, id: card.uuid }))
    })
  }

  flipCard(card: ICard) {
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
    } else {
      this.flippedCards.forEach(card => (card.status = CardStatus.Hidden));
      this.losses++;
    }
    this.checkGameEnd();
  }

  checkGameEnd(): void {
    if (this.wins * 2 === this.cards.length) {
      this.isGameOver = true;
    }
  }

  private shuffleArray(array: any[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  restartGame(): void{
    this.cards = []
    this.wins = 0
    this.losses = 0
    this.flippedCards = []
    this.isGameOver = false
    this.initGame()
  }
}
