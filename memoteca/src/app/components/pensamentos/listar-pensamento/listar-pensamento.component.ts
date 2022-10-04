import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Angular',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Teste entre comunicação',
      autoria: 'Angular',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati minus repudiandae, officia eos aspernatur quaerat cum doloribus consequatur rem nisi cupiditate nihil cumque perspiciatis error provident in dolores dignissimos accusamus? KDOASKDOASKDOSAKDOASKDOASKODASKODASKDOAKODSAKODASKODKOSADKOASK',
      autoria: 'Angular',
      modelo: 'modelo2'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
