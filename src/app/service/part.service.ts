import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartService {

  constructor( private httpClient: HttpClient) { }

 createPart(part) {
   const url = `http://localhost:8080/parts/addpart`;
   return this.httpClient.post<any>(url, part);
 }

updatePart(update) {
  const url =`http://localhost:8080/parts/update`;
  return this.httpClient.put<any>(url, update);
}
getParts() {
  const url =`http://localhost:8080/parts/parts`;
  return this.httpClient.get<any[]>(url);
}
deletePart(id) {
  const url =`http://localhost:8080/parts/delete/${id}`;
return this.httpClient.delete<any>(url);
}

getPartById(id) {
  const url =`http://localhost:8080/parts/${id}`;
  return this.httpClient.get<any>(url);
}

 partDetails(id) {
   const url = `http://localhost:8080/parts/${id}`;
   return this.httpClient.get<any>(url);
 }

}
