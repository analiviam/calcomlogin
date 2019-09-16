import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import {Form} from '@angular/forms';
import * as _ from 'lodash';

import { Disciplina } from '../../disciplina/disciplina-entidade/entidade';
import { Prova } from '../entidade-prova/prova';
import { ModalController } from '@ionic/angular';
import { SalvarProva } from '../salvar-prova/salvar-prova';

@Component({
  selector: 'listar-prova',
  templateUrl: './listar-prova.component.html'

})
export class ListarProva  {

  listaProva: Observable<Prova[]>;
  listaFiltro: Prova[];
  filtro={};
  prova: any;
  valor: string;
  disciplina: Prova;

    constructor(private fire: AngularFireDatabase, private rota: Router, private modal: ModalController) {

    this.listaProva = this.fire.list<Prova>('prova').snapshotChanges().pipe(
    map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))
  ); }

/* como não está funcionando o listaFiltro vou deixar como listaProva por emquanto*/
ngOnit(){
  this.listaProva.subscribe(prova => {
       this.prova = prova;
       this.listaFiltro = _.filter(this.prova, _.conforms(this.filtro));
   })
}


  excluir(entidade){
    this.fire.list('prova').remove(entidade.key);
}

async alterar(prova){
const tela = await this.modal.create({
component: SalvarProva, componentProps : { prova : prova }
});
tela.present();
}

filtrar(){
   this.filtro['dia'] = val => val.includes(this.valor);
   this.listaFiltro = _.filter(this.prova, _.conforms(this.filtro));
 }

}
