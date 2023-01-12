import { Component, OnInit } from '@angular/core'
import { catchError, EMPTY, take } from 'rxjs'
import { Animal } from 'src/app/models/animal.interface'
import { AnimalesService } from 'src/app/sevices/animales.service'

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css'],
})
export class AnimalesComponent implements OnInit {
  public animales: Animal[] = []
  constructor(private animalesService: AnimalesService) {
    this.animales = new Array<Animal>()
    // this processing = false;
  }

  ngOnInit(): void {
    this.animalesService
      .getAllAnimales()
      .pipe(
        take(1),
        catchError((err) => {
          console.log('Error => ', err)
          //this.processing = false;
          return EMPTY
        }),
      )
      .subscribe((animales: any) => {
        this.animales = animales.result
      })
    //((a:any) => {this.animales = a.result})
  }
}
