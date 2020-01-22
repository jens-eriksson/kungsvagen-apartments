import { ProjectProvider } from './../../providers/project';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    private projectProvider: ProjectProvider
  ) {

  }

  ngOnInit() {
    let projectKey = "kungsvagen";
    this.projectProvider.getProject(projectKey).subscribe(project => {
      this.project = project;
    });
    this.projectProvider.getUnits(projectKey).subscribe(units => {
      this.units = units;
    });
  }
}
