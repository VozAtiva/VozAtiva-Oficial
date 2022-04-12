import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../model/UsuarioModel';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel;
  confirmarSenha: string;
  tipoUsuario: string;


  constructor(private authService: AuthService, private router: Router, private alertas: AlertasService){ }

  ngOnInit(){
    window.scroll(0,0)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value;

  }

  tipUsuario(event: any) {
    this.tipoUsuario = event.target.value;
    }
    

  cadastrarUsuario(){
    this.usuario.tipo = this.tipoUsuario;
    if(this.usuario.senha != this.confirmarSenha){
      this.alertas.showAlertDanger("Suas senhas precisam ser iguais");
    } 
      else{
        this.authService.cadastrar(this.usuario).subscribe((resp:UsuarioModel)=>{
          this.usuario = resp
          this.router.navigate(['/logar'])
          this.alertas.showAlertSucces("Cadastro realizado com sucesso!")
        } );
      }
  }
}
