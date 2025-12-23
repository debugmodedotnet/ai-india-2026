import { Component } from '@angular/core';
import { ISponsors } from '../../models/sponsors';
import { sponsors } from '../../dto/sponsors.json';

@Component({
  selector: 'app-sponsors',
  imports: [],
  templateUrl: './sponsors.html',
  styleUrls: ['./sponsors.scss']
})
export class Sponsors {

  sponsors: ISponsors[] = sponsors;

}
