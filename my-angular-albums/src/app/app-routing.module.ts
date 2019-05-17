import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AlbumListComponent } from './albums/album-list/album-list.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';
import { AddAlbumComponent } from './albums/add-album/add-album.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "", redirectTo: "/about", pathMatch: "full" },
  { path: "about", component: AboutComponent },
  { path: "albums", component: AlbumListComponent },
  { path: "albums/:id", component: AlbumDetailsComponent },
  { path: "add-album", component: AddAlbumComponent },
  { path: "login", component: LoginComponent },
  { path: "**", component: NotfoundComponent, pathMatch: "full" }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}

