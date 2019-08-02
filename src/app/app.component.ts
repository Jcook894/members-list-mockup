import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MzModalService } from 'ngx-materialize';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  /**
   * Filter for members last name
   */
  memberLastNameFilter: string;
  /**
   * Filter for members DOB
   */
  memberDOBFilter: string | Date;
  /**
   * Filter for members massHealthID
   */
  massHealthIDFilter: string;
  /**
   * Formatting options for date input
   */
  options: Pickadate.DateOptions = {
    format: 'mm/dd/yyyy',
    formatSubmit: 'mm/dd/yyyy',
    selectMonths: true,
    selectYears: 100
  };
  /**
   * Dummy member data
   */
  memberList = [
    {
      MassHealthID: '534253425234',
      MedicaidID: 56789,
      RiskScore: 9000,
      LastName: 'Cook',
      FirstName: 'Julian',
      DOB: '03/08/2019',
      PCP: 'S N',
      CNS: 'C',
      CA: 'S C',
      CP: 'N S',
      CHW: 'S C',
      AssignedToCurrentUser: true
    },
    {
      MassHealthID: '9785897648764',
      MedicaidID: 56789,
      RiskScore: 8000,
      LastName: 'Iannuci',
      FirstName: 'Gino',
      DOB: '03/08/1994',
      PCP: 'S N',
      CNS: 'C',
      CA: 'S C',
      CP: 'N S',
      CHW: 'S C',
      AssignedToCurrentUser: true
    },
    {
      MassHealthID: '1234637567599',
      MedicaidID: 56789,
      RiskScore: 7000,
      LastName: 'Dill',
      FirstName: 'Jason',
      DOB: '03/08/1994',
      PCP: 'S N',
      CNS: 'C',
      CA: 'S C',
      CP: 'N S',
      CHW: 'S C',
      AssignedToCurrentUser: true
    },
    {
      MassHealthID: '6546546756876',
      MedicaidID: 56789,
      RiskScore: 6000,
      LastName: 'Reider',
      FirstName: 'Dylan',
      DOB: '03/08/1994',
      PCP: 'S N',
      CNS: 'C',
      CA: 'S C',
      CP: 'N S',
      CHW: 'S C',
      AssignedToCurrentUser: true
    },
    {
      MassHealthID: '7383659927346',
      MedicaidID: 56789,
      RiskScore: 6000,
      LastName: 'Test',
      FirstName: '6',
      DOB: '03/08/1994',
      PCP: 'S N',
      CNS: 'C',
      CA: 'S C',
      CP: 'N S',
      CHW: 'S C',
      AssignedToCurrentUser: false
    },
    {
      MassHealthID: '79879876583344',
      MedicaidID: 56789,
      RiskScore: 6000,
      LastName: 'Test',
      FirstName: '7',
      DOB: '03/08/1994',
      PCP: 'S N',
      CNS: 'C',
      CA: 'S C',
      CP: 'N S',
      CHW: 'S C',
      AssignedToCurrentUser: false
    },
  ];
  constructor(private cd: ChangeDetectorRef, private modal: MzModalService) {}
  /**
   * Show members assigned/not assigned to user
   */
  showMyMembers: boolean;

  ngOnInit() {
    this.showMyMembers = true;
  }
  /**
   * Toggles table to show members assigned to current user
   * Or show all members.
   * @param showMyMems
   */
  toggleMembersList(showMyMems: boolean) {
    this.showMyMembers = showMyMems;
  }

  showData(rowData: any) {

    console.log(rowData);

   const data = '<mz-modal #basicModal>'
    + '<mz-modal-header>'
     + '<h4>Modal Title</h4>'
    + '</mz-modal-header>'
    + '<mz-modal-content>'
   + '<ul>'
   + '<li>MassHealth Id: '+ rowData.MassHealthID +'</li>'
   + '<li>MassHealth Id: '+ rowData.MedicaidID +'</li>'
   + '<li>MassHealth Id: '+ rowData.RiskScore +'</li>'
   + '<li>MassHealth Id: '+ rowData.LastName +'</li>'
   + '<li>MassHealth Id: '+ rowData.FirstNane +'</li>'
   + '<li>MassHealth Id: '+ rowData.DOB +'</li>'
   + '<li>MassHealth Id: '+ rowData.CA +'</li>'
   + '<li>MassHealth Id: '+ rowData.CHW +'</li>'
   + '<li>MassHealth Id: '+ rowData.CNS +'</li>'
   + '<li>MassHealth Id: '+ rowData.PCP +'</li>'
   + '<li>MassHealth Id: '+ rowData.CHW +'</li>'
   +'</ul>'
   + '</mz-modal-content>'
    + '<mz-modal-footer>'
     + '<button mz-button [flat]="true" mz-modal-close>Disagree</button>'
      + '<button mz-button [flat]="true" mz-modal-close>Agree</button>'
  + '    </mz-modal-footer>'
  + '  </mz-modal>';
    console.log(data);

    this.modal;

  }
}
