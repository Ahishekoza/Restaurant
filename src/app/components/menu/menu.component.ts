import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit,OnDestroy {

  foodDetails:any=[];
  addFood:any;
  values:any;
  // add:any;
  constructor(private _service:MenuService) { }


  ngOnInit(): void {
    this.foodDetails=this._service.foodDetails
    // this._service.add.subscribe(
    //   (data:any)=>{
    //     this.add=data
    //   }
    // )
    this._service.addFood.subscribe(
      (data:any)=>{
        this.addFood=data;
        console.log(this.addFood)
      }
    )
   
    this._service.cartLogo.next(true)
  }



  ngOnDestroy(): void {
    this._service.cartLogo.next(false)
  }


  addCart(id:any){
    this.values=this.addFood.push(id)

    this._service.values.next(this.addFood.length)


    this._service.addFood.next(this.addFood)
    

  }

}
