import { Component } from '@angular/core';

@Component({
  selector: 'app-skeleton-load',
  templateUrl: './skeleton-load.component.html',
  styleUrls: ['./skeleton-load.component.css'],
})
export class SkeletonLoadComponent {
  messageSuccess:boolean = false;


  constructor() {}
  ngOnInit() {
    this.showSuccess();
  }

  showSuccess(){

    var that = this;

    setTimeout(function(){
      that.messageSuccess = true;
    },3000);

  }
}
