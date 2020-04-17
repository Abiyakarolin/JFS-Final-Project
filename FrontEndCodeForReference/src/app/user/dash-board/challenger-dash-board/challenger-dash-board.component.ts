import { Component, OnInit } from '@angular/core';
import { DietService } from '../../diet.service';

@Component({
  selector: 'app-challenger-dash-board',
  templateUrl: './challenger-dash-board.component.html',
  styleUrls: ['./challenger-dash-board.component.css']
})
export class ChallengerDashBoardComponent implements OnInit {

  
  isBatchExpired: boolean = false;

  constructor(private dietService: DietService) { }

  ngOnInit() {
    if(this.dietService.currentUserBatchStatus === 'Expired'){
      this.isBatchExpired=true;
    }
  }


}
