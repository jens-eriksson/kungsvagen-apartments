import { SalesAgentProvider } from './../../providers/salesagent.provider';
import { Component, OnInit } from '@angular/core';

@Component({ 
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutPage implements OnInit {
  contacts;

  constructor(
    private salesAgentProvider: SalesAgentProvider
  ) { 
    this.salesAgentProvider.all('name', 'asc').subscribe(salesAgents => {
      this.contacts = salesAgents;
    });
  }

  ngOnInit() {
  }

}
