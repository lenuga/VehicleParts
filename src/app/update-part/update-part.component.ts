import { Component, OnInit } from '@angular/core';
import { PartService } from '../service/part.service';

@Component({
  selector: 'app-update-part',
  templateUrl: './update-part.component.html',
  styleUrls: ['./update-part.component.css']
})
export class UpdatePartComponent implements OnInit {

  constructor(private partService: PartService) { }

  ngOnInit(): void {
  }

}
