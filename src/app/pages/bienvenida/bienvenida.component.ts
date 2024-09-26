import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css',
})
export class BienvenidaComponent implements OnInit, OnDestroy {
  ngOnInit() {
    console.log('Se crea bienvenida');
  }

  ngOnDestroy(): void {
    console.log('Se destruye bienvenida');
  }
}
