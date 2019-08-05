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
  memberDOBFilter: string;
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
      DOB: '04/08/1998',
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
      DOB: '05/01/1990',
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
      DOB: '08/08/2004',
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
      LastName: 'Jason',
      FirstName: 'Lee',
      DOB: '05/14/1990',
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
      LastName: 'Mark',
      FirstName: 'Gonzales',
      DOB: '06/21/1987',
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
}
