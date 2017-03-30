import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2';
  data = [
  	{
  		"nombre": "Gauge 1",
  		"valor": 50
  	},
  	{
  		"nombre": "Gauge 2",
  		"valor": 75
  	},
  	{
  		"nombre": "Gauge 3",
  		"valor": 23
  	},
  	{
  		"nombre": "Gauge 4",
  		"valor": 98
  	},
  	{
  		"nombre": "Gauge 5",
  		"valor": 80
  	},
  	{
  		"nombre": "Gauge 6",
  		"valor": 10
  	}
  ];
}
