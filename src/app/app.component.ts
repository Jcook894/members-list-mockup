import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'list-screen-mockup';
  /**
   * Dummy member data
   */
  memberList = [
    {
      MassHealthID: 534253425234,
      MedicaidID: 56789,
      RiskScore: 9000,
      LastName: 'Cook',
      FirstName: 'Julian',
      DOB: '03/08/1994',
      PCP: 'S N',
      CNS: 'C',
      CA: 'S C',
      CP: 'N S',
      CHW: 'S C'
    },
    {
      MassHealthID: 9785897648764,
      MedicaidID: 56789,
      RiskScore: 8000,
      LastName: 'Iannuci',
      FirstName: 'Gino',
      DOB: '03/08/1994',
      PCP: 'S N',
      CNS: 'C',
      CA: 'S C',
      CP: 'N S',
      CHW: 'S C'
    },
    {
      MassHealthID: 1234637567599,
      MedicaidID: 56789,
      RiskScore: 7000,
      LastName: 'Dill',
      FirstName: 'Jason',
      DOB: '03/08/1994',
      PCP: 'S N',
      CNS: 'C',
      CA: 'S C',
      CP: 'N S',
      CHW: 'S C'
    },
    {
      MassHealthID: 6546546756876,
      MedicaidID: 56789,
      RiskScore: 6000,
      LastName: 'Reider',
      FirstName: 'Dylan',
      DOB: '03/08/1994',
      PCP: 'S N',
      CNS: 'C',
      CA: 'S C',
      CP: 'N S',
      CHW: 'S C'
    },
  ];
}
