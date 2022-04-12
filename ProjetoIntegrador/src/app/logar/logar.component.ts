import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';
import { environment } from 'src/environments/environment.prod';
import { AlertasService } from '../service/alertas.service';



@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css']
})
export class LogarComponent implements OnInit {
  
  usuarioLogin: UsuarioLogin = new UsuarioLogin;


  constructor(private router: Router, private auth: AuthService, private alertas: AlertasService) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  logar(){
    this.auth.logar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{
      this.usuarioLogin = resp

      environment.token = this.usuarioLogin.token
      environment.nome = this.usuarioLogin.nome
      environment.foto = this.usuarioLogin.foto
      environment.id = this.usuarioLogin.id
      this.alertas.showAlertSucces('Logado com sucesso!')
      
      this.router.navigate(['/postagem'])
    }, erro =>{
      if(erro.status == 500 ||erro.status == 401){
        this.alertas.showAlertDanger("Usuario ou Senha incorretos!")
      }
    })

  }

}
