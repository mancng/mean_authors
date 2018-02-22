import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors(){
    return this._http.get('/api/authors');
  }

  getSingleAuthor(id){
    return this._http.get(`/api/edit/${id}`);
  }

  createAuthor(newAuthor){
    return this._http.post('/api/new', newAuthor);
  }

  updateSingleAuthor(id, theAuthor){
    return this._http.put(`/api/edit/${id}`, theAuthor);
  }

  deleteSingleAuthor(id){
    return this._http.delete(`/api/edit/${id}`);
  }

  addQuoteByAuthorId(id, newQuote){
    return this._http.put(`/api/write/${id}`, newQuote);
  }

  incrementVote(authorId, quoteIdObj){
    return this._http.put(`/api/write/${authorId}/voteup`, quoteIdObj);
  }

  decrementVote(authorId, quoteIdObj){
    return this._http.put(`/api/write/${authorId}/votedown`, quoteIdObj);
  }

  deleteQuote(authorId, quoteIdObj){
    return this._http.put(`/api/write/${authorId}/delete`, quoteIdObj)
  }


}
