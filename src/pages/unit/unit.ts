import { SalesAgentProvider } from './../../providers/salesagent.provider';
import { UnitProvider } from './../../providers/unit.provider';
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
  leverasbeskrivning;
  faktaruta;
  ekonomi;
  
  constructor(
    private route: ActivatedRoute,
    private unitProvider: UnitProvider,
    private salesAgentProvider: SalesAgentProvider,
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd && event.url.startsWith("/enhet")) {
        this.reload(this.route.snapshot.paramMap.get("id"));
      }
  });
  }

  ngOnInit() {  
    this.reload(this.route.snapshot.paramMap.get("id"));
  }

  reload(id) {
    this.unitProvider.get(id).subscribe(unit => {
      this.unit = unit;

      this.salesAgentProvider.get(unit.salesAgentKey).subscribe(salesAgent => {
        this.salesAgent = salesAgent;
      });

      if(unit.featureCategories.filter(c => c.name === "Leveransbeskrivning")[0]) {
        this.leverasbeskrivning = unit.featureCategories.filter(c => c.name === "Leveransbeskrivning")[0].features;
      }
      else {
        this.leverasbeskrivning = null;
      }
      if(unit.featureCategories.filter(c => c.name === "Faktaruta")[0]) {
        this.faktaruta = unit.featureCategories.filter(c => c.name === "Faktaruta")[0].features;
      }
      else {
        this.faktaruta = null;
      }

      if(unit.featureCategories.filter(c => c.name === "Ekonomi")[0]) {
        this.ekonomi = unit.featureCategories.filter(c => c.name === "Ekonomi")[0].features;
      }
      else {
        this.ekonomi = null;
      }
    });
  }
}
