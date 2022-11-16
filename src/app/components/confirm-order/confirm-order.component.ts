import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { MenuService } from 'src/app/Services/menu.service';
import { PersonalDetailsService } from 'src/app/Services/personal-details.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.component.html',
  styleUrls: ['./confirm-order.component.css']
})
export class ConfirmOrderComponent implements OnInit {

  personalInfo={
    Customername:'',
    phoneNo:'',
    address:'',
    modeOfPayement:'',
  }
  options=['Cash on Delivery','UPI','Net Banking']

  // Storing the food Id
  foodItemId:any;
  // Storing the details of food 
  foodSelected:any=[];

  // total of food
  totalBill:any;
  
  TAndC:any;
  

  constructor(private _personalInfo:PersonalDetailsService,private service:MenuService,private route:Router){}

   ngOnInit(): void {
    

    this.service.addFood.subscribe(
      (data:any)=>{
        this.foodItemId=data
      }
    )

    this.service.foodDetails.forEach((element:any)=>{
      // console.log(element.id)
      this.foodItemId.forEach(
        (id:any)=>{
            if(id==element.id){
              this.foodSelected.push(element)
              console.log(this.foodSelected)
            }
        }
      )
      
    })
    
    this.service.grandTotal.subscribe(
      (data:any)=>{
        this.totalBill=data
      }
    )
   }





  Submit(){


    if(this.personalInfo.Customername.trim()=='' || this.personalInfo.Customername==null){
      Swal.fire("Enter your name")
      return;
    }

    if(this.personalInfo.phoneNo.length<10){
      Swal.fire("Enter your ten digit Number")
      return;
    }

    if(!this.TAndC){
      Swal.fire("Please Select terms and condition")
    }
    else{
      this._personalInfo.addPersonalInfo(this.personalInfo).subscribe(
        (data:any)=>{
          Swal.fire("Thank you for your order")

          this.personalInfo={
            Customername:'',
            phoneNo:'',
            address:'',
            modeOfPayement:'',
          }

          this.TAndC=false

          


        },
        (error)=>{
          Swal.fire("Sorry we were unable to proceed the order")
        }
      )
    }
  }



}
