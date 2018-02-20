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

  constructor(private _httpService: HttpService, private _router: Router, private messageService: MessageService) { }

  ngOnInit() {
  }

  addTask(){
    this._httpService.createAuthor({name: this.authorName})
    .subscribe((responseData:any)=>{
      if(responseData.error){
        this.messageService.add("Author's name must be more than 2 characters")
      } else {
        console.log('success', responseData);
        this.messageService.add("Author added");
        this._router.navigate(['/']);
      }
    })
  }

}
 