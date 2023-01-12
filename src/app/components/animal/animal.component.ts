import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Animal } from 'src/app/models/animal.interface'
import { AnimalesService } from 'src/app/sevices/animales.service'
@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
})
export class AnimalComponent implements OnInit {
  public animal!: Animal

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private animalesService: AnimalesService,
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id')
    console.log('Identifier --> ', identifier)
    if (identifier) {
      this.animalesService.getAnimalById(identifier).subscribe((animal) => {
        if (!animal) {
          return this.router.navigateByUrl('/')
        }
        this.animal = animal
        console.log('Animal --> ', this.animal)
        return null
      })
    } else {
      this.router.navigateByUrl('/')
    }
  }
}
