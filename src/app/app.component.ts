import { Component, OnInit } from '@angular/core';
import { PeopleService } from './services/people.service';
import { People } from 'src/app/models/people';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'caso-8';

  people: People[] = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.peopleService.getPeople().subscribe({
      next: (res: any) => {
        this.people = res.Datos;
        console.log(res);
      },
    });
  }
}
