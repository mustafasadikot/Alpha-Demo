import { Component, OnInit } from '@angular/core';
import { componentRefresh } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-material-flow',
  templateUrl: './material-flow.component.html',
  styleUrls: ['./material-flow.component.css']
})
export class MaterialFlowComponent implements OnInit {

  private filterDataSource = [];
  private detailDataSource = [];
  private popupVisible = false;
  // Turn enum into array
  ToArray(enumme) {
      return Object.keys(enumme)
          .filter(StringIsNumber)
          .map(key => enumme[key]);
  }

  private test = [
    {'ID' : 0, "Display": "Pending"},
    {'ID' : 1, "Display": "Done"},
    {'ID' : 2, "Display": "Rejected"},
    {'ID' : 3, "Display": "InProgress"},
    {'ID' : 4, "Display": "NotApplicable"}
  ]

  private components = [
    { ComponentId: 1, Name: "Left Type Cylinder", FixtureId: 1, Design: status.Done, Manufacturing: status.InProgress, QA: status.Pending, Assembly: status.Pending },
    { ComponentId: 2, Name: "Right Type Cylinder", FixtureId: 1, Design: status.Done, Manufacturing: status.Done, QA: status.Done, Assembly: status.InProgress },
    { ComponentId: 3, Name: "Hexagon socket head cap screw ISO 4762 - M6 x 12", FixtureId: 1, Design: status.Done, Manufacturing: status.InProgress, QA: status.Rejected, Assembly: status.Pending },
    { ComponentId: 4, Name: "Hexagon socket head cap screw ISO 4762 - M6 x 16", FixtureId: 1, Design: status.InProgress, Manufacturing: status.Rejected, QA: status.Pending, Assembly: status.Pending },
    { ComponentId: 5, Name: "Hexagon socket head cap screw ISO 4762 - M6 x 20", FixtureId: 1, Design: status.NotApplicable, Manufacturing: status.NotApplicable, QA: status.Pending, Assembly: status.Pending },
    { ComponentId: 6, Name: "Hexagon socket head cap screw ISO 4762 - M6 x 45", FixtureId: 1, Design: status.Done, Manufacturing: status.InProgress, QA: status.Pending, Assembly: status.Pending },
    { ComponentId: 7, Name: "Lock washer", FixtureId: 1, Design: status.Done, Manufacturing: status.InProgress, QA: status.Pending, Assembly: status.Pending },
    { ComponentId: 8, Name: "Welding Structure", FixtureId: 2, Design: status.Done, Manufacturing: status.InProgress, QA: status.Pending, Assembly: status.Pending },
    { ComponentId: 9, Name: "Base plate", FixtureId: 2, Design: status.Done, Manufacturing: status.InProgress, QA: status.Pending, Assembly: status.Pending },
    { ComponentId: 10, Name: "Change plate", FixtureId: 2, Design: status.Done, Manufacturing: status.InProgress, QA: status.Pending, Assembly: status.Pending },
    { ComponentId: 11, Name: "Cylinder spacer", FixtureId: 2, Design: status.Done, Manufacturing: status.InProgress, QA: status.Pending, Assembly: status.Pending },
    { ComponentId: 12, Name: "Clamp", FixtureId: 2, Design: status.Done, Manufacturing: status.InProgress, QA: status.Pending, Assembly: status.Pending },
    { ComponentId: 13, Name: "Clamp pad", FixtureId: 2, Design: status.Done, Manufacturing: status.InProgress, QA: status.Pending, Assembly: status.Pending },
    { ComponentId: 14, Name: "Orientation pin", FixtureId: 2, Design: status.Done, Manufacturing: status.InProgress, QA: status.Pending, Assembly: status.Pending },

  ]
  private sourceComponents: Array<any>;
  private fixture: Fixture = new Fixture();
  private fixtures: Array<Fixture> = [
    { Id: 0, Name: 'All' },
    { Id: 1, Name: 'HYD. HMC FIXTURE' },
    { Id: 2, Name: 'PUN. HMC FIXTURE' },
  ] 

  private componentDetails = [
    { ComponentId: 1,
      Design: [
        { Process: 'Drawing', Status: status.Done, Comment: "Drawing submitted for design."},
        { Process: 'Design', Status: status.Done, Comment: "Solid work design done."},
      ],
      Manufacturing: [
        { Process: 'Casting', Status: status.Done, Comment: "Casting done."},
        { Process: 'Drilling', Status: status.InProgress, Comment: "Drill holes under process"},
        { Process: 'Bending', Status: status.Pending, Comment: ""},
        { Process: 'CNC Finish', Status: status.Pending, Comment: ""},
      ],
      QA: [
        { Process: 'Fitting Test', Status: status.Pending, Comment: ""},
        { Process: 'Strength Test', Status: status.Pending, Comment: ""},
        { Process: 'Visual Inspection', Status: status.Pending, Comment: ""},
      ],
      Assembly: [
        { Process: 'Main Assembly', Status: status.Pending, Comment: ""}
      ] }
  ]
  
  constructor() { 
      
  }
  
  changed = ( event ) => {
    if(event.selectedItem){
      if(event.selectedItem.Id == 0){
        this.sourceComponents = this.components;
      }
      else{
        this.sourceComponents = this.components.filter(p => p.FixtureId == event.selectedItem.Id);
      }      
    }    
  }

  private onCellPrepared = (e) => {
    if(e.rowType === "data" && e.column.command === "edit") {
        var isEditing = e.row.isEditing,
            $links = e.cellElement.find(".dx-link");

        $links.text("");

        if(isEditing){
            $links.filter(".dx-link-save").dxButton({
                icon: "save"
            });
            $links.filter(".dx-link-cancel").dxButton({
                icon: "revert"
            });
        } else {
            $links.filter(".dx-link-edit").dxButton({
                icon: "edit"
            });
            
            $links.filter(".dx-link-delete").dxButton({
                icon: "trash"
            });
          }
        }
  }
  onCellClick = (event) => {
    if(event && event.rowType == 'data' && (event.column.dataField == "Design" || event.column.dataField == "Manufacturing" || event.column.dataField == "QA" || event.column.dataField == "Assembly")){
      
      this.detailDataSource = this.componentDetails
                                  .filter(p => p.ComponentId == event.data.ComponentId)
                                  .map(p => p[event.column.dataField])[0];
                                  
      this.popupVisible = true;
    }
  }
  ngOnInit() {
    this.filterDataSource = Object.keys(status)
                                    .filter(StringIsNumber)
                                    .map(key => ({ ID: key, Display: status[key] }))
    this.sourceComponents = this.components;

  }

}

enum status {
  Pending,
  Done,
  Rejected,
  InProgress,
  NotApplicable
}

class Fixture {
    Id: number
    Name: string
}

const StringIsNumber = value => isNaN(Number(value)) === false;