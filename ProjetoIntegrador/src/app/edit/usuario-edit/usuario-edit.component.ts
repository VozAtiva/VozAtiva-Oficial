import { AlertasService } from './../../service/alertas.service';
import { environment } from './../../../environments/environment.prod';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { UsuarioModel } from './../../model/UsuarioModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  idUsuario: number
  confirmarSenha: string
  tipoUsuario: string
  usuario: UsuarioModel = new UsuarioModel()

  constructor(private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private alertas: AlertasService) { }

  ngOnInit() {
    window.scroll(0, 0)


    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    this.idUsuario = this.route.snapshot.params['id']
    this.findByIdUsuario(this.idUsuario)
  }

  confirmeSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  atualizar() {
    this.usuario.tipo = this.tipoUsuario

    if (this.usuario.senha != this.confirmarSenha) {
      alert("Senha Invalida")
    } else {                            // sobscrever a senha em formato json
      this.authService.atualizar(this.usuario).subscribe((resp: UsuarioModel) => {
        this.usuario = resp
        this.router.navigate(['/inicio'])
        this.alertas.showAlertInfo("Atualização realizada, faça login novamente.")
        environment.token = ''
        environment.nome = ''
        environment.foto = ''
        environment.id = 0

        this.router.navigate(['/logar'])
      })
    }
  }

  findByIdUsuario(id: number) {
    this.authService.getByIdUsuario(id).subscribe((resp: UsuarioModel) => {
      this.usuario = resp
    })
  }

}
