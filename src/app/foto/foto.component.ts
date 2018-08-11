import { Component, Input } from "@angular/core";

@Component({
  selector: 'caelumpic-foto',
  templateUrl: './foto.component.html',
  styleUrls: [
    'foto.component.css'
  ]
})
export class FotoComponent {

  @Input() url;

  @Input() titulo;

  public constructor() { }

}