import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemModel } from './item.model';

@Injectable({ providedIn: 'root' })
export class ItemService {
    constructor(private http: HttpClient) { }

    getAllItems() {
       return this.http.get<ItemModel[]>('assets/data.json');
    }
}
