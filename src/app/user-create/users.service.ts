import { User } from './users.model';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DEFAULT_MIN_VERSION } from 'tls';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    // URL api
    private url = "http://localhost:3000/user"

    constructor(private http: HttpClient) { }

    // CRUD

    //CREATE
    salvar(user: User): Observable<User> {
        return this.http.post<User>(this.url, user)
    }

    //UPDATE
    updateUser(user: User): Observable<User> {
        const url = `${this.url}/${user.nome}`
        return this.http.put<User>(url, user)
    }

    // READ
    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.url)
    }

    // READ BY ID

    //DELETE
    deleteUser(id: number): Observable<User> {
        return this.http.delete<User>(this.url + "/" + id)
    }

}