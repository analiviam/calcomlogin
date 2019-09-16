import { Component, OnInit } from '@angular/core';
import { Professor } from '../entidadeprof/professor';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import {AngularFireDatabase} from '@angular/fire/database';
@Component({
  selector: 'redefinir',
  templateUrl: './redefinir.component.html',

  providers : [AngularFireAuth],
})
export class RedefinirComponent implements OnInit {
professor : Professor = new Professor();
  constructor(private autenticacao : AngularFireAuth, private router : Router, private banco : AngularFireDatabase) { }

  ngOnInit() {}

  redefinirSenha(){
    this.autenticacao.auth.sendPasswordResetEmail(this.professor.email).then(
        () => { this.router.navigate(['home']); }).catch((erro) => alert('Ocorreu um erro'));

  }
}
