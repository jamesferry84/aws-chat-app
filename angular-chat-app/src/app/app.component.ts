import {Component, OnInit} from '@angular/core';
import {ChatApiService} from "./services/chat-api.service";
import {Conversation} from "./models/conversation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-chat-app';
  conversations: Conversation[] = [];

  constructor(private apiService: ChatApiService) {



  }

  ngOnInit(): void {

    this.apiService.getConversations().subscribe(d => {
      console.log(d);
      this.conversations = d;
    });
  }
}
