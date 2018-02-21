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
    this._httpService.incrementVote(this.authorId, {quoteID: id})
    .subscribe((responseData:any)=>{
      if(responseData.error){
        this.errorMessage = responseData.error.message;
      } else {
        console.log("VOTED?")
      }
    })
  }

  downVote(id){
    console.log("Clicked DownVote")
    console.log(id)
  }

  deleteQuote(id){
    console.log("Clicked Delete Quote")
    console.log(id)
  }

}
