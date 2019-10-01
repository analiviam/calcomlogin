import {Component} from '@angular/core';
import { Professor } from '../entidadeprof/professor';
import { AngularFireDatabase } from '@angular/fire/database';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector:'cadastroprof.component',
  templateUrl:'cadastroprof.component.html',
  styleUrls:['cadastroprof.component.css']
})

export class CadastroprofComponent{
  professor: Professor= new Professor();

  constructor(private banco: AngularFireDatabase, private afAuth: AngularFireAuth, private rota: Router, private router: Router ) {

  }

  ngOnInit() {}

  salvar(){
    this.afAuth.auth.createUserWithEmailAndPassword(this.professor.nome, this.professor.senha).then(
      () => {this.router.navigate(['home']);}).catch((erro) => this.router.navigate(['calendarioprof']) );
    this.banco.list('professor').push(this.professor);
    this.professor=new Professor();
    alert('cadastrado com sucesso');}
}
