import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SweetService } from 'src/app/servicios/sweet.service';
import { CreateService } from 'src/app/servicios/create.service';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  constructor(
    private CreateService: CreateService,
    public SweetService: SweetService,
  ) { }


  // Refactor
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    autor: new FormControl('', [
      Validators.required,
    ]),
    done: new FormControl(false)
  })

  submit() {
    if (this.form.valid) {
      this.CreateService.crearForm(this.form.value).subscribe((response: any) => {
        this.SweetService.sweet({
          message: "Operacion creada exitosamente",
          type: "success"
        });
      }, error => {
        this.SweetService.sweet({
          message: "Ups, ha ocurrido un error. Intente nuevamente",
          type: "error"
        });
      }, () => {
        this.form.reset();
      });
    }
  }

  ngOnInit() {
  }

}
