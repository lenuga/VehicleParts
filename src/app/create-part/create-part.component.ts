import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PartService } from '../service/part.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-part',
  templateUrl: './create-part.component.html',
  styleUrls: ['./create-part.component.css']
})
export class CreatePartComponent implements OnInit {

  partForm: FormGroup;
  submitted = false;
  toastr: any;


  constructor(private formBuilder: FormBuilder, private partService: PartService, private toastrService: ToastrService ) { }

  ngOnInit() {
      this.partForm = this.formBuilder.group({
        partName:["", Validators.required],
        price: ["", [Validators.required,  Validators.pattern("^[0-9]*$")]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.partForm.controls; }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.partForm.invalid) {
        this.toastr.console.error();
          return;
      }
      // display form values on success
      //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value));
      //alert('SUCCESS!! \n\n' + JSON.stringify(this.partForm.value));

      this.partService.createPart(this.partForm.value).subscribe(data => {
        this.toastr.success('Success!', 'Toastr fun!');
      });   
  }

  onReset() {
      this.submitted = false;
      this.partForm.reset();
  }

}


