import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../entidadealuno/aluno';
import {map} from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
 selector: 'listar_aluno',
  templateUrl: 'listar.component.html',

})

export class AlunoListarComponent implements OnInit {
listaAlunos: Observable<Aluno[]>;

  constructor( private banco: AngularFireDatabase) {
 this.listaAlunos = this.banco.list<Aluno>('aluno').snapshotChanges().pipe(
   map(lista => lista.map(linha => ({
     key:linha.payload.key,...linha.payload.val()
   })))
 );}
  ngOnInit() {

}
}
