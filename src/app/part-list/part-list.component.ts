import { Component, OnInit } from '@angular/core';
import { PartService } from '../service/part.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-part-list',
  templateUrl: './part-list.component.html',
  styleUrls: ['./part-list.component.css']
})
export class PartListComponent implements OnInit {
  
  patchValue(arg0: { id: any; partName: any; price: any; }) {
    throw new Error("Method not implemented.");
  }

  parts: any[] = [];

  constructor(private partService:PartService, private router: Router) { }

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
  this.router.navigate(['/create-part/' + id]);
 }

 partDetails(id){
    this.router.navigate(['/part-details/' + id]);
 }


}
