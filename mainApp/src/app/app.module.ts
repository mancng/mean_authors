import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ShowAllComponent } from './show-all/show-all.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { QuotesComponent } from './quotes/quotes.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowAllComponent,
    EditComponent,
    AddComponent,
    HomeComponent,
    MessagesComponent,
    QuotesComponent,
    AddQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
