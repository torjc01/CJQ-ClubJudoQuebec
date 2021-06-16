import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Contact } from '../models/Contact';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private url = 'http://localhost:8001/api/contacts'; 

  constructor(private http:HttpClient) {
  }

  createContact(contact: Contact): Observable<Contact> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<Contact>(this.url, contact, {headers: headers});
  }
}
