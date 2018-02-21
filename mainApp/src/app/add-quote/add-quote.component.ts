import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

  authorObject: any = {};
  authorName: string;
  authorId: string;
  newQuote: string;
  errorMessage: string;

  constructor(private _route: ActivatedRoute, private _router: Router, private _httpService: HttpService) { }

  ngOnInit() {
    this._route.paramMap.subscribe((params)=>{
      this._httpService.getSingleAuthor(params.get('id'))
      .subscribe((responseData)=>{
        this.authorObject = responseData;
        this.authorName = this.authorObject.name;
        this.authorId = this.authorObject._id;
      })
    })
  }

  addQuote(){
    console.log("Add quote clicked.")
    this._httpService.addQuoteByAuthorId(this.authorId, {"quotes":[{"content" : this.newQuote}]})
    .subscribe((responseData:any)=>{
      if(responseData.error){
        console.log(responseData)
        this.errorMessage = "Quote must be more than 3 characters"
      } else {
        this._router.navigate(['/quotes/'+ this.authorId]);
      }
    })

  }

}
 