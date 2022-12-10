import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReaderComponent } from './reader/reader.component';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "reader/:ebook", component: ReaderComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
