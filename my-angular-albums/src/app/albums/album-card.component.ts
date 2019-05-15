import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Album } from './album.model';

@Component({
  selector: 'app-albums',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {

  @Input()
  album: Album;

  constructor() { }

  ngOnInit() {
  }

}
