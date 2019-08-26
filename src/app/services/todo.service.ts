import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos$: Observable<any> = this.socket.fromEvent<any>('Todos');
  cosa$: Observable<any> = this.socket.fromEvent<any>('cosa');

  constructor(private socket: Socket) { }
}
