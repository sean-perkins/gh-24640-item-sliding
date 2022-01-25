import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items = Array.prototype.map.call(Array(100), (val, index) => index);

  constructor() { }


}
