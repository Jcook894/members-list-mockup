import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';

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
   * Form Controls
   */
  // @ViewChild('tableFilters', {
  //   static: false
  // })
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
      DOB: '03/08/1994',
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
  constructor(private cd: ChangeDetectorRef){}
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
