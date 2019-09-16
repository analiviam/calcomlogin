import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { CadastroalunoComponent } from './cadastroaluno/salvar_aluno/cadastroaluno.component';
import { CadastroprofComponent} from './cadastroprof/salvarprof/cadastroprof.component';
import {RegistrarComponent} from './registrar/registrar.component';
import {CalendarioprofComponent} from './calendarioprof/calendarioprof.component';
import {CalendarioalunoComponent} from './calendarioaluno/calendarioaluno.component';
import { AlunoListarComponent} from './cadastroaluno/listar_aluno/listar.component';
import { ProfessorListarComponent} from './cadastroprof/listar_prof/listar.component';
import {SalvarProva} from './calendarioprof/salvar-prova/salvar-prova';
import {SalvarDisciplina} from './disciplina/disciplina-salvar/disciplina-salvar';
import { ListarProva} from './calendarioprof/listar-prova/listar-prova.component'
import { RedefinirComponent} from './cadastroprof/redefinir/redefinir.component';

import {AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';

@NgModule({
  declarations: [AppComponent, LoginComponent, CadastroalunoComponent,
    CadastroprofComponent, RegistrarComponent, CalendarioprofComponent, CalendarioalunoComponent,
AlunoListarComponent, ProfessorListarComponent,SalvarProva, SalvarDisciplina,ListarProva, RedefinirComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
AngularFireDatabaseModule, AngularFireModule.initializeApp({
  apiKey: "AIzaSyClsWgpBTH8QbZ3-M0sGQ9R0SHmxn3AAyU",
    authDomain: "calendario-3bb9a.firebaseapp.com",
    databaseURL: "https://calendario-3bb9a.firebaseio.com",
    projectId: "calendario-3bb9a",
    storageBucket: "calendario-3bb9a.appspot.com",
    messagingSenderId: "437689971955",
    appId: "1:437689971955:web:f53fd40fcfc3e8bd"
})
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
