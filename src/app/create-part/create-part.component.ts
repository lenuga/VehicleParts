import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PartService } from '../service/part.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-part',
  templateUrl: './create-part.component.html',
  styleUrls: ['./create-part.component.css']
})
export class CreatePartComponent implements OnInit {

  partForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private partService: PartService, private  toastr: ToastrService ,
              private route: ActivatedRoute) { }

  ngOnInit() {
      this.partForm = this.formBuilder.group({
        id:[""],
        partName:["", Validators.required],
        price: ["", [Validators.required,  Validators.pattern("^[0-9]*$")]]
      });

      let id = this.route.snapshot.paramMap.get('id');
      console.log(id);
      this.partService.getPartById(id).subscribe(data =>{
          console.log(data);
          this.partForm.patchValue({
             id: data.id,
             partName: data.partName,
             price: data.price
          });
      });

  }

  // convenience getter for easy access to form fields
  get f() { return this.partForm.controls; }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.partForm.invalid) {
        this.toastr.error('please fill the all fields');
          return;
      }
      // display form values on success
      //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value));
      //alert('SUCCESS!! \n\n' + JSON.stringify(this.partForm.value));

       
      if(this.partForm.value.id){
        this.partService.updatePart(this.partForm.value).subscribe(data => {
          this.toastr.success('Success!', 'Updated successfully!');
        }); 
      }
      else{
        this.partService.createPart(this.partForm.value).subscribe(data => {
          this.toastr.success('Success!', 'Inserted successfully!');
        }); 
      }
  }

  onReset() {
      this.submitted = false;
      this.partForm.reset();
  }

}


