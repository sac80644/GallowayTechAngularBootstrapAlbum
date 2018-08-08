import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})

export class AlbumComponent implements OnInit {

  public albums: IAlbum[];

  constructor(http: HttpClient) { 
    http.get<IAlbum[]>('http://localhost:64708/api/Albums/size/Full').subscribe(result => {
      this.albums = result;
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}

interface IAlbum {
  AlbumID: string;
  AlbumName: string;
  Caption: string;
}
