import {Component} from '@angular/core';
import { Professor } from '../entidadeprof/professor';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector:'cadastroprof.component',
  templateUrl:'cadastroprof.component.html',
  styleUrls:['cadastroprof.component.css']
})

export class CadastroprofComponent{
  professor: Professor= new Professor();

  constructor(private banco: AngularFireDatabase) { }

  ngOnInit() {}

  salvarP(){
    this.banco.list('professor').push(this.professor);
    this.professor=new Professor();
    alert('cadastrado com sucesso');}
 }
