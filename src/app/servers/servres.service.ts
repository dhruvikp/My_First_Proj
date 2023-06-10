export class ServersService {

    public servers = [
        {
            id:1,
            name:'ProductionServer',
            status: 'Online'
        },
        {
            id:2,
            name:'DevServer',
            status: 'Offline'
        },
        {
            id:1,
            name:'TestServer',
            status: 'Online'
        }
    ]

    getServers() {
        return this.servers;
    }
}