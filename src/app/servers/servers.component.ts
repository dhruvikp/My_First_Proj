import { Component, OnInit } from '@angular/core';
import { ServersService } from './servres.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  
 


  public servers: server[] = [];

  constructor(private serversService: ServersService) { }

  ngOnInit(): void {
    this.servers = this.serversService.getServers();
  }

  getColor(server: server) {
    return server.status === 'Online' ? 'green' : 'red'
  }

}
type server = {
  id: number,
  name: string,
  status: string
}