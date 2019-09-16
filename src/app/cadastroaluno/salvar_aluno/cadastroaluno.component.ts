import { Component, OnInit } from '@angular/core';
import { Aluno } from '../entidadealuno/aluno';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
@Component({
  selector:'cadastroaluno.component',
  templateUrl:'cadastroaluno.component.html',
  styleUrls:['cadastroaluno.component.css']
})

export class CadastroalunoComponent implements OnInit {
  aluno: Aluno= new Aluno();


  constructor(private banco: AngularFireDatabase, private afAuth: AngularFireAuth, private rota: Router, private router: Router ) { }

  ngOnInit() {}

  salvar(){
    this.afAuth.auth.createUserWithEmailAndPassword(this.aluno.nome, this.aluno.senha).then(
      () => {this.router.navigate(['home']);}).catch((erro) => this.router.navigate(['calendarioaluno']) );
    this.banco.list('aluno').push(this.aluno);
    this.aluno=new Aluno();
    alert('cadastrado com sucesso');}
}
