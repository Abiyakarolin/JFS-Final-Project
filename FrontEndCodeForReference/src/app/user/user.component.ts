import { Component, OnInit } from '@angular/core';
import { DietService } from './diet.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  employees:string[];

  constructor(private dietService:DietService) { }

  ngOnInit(): void {
    // this.dietService.getUsers().subscribe(
    //   response =>this.handleSuccessfulResponse(response),
    //  );
  }

  handleSuccessfulResponse(response)
{
    this.employees=response;
}

}
