const Ostad = {
    name: 'Shabash Uddin',
    income: 50000,
    address: 'Puran Dhaka',
    client: 25,
    newClient: function(){
        this.client = this.client + 1;
        return this.client;
    }
}
const Chela = {
    name: 'Dhopash Uddin',
    income: 15000,
    address: Ostad.address,
    client: 0,
}

Ostad.newClient();
Ostad.newClient();
Ostad.newClient();
const clientOfChela = Ostad.newClient.bind(Chela);
clientOfChela();
clientOfChela();
clientOfChela();
console.log(Ostad);
console.log(Chela);