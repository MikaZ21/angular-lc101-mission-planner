import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];

   inCargo: boolean = false;
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addItem(item : object) {
    console.log("Hello!");
    console.log(this.cargoHold);

     if (this.cargoHold.includes(item)) {
       this.inCargo = true;
     } else {
       this.inCargo = false;
     }
     
    // //  cargoHold.filter(x => x.name===item.name).length===2
    //  if(this.cargoHold.filter(x => x['name']===item['name']).length===2) {
    //    return false;
    //  }



      this.cargoHold.push(item)
      console.log("Goodbye");
      console.log(this.cargoHold);

      this.cargoMass += item['mass'] 
      return this.maximumAllowedMass - this.cargoMass <= 200;
   } 

   noMoreThanTwo(item: object) {
    if(this.cargoHold.filter(x => x['name']===item['name']).length===2) {
      return true;
    } else {
      return false;
    }
   }
}
