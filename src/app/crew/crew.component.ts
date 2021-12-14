import { Component, OnInit } from '@angular/core';

type Candidate = {
  name: string;
  photo: string;
  missionCount: number;
};

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crew: object[] = [];

  candidates: Candidate[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg',
     missionCount: 2},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg',
     missionCount: 5},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg',
     missionCount: 1},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg',
     missionCount: 1},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg',
     missionCount: 0},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg',
     missionCount: 0},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg',
     missionCount: 4}
  ];
  
  constructor() { }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember(member: Candidate) {
    if (this.crew.includes(member)) {
      this.inCrew = true;
    } else {
      this.inCrew = false;
    }

    if(this.inCrew) {
      let index = this.crew.indexOf(member);
      this.crew.splice(index, 1);
    } else if (!this.inCrew && this.crew.length < 3) {
      this.crew.push(member);
    }
  }
}
