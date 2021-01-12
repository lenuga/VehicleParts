import { Component, OnInit } from '@angular/core';
import { PartService } from '../service/part.service';

@Component({
  selector: 'app-part-list',
  templateUrl: './part-list.component.html',
  styleUrls: ['./part-list.component.css']
})
export class PartListComponent implements OnInit {

  parts: any[] = [];

  constructor(private partService:PartService) { }

  ngOnInit(): void {
      this.partService.getParts().subscribe(data => {
          this.parts = data;
      });
  }
 
  deletePart(id) {
    this.partService.deletePart(id).subscribe(data =>{
      console.log(data);
      this.getParts();
    });
 }
  getParts() {
    throw new Error("Method not implemented.");
  }

 updatePart(id){
   this.partService.updatePart
 }

}