import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experience } from 'src/app/models/experience';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private baseUrl = environment.api_back + "experience";


  constructor(private http: HttpClient) { }

  getAll(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.baseUrl);
  }

  getExperienceyById(id: string): Observable<Experience> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Experience>(url);
  }


}