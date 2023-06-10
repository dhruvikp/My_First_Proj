import { Component } from '@angular/core';
import { ServersService } from '../servres.service';

@Component({
  selector: 'app-server-add',
  templateUrl: './server-add.component.html',
  styleUrls: ['./server-add.component.css']
})
export class ServerAddComponent {

  public serverName: string;
  public serverStatus: string;
  public serverId: number;

  onCreateServer() {
    this.serversService.getServers().push( {
      id: this.serverId,
      name: this.serverName,
      status: this.serverStatus
    });
  }

  constructor(private serversService: ServersService) {}
}
