import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit{
  @Input() wins: number = 0
  @Input() losses: number = 0

  ngOnInit(): void {
      
  }
}
