import { Component, OnInit } from '@angular/core';
import { ListarService } from 'src/app/servicios/listar.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  constructor(
    private ListarService: ListarService,
  ) { }

  libros: any = [];

  ngOnInit() {
    this.listar();
  }

  listar(){
    this.ListarService.listar().subscribe((response: any) => {
      this.libros = response;
      console.log(this.libros);
    })
  }

}
