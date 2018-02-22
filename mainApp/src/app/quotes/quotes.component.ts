import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  authorObject: any = {};
  authorQuotes: any[] = [];
  authorName: string;
  authorId: string;
  errorMessage: string;

  constructor(private _route: ActivatedRoute, private _router: Router, private _httpService: HttpService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this._route.paramMap.subscribe((params)=>{
      this._httpService.getSingleAuthor(params.get('id'))
      .subscribe((responseData)=>{
        this.authorObject = responseData;
        this.authorQuotes = this.authorObject.quotes;
        this.authorName = this.authorObject.name;
        this.authorId = this.authorObject._id;
      })
    })
  }

  upVote(id){
    console.log("Clicked UpVote")
    console.log(id)
    const quoteIdObj = {quoteId: id}
    this._httpService.incrementVote(this.authorId, quoteIdObj)
    .subscribe((responseData:any)=>{
      if(responseData.error){
        this.errorMessage = responseData.error.message;
      } else {
        console.log("VOTED!")
        this.getData();
      }
    })
  }

  downVote(id){
    console.log("Clicked DownVote")
    console.log(id)
    const quoteIdObj = {quoteId: id}
    this._httpService.decrementVote(this.authorId, quoteIdObj)
    .subscribe((responseData:any)=>{
      if(responseData.error){
        this.errorMessage = responseData.error.message;
      } else {
        console.log("Down VOTED!")
        this.getData();
      }
    })
  }

  deleteQuote(id){
    console.log("Clicked Delete Quote")
    console.log(id)
    const quoteIdObj = {quoteId: id}
    this._httpService.deleteQuote(this.authorId, quoteIdObj)
    .subscribe((responseData:any)=>{
      if(responseData.error){
        this.errorMessage = responseData.error.message;
      } else {
        console.log("Deleted!")
        this.getData();
      }
    })
  }

}
