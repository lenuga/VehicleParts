import { Component, OnInit} from '@angular/core';
import { PartService } from '../service/part.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-part-details',
  templateUrl: './part-details.component.html',
  styleUrls: ['./part-details.component.css']
})
export class PartDetailsComponent implements OnInit {
 part={id:"",partName:"",price:""}


  constructor(private partService: PartService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
      console.log(id);
    // this.partService.getPartById(id).subscribe(data =>{
    //   console.log(data);
  //});
      this.partService.partDetails(id).subscribe(data =>{
        this.part=data;
        console.warn(data)
        console.log(data)
      });
  }

  //{school.class.class1.division}
  //[]

}
