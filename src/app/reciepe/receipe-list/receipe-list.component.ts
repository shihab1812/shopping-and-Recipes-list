import { Component, OnInit } from '@angular/core';
import { ReciepeModel } from '../reciepe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
 receipes: ReciepeModel[]=[
   new ReciepeModel ('Chicken Kebab','Hello am description','http://www.placehold.it/75X75')
 ];
  constructor() { }

  ngOnInit() {
  }

}
