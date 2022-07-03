import { Component, OnInit } from '@angular/core';
import { DetailsService } from './details.service';
import { User } from '../models/user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  notFound = false;
  id: any;

  constructor(private detailService: DetailsService) {}

  ngOnInit() {}

  getDetail(detailId: string) {
    this.notFound = false;
    this.id = null;

    this.detailService.getDetail(detailId).subscribe(
      (idFromTheAPI: User) => {
        this.id = idFromTheAPI;
      },
      (err: any) => {
        alert("ID not found!")
        this.notFound = true;
      }
    );
  }
}
