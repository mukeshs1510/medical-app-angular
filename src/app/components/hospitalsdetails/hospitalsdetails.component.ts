import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hospitalsdetails',
  templateUrl: './hospitalsdetails.component.html',
  styleUrls: ['./hospitalsdetails.component.scss']
})
export class HospitalsdetailsComponent implements OnInit {

  id: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
  }

}
