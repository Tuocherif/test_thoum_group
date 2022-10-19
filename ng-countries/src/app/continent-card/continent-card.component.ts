import { Component, Input } from '@angular/core';
import { Continent } from 'src/app/types/api';

@Component({
  selector: 'app-continent-card',
  templateUrl: './continent-card.component.html',
  styleUrls: ['./continent-card.component.scss']
})


export class ContinentCardComponent {
  @Input()
  continent: Continent;
}
