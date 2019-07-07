import { SalesAgentProvider } from './../../providers/sales-agent';
import { UnitProvider } from './../../providers/unit';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-unit',
  templateUrl: './unit.html',
  styleUrls: ['./unit.css']
})
export class UnitPage implements OnInit {
  unit;
  salesAgent;
  
  constructor(
    private route: ActivatedRoute,
    private unitProvider: UnitProvider,
    private salesAgentProvider: SalesAgentProvider,
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd && event.url.startsWith("/enhet")) {
        console.log('unit router event');
        console.log(event);
        this.reload(this.route.snapshot.paramMap.get("id"));
      }
  });
  }

  ngOnInit() {  
    this.reload(this.route.snapshot.paramMap.get("id"));
  }

  reload(key) {
    this.unitProvider.getUnit(key).subscribe(unit => {
      this.unit = unit;
      this.salesAgentProvider.getSalesAgent(unit.salesAgentKey).subscribe(salesAgent => {
        this.salesAgent = salesAgent;
      });
    });
  }
}
