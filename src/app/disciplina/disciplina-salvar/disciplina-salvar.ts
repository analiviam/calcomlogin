import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

import { Disciplina } from '../disciplina-entidade/entidade';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-salvar',
  templateUrl: './disciplina-salvar.html'
})
export class SalvarDisciplina implements OnInit {
  disciplina: Disciplina = new Disciplina();
  listaDisciplina:Observable<Disciplina[]>;
  constructor(private fire:AngularFireDatabase, private rota:Router) {
    this.listaDisciplina = this.fire.list<Disciplina>('disciplina').snapshotChanges().pipe(
      map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))
    );
   }

  ngOnInit() {
  }

  salvar(){
    this.fire.list('disciplina').push(this.disciplina);
    this.disciplina = new Disciplina();
    this.rota.navigate(['calendarioprof']);
  }


}
