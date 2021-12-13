import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  
  inMission: boolean = false;
  mission: object[] = [];

  experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];

   constructor() { }

   ngOnInit() { }

   addMission(task: object) {
     if (this.mission.includes(task)) {
       this.inMission = true;
     } else {
       this.inMission = false;
     }

     if(this.inMission) {
       let index = this.mission.indexOf(task);
       this.mission.splice(index, 1);
     } else if (!this.inMission) {
       this.mission.push(task);
     }
   }
}
