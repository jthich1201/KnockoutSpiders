import { Component, OnInit } from '@angular/core';

import { createVendiaClient } from '@vendia/client';
  const client = createVendiaClient({
    apiUrl: `https://z2z10z6138.execute-api.us-west-1.amazonaws.com/graphql/`,
    websocketUrl: `wss://ssope56ubl.execute-api.us-west-1.amazonaws.com/graphql`,
    apiKey: `naUSK3QaBR8gPJcjj8N8diBaDNcuBdSe9UgDooCJciD`,
  });
  const { entities } = client;

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  ngOnInit()
  {
  }

  // constructor() { }
  //
  // ngOnInit(): void {
  //   async function async() {
  //     console.log('works???');
  //     // const employeeResponse = await entities.employee.list();
  //     const employeeResponse = await entities.employee.add({
  //       age: 14,
  //       avgHourseOfExercisePerWeek: 56,
  //       avgHourseOfWorkPerWeek: 67,
  //       bloodPressure: '78',
  //       bodyTemperature: 78,
  //       firstName: 'Christina',
  //       gender: 'Woman',
  //       height: 1,
  //       lastName: 'Silva',
  //       pulseRate: 56,
  //       respirationRate: 45,
  //       vacationBalance: 15,
  //       weight: 156,
  //     });
  //
  //     console.log(employeeResponse);
  //   }
  //   async();
  //    console.log('works???');
  // }

}
