import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authors: any = [];
  oneAuthor = {name: ""};

  constructor(private _route: Router, private _httpService: HttpService, private messageService: MessageService) { }

  ngOnInit() {
    this.getAuthorsFromService();
  }

  getAuthorsFromService(){ 
    let observable = this._httpService.getAuthors()
    observable.subscribe(data => {
      this.authors = data;
    })
  }

  deleteAuthor(id){
    console.log(id)
    this._httpService.deleteSingleAuthor(id)
    .subscribe((responseData:any)=>{
      if(responseData.error) {
        var messageString = responseData.error.message
        this.messageService.add("Delete error: " + messageString);
        // this._route.navigate(['/home']);
      } else {
        this.messageService.add("Author deleted.");
        this.getAuthorsFromService();
        // this._route.navigate(['/home']);
      }

      
    })
  }

}
