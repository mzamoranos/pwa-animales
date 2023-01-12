import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Animal } from '../models/animal.interface'

@Injectable({
  providedIn: 'root',
})
export class AnimalesService {
  constructor(private http: HttpClient) {}

  getAllAnimales(): Observable<Animal[]> {
    return this.http.get<Animal[]>(
      'https://www.zaragoza.es/sede/servicio/proteccion-animal.json?',
      //'https://www.zaragoza.es/docs-api_sede/#Adopción%20de%Animales',
    )
  }

  getAnimalById(id: string): Observable<Animal> {
    return this.http.get<Animal>(
      'https://www.zaragoza.es/sede/servicio/proteccion-animal/' + id,
      //'https://www.zaragoza.es/docs-api_sede/#Adopción%20de%Animales',
    )
  }
}
