import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Professor } from '../entidadeprof/professor';
import {map} from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
 selector: 'listar_prof',
  templateUrl: 'listarp.component.html',

})

export class ProfessorListarComponent implements OnInit {
listaProf: Observable<Professor[]>;

  constructor( private banco: AngularFireDatabase) {
 this.listaProf = this.banco.list<Professor>('professor').snapshotChanges().pipe(
   map(lista => lista.map(linha => ({
     key:linha.payload.key,...linha.payload.val()
   })))
 );}
  ngOnInit() {

}
}
