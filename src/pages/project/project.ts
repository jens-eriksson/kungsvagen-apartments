import { WhereCondition } from './../../model/where-condition';
import { ProjectProvider } from './../../providers/project.provider';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnitProvider } from 'src/providers/unit.provider';

@Component({
  selector: 'app-project',
  templateUrl: './project.html',
  styleUrls: ['./project.css']
})
export class ProjectPage implements OnInit {
  project;
  units;

  constructor(
    private route: ActivatedRoute,
    private projectProvider: ProjectProvider,
    private unitProvider: UnitProvider
  ) {
  }

  ngOnInit() {
    let projectId = "kungsvagen";
    this.projectProvider.get(projectId).subscribe(project => {
      this.project = project;
      let conditions: WhereCondition[] = [];
      conditions.push({
        field: 'projectId',
        op: '==',
        value: this.project.id
      })
      this.unitProvider.query(conditions, 'name', 'asc').subscribe(units => {
        this.units = units;
      });
    });
    
  }
}
