import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authors: any = [];
  oneAuthor = {name: ""};

  constructor(private _route: Router, private _httpService: HttpService) { }

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
    .subscribe((responseData)=>{
      console.log(responseData)
      this._route.navigate(['/home']);   
    })
  }

}
