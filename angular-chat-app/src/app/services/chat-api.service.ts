import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Conversation} from "../models/conversation";

@Injectable({
  providedIn: 'root'
})
export class ChatApiService {

  constructor(private httpClient: HttpClient) { }

  getConversations(): Observable<Conversation[]> {
    return this.httpClient.get<Conversation[]>("");
  }

}
