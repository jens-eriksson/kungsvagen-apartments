import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.html',
  styleUrls: ['./image-modal.css']
})
export class ImageModalComponent implements OnInit {

  constructor() { }
  @Input() images;
  @Input() id;
  @Input() title = "";

  ngOnInit() {
  }

}