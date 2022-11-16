import { Component, OnInit,OnDestroy } from '@angular/core';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foodDetails:any=[];
  constructor(private _service:MenuService) { }

  ngOnInit(): void {
    this.foodDetails=this._service.foodDetails
    console.log(this.foodDetails)

    
  }

  

}
