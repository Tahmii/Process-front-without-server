import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Presentation } from 'src/app/models/presentation';
import * as presentation from 'src/assets/presentation.json';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {

  private presentations: Presentation[] = presentation as Presentation[];

  constructor(private http: HttpClient) {

  }

  getPresentationById(presentationId: number): Observable<Presentation | undefined> {
    // Utilisez switchMap pour combiner le chargement des données et la recherche de la présentation
    return this.getJSONData().pipe(
      map((data: Presentation[]) => {
        this.presentations = data;
        return this.presentations.find(presentation => presentation.presentationId === presentationId);
      })
    );
  }
  getJSONData() {
    const s = this.http.get<Presentation[]>('../../../assets/presentation.json');
    s.subscribe(data => {
      console.log('Données JSON récupérées :', data);
    });
    return s;
  }

}
