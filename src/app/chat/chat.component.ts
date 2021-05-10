import { Component, OnInit } from '@angular/core';
import { ChatService, userData } from '../chat.service';
import { PusherService } from '../pusher.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  countDown: number;
  userData: userData = {
    name: 'bram',
    email: ''
  };

  constructor(
    private chatService: ChatService,
    private pusherService: PusherService
  ) {
    this.countDown = 0;
  }

  ngOnInit(): void {
    this.chatService.getUserCount()
      .subscribe(data => {
        // this.countDown = data.targetCount - data.userCount
      });
    

    // this.chatService.login(this.userData).subscribe(data => {
        
      // console.log("User is logged in");
      // this.router.navigateByUrl('/');
    // });

    this.pusherService.subScribeToChannel('my-channel', ['my-event'], (data: any) => {
      console.log(data)
      // this.countDown -= 1;
    });
  }

}

