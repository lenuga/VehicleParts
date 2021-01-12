import { Component, OnInit, Input} from '@angular/core';
import { PartService } from '../service/part.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Part } from '../models/part';

@Component({
  selector: 'app-part-details',
  templateUrl: './part-details.component.html',
  styleUrls: ['./part-details.component.css']
})
export class PartDetailsComponent implements OnInit {
id: number
part: Part

  constructor(private partService: PartService, private acticeRoute: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.id = this.acticeRoute.snapshot.params['id'];
    
    this.partService.getPartById(this.id).subscribe(data => {
      console.log(data);
    });
  }

}
