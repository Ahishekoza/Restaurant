import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MenuService } from 'src/app/Services/menu.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  values:any=[];
  foodSelected:any=[];
  grandTotal:any;
  checkout:any;
  constructor(private service:MenuService) { 
    
  }


  

  
  ngOnInit(): void {


    

    // Subscribing the value of grandTotal 
    this.service.grandTotal.subscribe(
      (data:any)=>{
        this.grandTotal=data
      }
    )
   
    
    // values of selected Ids
    this.service.addFood.subscribe(
      (data:any)=>{
        this.values=data
        
      }
    )


    // Fetching the object from the list on the basis of Values which contains id of selected food
    this.service.foodDetails.forEach((element:any)=>{
     
      this.values.forEach(
        (id:any)=>{
            if(id==element.id){
              this.foodSelected.push(element)
         
            }
            
        }
      )
      
    })

    this.service.grandTotal.next(0);
    this.foodSelected.forEach((data:any)=>{
      this.grandTotal+=data.foodPrice
      
    })
    this.service.grandTotal.next(this.grandTotal)


    


    // If and only if you have any item then only check out button will be displayed
    this.checkout=this.values
  
  }


  // Removing the food item and updating the food Details list and total price
  removeItem(item:any){
 

    this.foodSelected.forEach((_element: any,index: any)=>{
      // console.log(_element)
      if(_element.id==item){
        this.foodSelected.splice(index,1)


        this.grandTotal-=_element.foodPrice;
        this.service.grandTotal.next(this.grandTotal)

        // removing checkout button onces list is zero
        this.checkout.length-=1
        
      }

    })

    // updating array ang length
    this.service.values.next(this.foodSelected.length)
    this.service.addFood.next(this.foodSelected)
  }
  
  // Deleting all the elements present in the list
  emptycart(){
    this.foodSelected=[];
    this.service.addFood.next(this.foodSelected)
    this.service.values.next(this.foodSelected.length)
    this.service.grandTotal.next(0)
    
    // Ṛemoving the checkout button onces list is empty
    this.checkout.length=0

  }





}

