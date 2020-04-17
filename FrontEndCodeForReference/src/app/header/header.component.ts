import { Component, OnInit } from '@angular/core';
import { DietService } from '../user/diet.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dietService : DietService) { }

  ngOnInit(): void {
  }

}
