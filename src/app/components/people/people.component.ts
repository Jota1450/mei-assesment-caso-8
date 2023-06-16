import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { People } from 'src/app/models/people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input() people: People | undefined = undefined;
}
