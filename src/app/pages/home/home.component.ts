import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
    console.log("s")
  }

  onBack(): void {
    this.location.back()
  }
}
