import { Component, OnInit } from '@angular/core';
import { PercentPipe } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pipe: any = new PercentPipe("en-US");
  constructor() { }

  ngOnInit() {
  }

  private equipments = [{
      type: "Available",
      val: 16
  }, {
      type: "In Use",
      val: 22
  }, {
      type: "Overloaded",
      val: 9
  }, {
      type: "Non Functional",
      val: 3
  }];

  private dataByMonth = [
    { month: "Jan", fixture: 5, component: 45 },
    { month: "Feb", fixture: 9, component: 67 },
    { month: "Mar", fixture: 13, component: 86 },
    { month: "Apr", fixture: 11, component: 35 },
    { month: "May", fixture: 6, component: 64 },
    { month: "Jun", fixture: 7, component: 47 },
    { month: "Jul", fixture: 16, component: 92 },
    { month: "Sep", fixture: 11, component: 76 },
  ]
  
  private progressData = [{
            arg: "Design",
            delay: 3,
            onTime: 6,
            notStarted: 1,
            early: 1
        }, {
            arg: "Manufacture",
            delay: 10,
            onTime: 13,
            notStarted: 6,
            early: 8
        }, {
            arg: "QA",
            delay: 2,
            onTime: 14,
            notStarted: 6,
            early: 0
        }, {
            arg: "Assemble",
            delay: 0,
            onTime: 12,
            notStarted: 8,
            early: 0
        }];
  
  customizeTooltip = (arg: any) => {
    return {
        text: arg.valueText + " - " + this.pipe.transform(arg.percent, "1.2-2")
    };
  }
}
