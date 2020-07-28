import { Component, OnInit } from '@angular/core';
import { ColumnOptionsModel, GridService, PaginationModel } from '@xeeva-npm-lib/ui-ang-lib/super-grid';

@Component({
  selector: 'app-events-dashboard',
  templateUrl: './events-dashboard.component.html',
  styleUrls: ['./events-dashboard.component.scss']
})
export class EventsDashboardComponent implements OnInit {

 
  itemsPerPage=10;
  totalItems: number = 30;
  CurrentPage: number =1;

  isAscending: boolean = false;
  currentSortID: number = null;
  allColumns:ColumnOptionsModel[] = [
    {
      colPropName: "Event Id", colPropKeys: ["event"], isVisible: true, width: '20em', isFixedCol: true
  },

  {
      colPropName: "Event Name", colPropKeys: ["title"], isVisible: true, width: '10em', isFixedCol: false
  },

  {
      colPropName: "Projected Savings", colPropKeys: ["projectsavings"], isVisible: true, width: '20em', isFixedCol: false
  },

  {
      colPropName: "Event Type", colPropKeys: ["type"], isVisible: true, width: '10em', isFixedCol: false
  }, 
  {
      colPropName: "Project", colPropKeys: ["project"], isVisible: true, width: '20em', isFixedCol: false
  },
  
  {
      colPropName: "Status", colPropKeys: ["status"], isVisible: true, width: '10em', isFixedCol: false
  },
  {
      colPropName: "Owner", colPropKeys: ["owner"], isVisible: true, width: '10em', isFixedCol: false
  },
  {
      colPropName: "Next Deadline", colPropKeys: ["nextdeadline"], isVisible: true, width: '10em', isFixedCol: false
  },
  {
      colPropName: "Pending With", colPropKeys: ["pendingwith"], isVisible: true, width: '10em', isFixedCol: false
  },
  {
      colPropName: "Suppliers", colPropKeys: ["supplier"], isVisible: true, width: '10em', isFixedCol: false
  }
  ];
  renderedData = [];
  tableData = [];
  constructor(private _gridService:GridService) { }

  ngOnInit(): void {
    for (let i = 0; i < this.totalItems; i++) {
      let num = Math.round(Math.random() * (dummyData.length-1));
     // console.log(num);

      this.tableData.push(JSON.parse(JSON.stringify(dummyData[num])));
      this.tableData[i].Id = i;
       // this.tableData[i].checked =false;
     
    }
    this.renderedData = this.tableData.slice(0, this.itemsPerPage);
  }
  onComments(){
    alert('comments')
  }
 
  onRowClicked(event){
    console.log("onRowClicked",event)
    alert("onRowClicked")
  }
 
  onRowSelected(event){
   console.log("RowSelected",event)
   alert("RowSelected")
  }
  pageChanged(event: PaginationModel): void {
  
    this.currentSortID = null;
    this.renderedData = this.tableData.slice(event.StartIndex, event.EndIndex);
  }
  DownloadCsv(){
    this._gridService.downloadFile(this.tableData,this.allColumns)
  }
}

export const dummyData= [

  {
      event: '103',
      type: 'RFQ',
      action: '-',
      title: 'Safety and Protective',
      project: 'Protective Equipments',
      projectsavings: '$103,000',
      status: 'Draft',
      owner: 'Xeeva',
      nextdeadline: '3/11/2020',
      pendingwith: 'Xeeva',
      supplier: '3',
      collaboration: '-',
  },

  {
      event: '201',
      type: 'RFP',
      action: '-',
      title: 'Insight 701',
      project: 'PayTem rationalize',
      projectsavings: '$210,000',
      status: 'New',
      owner: 'Xeeva',
      nextdeadline: '4/11/2020',
      pendingwith: 'Xeeva',
      supplier: '2 ',
      collaboration: '-',
  },

  {
      event: '240',
      type: 'Auction',
      action: '-',
      title: 'PPV-PPE Canada-Insight 12',
      project: 'PPV WestCoast',
      projectsavings: '$147,000',
      status: 'New',
      owner: 'Xeeva',
      nextdeadline: '5/11/2020',
      pendingwith: 'Xeeva',
      supplier: '3 ',
      collaboration: '-',
  },

  {
      event: '222',
      type: 'RFQ',
      action: '-',
      title: 'HVAC Repair Services',
      project: 'PPV WestCoast',
      projectsavings: '$142,000',
      status: 'Setup',
      owner: 'Xeeva',
      nextdeadline: '3/11/2020',
      pendingwith: 'Xeeva',
      supplier: '6 ',
      collaboration: '-',
  },

  {
      event: '142',
      type: 'RFQ',
      action: '-',
      title: 'Catalog Repricing MAGID',
      project: 'PPE Overhaul',
      projectsavings: '$110,000',
      status: 'Draft',
      owner: 'Xeeva',
      nextdeadline: '7/11/2020',
      pendingwith: 'Xeeva',
      supplier: '5 ',
      collaboration: '-',
  },

  {
      event: '22',
      type: 'RFP',
      action: '-',
      title: 'HVAC Repair Services',
      project: 'PPV WestCoast',
      projectsavings: '$205,000',
      status: 'New',
      owner: 'Xeeva',
      nextdeadline: '8/11/2020',
      pendingwith: 'Xeeva',
      supplier: '7 ',
      collaboration: '-',
  },

  {
      event: '41',
      type: 'Auction',
      action: '-',
      title: 'PPV-PPE Canada-Insight 12',
      project: 'Protective Equipments',
      projectsavings: '$452,000',
      status: 'Draft',
      owner: 'Xeeva',
      nextdeadline: '17/11/2020',
      pendingwith: 'Xeeva',
      supplier: '6 ',
      collaboration: '-',
  },

  {
      event: '147',
      type: 'RFP',
      action: '-',
      title: 'PPV WestCoast',
      project: 'PPV WestCoast',
      projectsavings: '$412,000',
      status: 'Draft',
      owner: 'Xeeva',
      nextdeadline: '27/11/2020',
      pendingwith: 'Xeeva',
      supplier: '8 ',
      collaboration: '-',
  },

  {
      event: '341',
      type: 'Auction',
      action: '-',
      title: 'Insight 7.1',
      project: 'PayTem rationalize',
      projectsavings: '$115,000',
      status: 'Setup',
      owner: 'Xeeva',
      nextdeadline: '23/11/2020',
      pendingwith: 'Xeeva',
      supplier: '7 ',
      collaboration: '-',
  },

  {
      event: '714',
      type: 'RFQ',
      action: '-',
      title: 'Safety and Protective',
      project: 'Protective Equipments',
      projectsavings: '$220,000',
      status: 'New',
      owner: 'Xeeva',
      nextdeadline: '12/11/2020',
      pendingwith: 'Xeeva',
      supplier: '3 ',
      collaboration: '-',
      cssClass:'success'
  },



]

