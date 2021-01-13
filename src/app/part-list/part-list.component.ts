import { Component, OnInit } from '@angular/core';
import { PartService } from '../service/part.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-part-list',
  templateUrl: './part-list.component.html',
  styleUrls: ['./part-list.component.css']
})
export class PartListComponent implements OnInit {
  term: string;
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
  searchByName(){
    if(this.term){
      this.partService.getParts().subscribe(data => {
        this.parts = data;
        //  this.parts = this.parts.filter(p => p.partName == this.term);//If i type a Acqurate name
        this.parts = this.parts.filter(p => p.partName.toLowerCase().includes(this.term.toLowerCase()));
    });    
    }else {
      this.partService.getParts().subscribe(data => {
        this.parts = data;
    });
    }
    
    
  }
// i=i+1;
}



