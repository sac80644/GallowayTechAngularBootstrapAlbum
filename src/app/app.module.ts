import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { AlbumComponent } from './album/album.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
    PhotoDetailComponent,
    AlbumComponent,
    AlbumDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
