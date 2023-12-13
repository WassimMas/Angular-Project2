import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlatService {
  platUrl: string = 'http://localhost:3000/plats';
  constructor(private httpClient: HttpClient) {}
  addPlat(obj: any) {
    return this.httpClient.post<{ msg: any }>(this.platUrl, obj);
  }
  getAllPlats() {
    return this.httpClient.get<{ plats: any }>(this.platUrl);
  }
  getPlatById(id: any) {
    return this.httpClient.get<{ findedPlat: any }>(`${this.platUrl}/${id}`);
  }
  editPlat(obj: any) {
    return this.httpClient.put<{ isUpdated: boolean }>(this.platUrl, obj);
  }
  deleteplat(id: any) {
    return this.httpClient.delete<{ msg: any }>(`${this.platUrl}/${id}`);
  }
}
