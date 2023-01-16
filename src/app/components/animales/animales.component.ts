import { Component, OnInit } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'
import { Router } from '@angular/router'
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
  myDataSource!: MatTableDataSource<Animal>

  constructor(
    private animalesService: AnimalesService,
    private router: Router,
  ) {
    this.animales = new Array<Animal>()
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

        this.myDataSource = new MatTableDataSource<Animal>(this.animales)
      })
    //((a:any) => {this.animales = a.result})
  }

  showAnimal(id: number) {
    this.router.navigateByUrl('/animal/' + id)
  }
}
