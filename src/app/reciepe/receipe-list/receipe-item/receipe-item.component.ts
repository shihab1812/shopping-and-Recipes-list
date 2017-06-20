import { Component, OnInit } from '@angular/core';
import { ReciepeModel } from '../../reciepe.model';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
   receipes: ReciepeModel[]=[
   new ReciepeModel ('Chicken Kebab','Hello am description','http://www.placehold.it/75X75')
 ];
  constructor() { }

  ngOnInit() {
  }

}
