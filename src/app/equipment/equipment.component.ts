import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  
  equipment: object[] = [
    {item: "habitat dome"},
    {item: "drones"},
    {item: "food containers"},
    {item: "oxygen tanks"}
  ];
  constructor() { }

  ngOnInit() {
  }

  itemBeingEdited: object = null;


  add(itemName: string) {
    let inObj = false;
    for(let i = 0; i < this.equipment.length; i++) {
      if(this.equipment[i]['name'] === itemName){
        inObj = true;
      }
    }
    if(!inObj){
      this.equipment.push({item: itemName});
    }
  }

  remove(item: object) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }

  edit(item: object) {
    this.itemBeingEdited = item;
  }

  save(name: string, item: object) {
    item['item'] = name;
    this.itemBeingEdited = null;
  }
}
