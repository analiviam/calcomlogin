import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import {Form} from '@angular/forms';

import { Disciplina } from '../../disciplina/disciplina-entidade/entidade';
import { Prova } from '../entidade-prova/prova';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'salvar-prova',
  templateUrl: './salvar-prova.html'

})
export class SalvarProva implements OnInit {

prova:Prova =new Prova();
listaDisciplina:Observable<Disciplina[]>;
listaProva: Observable<Prova[]>;

  constructor(private fire: AngularFireDatabase, private rota: Router, private modal: ModalController) {

  this.listaDisciplina = this.fire.list<Disciplina>('disciplina').snapshotChanges().pipe(
  map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))
); }

  ngOnInit() {}

  salvar(){
  if(this.prova.key == null){
  this.fire.list('prova').push(this.prova);
  this.prova = new Prova();
  this.rota.navigate(['listar-prova']) ;
  }else{
  this.fire.object('prova/'+this.prova.key).update(this.prova);
  this.modal.dismiss();
  }
  }

}
