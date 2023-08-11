import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';
import { IPicture } from 'src/app/models/Image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {


  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get('https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20').pipe(
      map((req: any) => {
        return req.entries.map((entry: { fields: { image: IPicture; }; meta: any }) => {
          return entry.fields.image
        })
      })
    )
  }
}
