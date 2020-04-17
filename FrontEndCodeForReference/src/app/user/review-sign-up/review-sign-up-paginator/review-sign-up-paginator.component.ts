import { Component, OnInit, OnChanges, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-review-sign-up-paginator',
  templateUrl: './review-sign-up-paginator.component.html',
  styleUrls: ['./review-sign-up-paginator.component.css']
})
export class ReviewSignUpPaginatorComponent implements OnChanges {

  @Input()
  size:number;

  @Output()
  selectedPage:EventEmitter<number> = new EventEmitter<number>();

  numArray: number[];
  startIndex:number;
  endIndex:number;

  constructor() { }

  ngOnChanges() {
    this.numArray=new Array(this.size);
    this.startIndex=0;
    this.endIndex=3;
  }

  pageNumberClicked(event:number){
    this.selectedPage.emit(event);
  }

  increment(){
    this.startIndex=this.startIndex+1;
    this.endIndex=this.endIndex+1;
    this.selectedPage.emit(this.startIndex);
  }

  decrement(){
    this.startIndex=this.startIndex-1;
    this.endIndex=this.endIndex-1;
    this.selectedPage.emit(this.startIndex);
  }

}
