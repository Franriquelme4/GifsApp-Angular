import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey: string = '9MPmMAzRMOXOlpM35FSL8l0ndlWJ0TtO';
  private urlBase: string = 'https://api.giphy.com/v1/gifs';

  public resultados: Gif[] = [];

  private _historial: string[] = [];
  get historial() {
    return [...this._historial];
  }

  constructor(
    private http: HttpClient
  ) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultadosGif')!) || [];
  }

  buscarGifs(termino: string) {
    termino = termino.trim().toLowerCase();
    if (!this._historial.includes(termino)) {
      this._historial.unshift(termino);
      this._historial = this._historial.slice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
    const params = new HttpParams()
                                  .set('api_key', this.apiKey)
                                  .set('q', termino)
                                  .set('limit', '10');
    this.http.get<SearchGifsResponse>(`${this.urlBase}/search`,{params})
      .subscribe((resp) => {
      this.resultados = resp.data;
       localStorage.setItem('resultadosGif', JSON.stringify(this.resultados));
      });
  }

}
