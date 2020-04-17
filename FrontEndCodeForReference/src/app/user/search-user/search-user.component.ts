import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';
import { DietService } from '../diet.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  searchForm: FormGroup;
  categories: string[]=['User Id','User Email', 'Full Name', 'Group', 'Batch'];
  users: User[];

  constructor(private dietService : DietService, private fb : FormBuilder) { }

  ngOnInit(): void {

    this.searchForm = this.fb.group({
      'filter':['', [Validators.required]],
      'filterValue':['', Validators.required]
    });

  }

  get filter(){
    return this.searchForm.get("filter");
  }

  get filterValue(){
    return this.searchForm.get("filterValue");
  }

  search(){
    if(this.searchForm.valid){
      const value = this.searchForm.value["filterValue"];
      const filter = this.searchForm.value["filter"];
      if(filter=='User Id'){
        this.dietService.getUserWithUserId(value).subscribe((response)=>{
          this.users=[];
          if(response){
            this.users.push(response);
          }
        });
      }else if(filter=='Full Name'){
        this.dietService.getAllUsersWithFullName(value).subscribe((response)=>{
          this.users=response;
        });
      }else if(filter=='Group'){
        this.dietService.getAllUsersWithGroup(value).subscribe((response)=>{
          this.users=response;
        });
      }else if(filter=='Batch'){
        this.dietService.getAllUsersWithBatch(value).subscribe((response)=>{
          this.users=response;
        });
      }
      else if(filter=='User Email'){
        this.dietService.getUserWithEmail(value).subscribe((response)=>{
          this.users=[];
          if(response){
            this.users.push(response);
          }
        })
      }
    }
  }

}
