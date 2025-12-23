import { Component, OnInit } from '@angular/core';
import { ISpeakers } from '../../models/speakers';
import { speakers } from '../../dto/speakers.json';

@Component({
  selector: 'app-speakers',
  imports: [],
  templateUrl: './speakers.html',
  styleUrls: ['./speakers.scss']
})
export class Speakers implements OnInit {

  speakers: ISpeakers[] = speakers;

  ngOnInit(): void {
    this.speakers.sort((a, b) => a.id - b.id);
  }

}
