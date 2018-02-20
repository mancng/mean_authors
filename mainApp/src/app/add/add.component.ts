import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  authorName: string;
  newAuthor = {name: ""};

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

  addTask(){
    this._httpService.createAuthor({name: this.authorName})
    .subscribe((responseData:any)=>{
      if(responseData.errors){
        console.log('errors', responseData);
      } else {
        console.log('success!', responseData);
        this._router.navigate(['/home']);
      }
    })
  }

}
 