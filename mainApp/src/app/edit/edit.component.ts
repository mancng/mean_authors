import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  authorToEdit: any = {_id: "", name: "", quotes: [], votes: 0, createdAt: "", updatedAt: ""};
  authorName: string;
  authorId: string;
  errorMessage: string;

  constructor(private _route: ActivatedRoute, private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
    this._route.paramMap.subscribe((params) =>{
      this._httpService.getSingleAuthor(params.get('id'))
      .subscribe((responseData)=>{
        this.authorToEdit = responseData;
        this.authorName = this.authorToEdit.name;
        this.authorId = this.authorToEdit._id;
      })
    })
  }

  onSubmit(){
    var toEdit = {name: this.authorName}
    this._httpService.updateSingleAuthor(this.authorId, toEdit)
    .subscribe((responseData:any)=>{
      if(responseData.error){
        this.errorMessage = responseData.error.message;
      } else {
        this._router.navigate(['/']);
      }
    })
  }

}
