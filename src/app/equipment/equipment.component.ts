import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  
  itemBeingEdited: object = null;

  equipment: object[] = [
    {item: "Habitat Dome"},
    {item: "Drones"},
    {item: "Food Containers"},
    {item: "Oxygen Tanks"}
  ];

  add(itemName: string, isFirst: boolean) {
    let inItem = false;
    for(let i = 0; i < this.equipment.length; i++) {
      if(this.equipment[i]['item'] === itemName){
        inItem = true;
      }
    }
    if(!inItem){
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

  constructor() { }

  ngOnInit() {
  }

}
