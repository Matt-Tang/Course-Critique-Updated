import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    var txt;
    if (confirm("Do you want to send the message now?")) {
      window.alert("Message was sent!");
    }
  }

}
