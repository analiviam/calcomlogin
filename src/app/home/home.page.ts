import { Component } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import {Aluno} from '../cadastroaluno/entidadealuno/aluno';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Professor } from '../cadastroprof/entidadeprof/professor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
//aluno:Aluno=new Aluno();
//listaAluno : Observable<Aluno[]>;
professor : Professor = new Professor();
listaProf: Observable<Professor[]>

  constructor(private fire: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router){
    this.listaProf = this.fire.list<Professor>('professor').snapshotChanges().pipe(
      map( lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val() })))
    );
  }

  logar(){
  this.afAuth.auth.signInWithEmailAndPassword(this.professor.email, this.professor.senha).then(
  () => { this.router.navigate(['salvar-prova']); }
  ).catch( (erro) => console.log(erro) );
  }

  redefinirSenha(){
this.router.navigate(['redefinir']);


  }
  logout() {
  this.afAuth.auth.signOut();
  this.router.navigate(['/']);
  }

/*  mudar(){
    this.fire.list('aluno').remove(this.aluno.senha)
sendPasswordResetEmail()
}*/
}
