var db  = {
    data: [
        {
            nome: 'Maria',
            idade: 50,
            cidade: 'BH',
            texto: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa neque iure labore quaerat nihil similique sit incidunt, quibusdam, fuga ullam sed asperiores dolorum ipsa officia!'
        },
        {
            nome: 'Joana',
            idade: 40,
            cidade: 'Uberlândia',
            texto: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus nisi perferendis delectus sit, corporis labore deserunt dolorum eligendi sed accusantium voluptatum dolores nemo incidunt? Hic corrupti consequuntur praesentium soluta laboriosam?'
        },
        {
            nome: 'Luisa',
            idade: 25,
            cidade: 'Montes Claros',
            texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In quod sit perferendis similique officia fugit. Enim ex rem et quos, architecto nostrum a cumque! Pariatur, molestiae odio.'
        }
    ]
}

// caso os dados já estejam no local storage. caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db'));

/* if (!db) {
    db = db_inicial
}; */