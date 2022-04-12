import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgradecimentosComponent } from './agradecimentos/agradecimentos.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { LogarComponent } from './logar/logar.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { PostagemComponent } from './postagem/postagem.component';
import { TemaComponent } from './tema/tema.component';
import { InicioComponent } from './inicio/inicio.component';
import { ImplementacoesComponent } from './implementacoes/implementacoes.component';



const routes: Routes = [
  {path:'', redirectTo:'inicio', pathMatch:'full'},

  {path: 'inicio', component: InicioComponent},
  {path:'menu', component: MenuComponent},
  {path:'rodape', component: RodapeComponent},
  {path:'cadastrar', component: CadastrarComponent},
  {path:'logar', component: LogarComponent},
  {path:'sobrenos', component: SobrenosComponent},
  {path:'agradecimentos', component: AgradecimentosComponent},
  {path:'postagem', component: PostagemComponent},
  {path: 'tema', component: TemaComponent},
  {path: 'implementacoes', component: ImplementacoesComponent},
  

  {path:'tema-edit/:id', component: TemaEditComponent},
  {path:'tema-delete/:id', component: TemaDeleteComponent},
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent },
  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  {path: 'usuario-edit/:id', component: UsuarioEditComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
