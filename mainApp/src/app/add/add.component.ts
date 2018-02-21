import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  authorName: string;
  newAuthor = {name: ""};
  errorMessage: string;

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

  addTask(){
    this._httpService.createAuthor({name: this.authorName})
    .subscribe((responseData:any)=>{
      if(responseData.error){
        this.errorMessage = "Author's name must be more than 2 characters"
      } else {
        this._router.navigate(['/']);
      }
    })
  }

}
 