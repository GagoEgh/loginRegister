import { Injectable } from '@angular/core';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users!:IUser[];
  constructor() { }
}
