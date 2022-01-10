import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

// Inject singleton MessageService when creating MessagesComponent
// Angular only binds to public components properties
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
