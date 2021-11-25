// Dados em formato JSON
var textoJSON = `{ "delegacias": [
        { 
        "Delegacia": "<b>Delegacia Civil - Atendimento à Mulher em Alfenas</b>", 
        "Endereço": "Endereço: Rua Dom Silvério, nº 338, Bairro Jardim Boa Esperança V, Alfenas", 
        "CEP": "CEP: 37130-000", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "Email": "E-mail: regional.alfenas@gmail.com" 
        }, 
        
        { 
        "Delegacia": "<b>Delegacia da Mulher em Araguari</b>", 
        "Endereço": "Endereço: Rua José do Patrocínio, nº 291, Bairro Centro, Araguari", 
        "CEP": "CEP: 39100-000", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "Email": "E-mail: rosangela200520010@hotmail.com" 
        }, 
        
        { 
        "Delegacia": "<b>Delegacia da Mulher em Araxá</b>", 
        "Endereço": "Endereço: Rua Calimério Guimarães, nº 515, Bairro Centro, Araxá", 
        "CEP": "CEP: 38183-184", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "Email": "-" 
        }, 
        
        { 
        "Delegacia": "<b>Delegacia da Mulher em Barbacena</b>", 
        "Endereço": "Endereço: Rua Vitório Meneghin, nº 210, Bairro Pontilhão, Barbacena", 
        "CEP": "CEP: 36202-346", "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "Email": "E-mail: delegaciademulheres.barbacena@pc.mg.gov.br" 
        }, 
        
        { 
        "Delegacia": "<b>Delegacia da Mulher em Belo Horizonte - Plantão Especializado</b>", 
        "Endereço": "Endereço: Avenida Barbacena, nº 288, Bairro Barro Preto, Belo Horizonte", 
        "CEP": "CEP: 30190-130", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "Email": "E-mail: coordenacaodemid@gmail.com" 
        }, 
        
        { 
        "Delegacia": "<b>Delegacia da Mulher em Betim</b>", 
        "Endereço": "Endereço: Rua Cecília Júlia do Prado, nº 255, Bairro Centro, Betim", 
        "CEP": "CEP: 32510-550", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "Email": "E-mail: deopf.betim@pc.mg.gov.br" 
        }, 
        
        { 
        "Delegacia": "<b>Delegacia da Mulher em Caratinga</b>", 
        "Endereço": "Endereço: Rua Antônia Maria Resende Fernandes, nº 174, Bairro Dário Grossi, Caratinga", 
        "CEP": "CEP: 35300-011", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "Email": "E-mail: nayaratravassos@bol.com.br" 
        }, 
        
        { 
        "Delegacia": "<b>Delegacia Civil - Atendimento à Mulher em Cataguases</b>", 
        "Endereço": "Endereço: Rua Major Viêira, nº 324, Bairro Sereno, Cataguases", 
        "CEP": "CEP: 36770-060", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "Email": "E-mail: secretariacataguases.pc@gmail.com"
        }, 
        
        { 
        "Delegacia": "<b>Delegacia da Mulher em Conselheiro Lafaiete</b>", 
        "Endereço": "Endereço: Rua Praça Pimentel Duarte, sem nº, Bairro Centro, Conselheiro Lafaiete", 
        "CEP": "CEP: 36400-079", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "Email": "E-mail: mulheres.lafaiete@pc.mg.gov.br" 
        }, 
        
        { 
        "Delegacia": "<b>Delegacia da Mulher em Contagem</b>", 
        "Endereço": "Endereço: Rua Manoel Teixeira de Camargos, nº 63, Bairro da Glória, Contagem", 
        "CEP": "CEP: 32340-040", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "Email": "E-mail: mulheres.contagem@pc.mg.gov.br"
        },
        
        { 
        "Delegacia": "<b>Delegacia da Mulher em Coronel Fabriciano</b>", 
        "Endereço": "Endereço: Rua Albert Scharlet, nº 213, Bairro Centro, Coronel Fabriciano", 
        "CEP": "CEP: 35170-038", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "Email": "E-mail: delegaciademulheres.cf@hotmail.com" 
        }, 
        
        {
        "Delegacia": "<b>Delegacia da Mulher em Diamantina</b>", 
        "Endereço": "Endereço: Avenida João Antunes de Oliveira, nº 284, Bairro Cazuza, Diamantina", 
        "CEP": "CEP: 39100-000", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "Email": "E-mail: deam.diamantina@pc.mg.br" 
        }, 
        
        { 
        "Delegacia": "<b>Delegacia da Mulher em Divinópolis</b>", 
        "Endereço": "Endereço: Rua Henrique Galvão, nº 274, Bairro Espirito Santo, Divinópolis", 
        "CEP": "CEP: 35500-256", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "Email": "E-mail: deam.gv@pc.mg.gov.br" 
        }, 
        
        { 
        "Delegacia": "<b>Delegacia Civil - Atendimento à Mulher em Formiga</b>", 
        "Endereço": "Endereço: Rua Zica Frade, nº 55, Formiga", 
        "CEP": "CEP: 35570-000", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "Email": "E-mail: drpc.formiga@pc.mg.gov.br" 
        }, 
        
        { 
        "Delegacia": "<b>Delegacia da Mulher em Governador Valadares</b>", 
        "Endereço": "Endereço: Rua Pedro Lessa, nº 836, Bairro Lourdes, Governador Valadares", 
        "CEP": "CEP: 35030-440", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "Email": "E-mail: informacao.deamibirite@gmail.com" 
        },
        
        { 
        "Delegacia": "<b>Delegacia Civil - Atendimento à Mulher em Guaxupé</b>", 
        "Endereço": "Endereço: Avenida Dona Floriana, nº 272, Bairro Centro, Guaxupé", 
        "CEP": "CEP: 37800-000", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "Email": "E-mail: cpd.guaxupe@pc.mg.gov.br" 
        }, 
        
        { 
        "Delegacia": "<b>Delegacia da Mulher em Ibirité</b>", 
        "Endereço": "Endereço: Avenida Otacílio Negrão de Lima, nº 468, Bairro Aluoto, Ibirité", 
        "CEP": "CEP: 32400-000", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "Email": "E-mail: liathayde1@hotmail.com" 
        }, 
        
        { 
        "Delegacia": "<b>Delegacia da Mulher em Ipatinga</b>", 
        "Endereço": "Endereço: Rua Pedras Preciosas, nº 775, Bairro Iguaçu, Ipatinga", 
        "CEP": "CEP: 35162-106", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "Email": "-" 
        }, 
        
        { 
        "Delegacia": "<b>Delegacia da Mulher em Itabira</b>", 
        "Endereço": "Endereço: Avenida Carlos Drumond de Andrade, Bairro Centro, Itabira", 
        "CEP": "CEP: 35900-024", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "Email": "E-mail: regional.itabira@pc.mg.gov.br" 
        }, 
        
        { 
        "Delegacia": "<b>Delegacia Civil - Atendimento à Mulher em Itabirito</b>", 
        "Endereço": "Endereço: Rua Emídio Quites, nº 136, Bairro Praia, Itabirito", 
        "CEP": "CEP: 35450-000", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "Email": "E-mail: ronni.fonseca@pc.mg.gov.br" 
        },
        
        { 
        "Case": 21, 
        "Cidade": "Itajubá", 
        "Delegacia": "Delegacia da Mulher em Itajubá", 
        "Endereço": "Endereço: Rua Antônio Simão Mauad, nº 149 e 303 - 3º Andar, Bairro Centro, Itajubá", 
        "CEP": "CEP: 37500-180", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: deam.itajuba@pc.mg.gov.br" 
        }, 
        
        { 
        "Case": 22, 
        "Cidade": "Itaúna", 
        "Delegacia": "Delegacia da Mulher em Itaúna", 
        "Endereço": "Endereço: Praça Doná Macrina, Bairro Graças, Itaúna", 
        "CEP": "CEP: 35680-339", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: delmulheres.itauna@pc.mg.gov.br" 
        }, 
        
        { 
        "Case": 23, 
        "Cidade": "Ituiutaba", 
        "Delegacia": "Delegacia da Mulher em Ituiutaba", 
        "Endereço": "Endereço: Avenida João Antunes de Oliveira, nº 284, Bairro Cazuza, Ituiutaba", 
        "CEP": "CEP: 39100-000", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: secretaria.ituiutaba@pc.mg.gov.br" 
        }, 
        
        { 
        "Case": 24, 
        "Cidade": "Janaúba", 
        "Delegacia": "Delegacia da Mulher em Janaúba", 
        "Endereço": "Endereço: Rua Espinosa, nº 105, Bairro Novo Paraíso, Janaúba", 
        "CEP": "CEP: 39440-000", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: dccm.janauba@pc.mg.gov.br" 
        },
        
        { 
        "Case": 25, 
        "Cidade": "Januária", 
        "Delegacia": "Delegacia da Mulher em Januária", 
        "Endereço": "Endereço: Avenida Marechal Euríco Gáspar Dutra, nº 484, Bairro Centro, Januária", 
        "CEP": "CEP: 39480-000", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: gto.fam.jf@pc.mg.gov.br" 
        },
        
        { 
        "Case": 26, 
        "Cidade": "João Monlevade", 
        "Delegacia": "Delegacia Civil - Atendimento à Mulher em João Monlevade", 
        "Endereço": "Endereço: Rua Louis Ensch, nº 266, Bairro Alvorada, João Monlevade", 
        "CEP": "CEP: 35930-045", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: assessoriamonlevade@yahoo.com.br" 
        }, 
        
        { 
        "Case": 27, 
        "Cidade": "Juiz de Fora", 
        "Delegacia": "Delegacia da Mulher em Juiz De Fora", 
        "Endereço": "Endereço: Rua Uruguaiana, nº 94 - 2º Andar, Bairro Jardim Glória, Juiz de Fora", 
        "CEP": "CEP: 36015-020", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: lujanpsouza@hotmail.com" 
        },
        
        { 
        "Case": 28, 
        "Cidade": "Lavras", 
        "Delegacia": "Delegacia Civil - Atendimento à Mulher em Lavras",
        "Endereço": "Endereço: BR-265, nº 215, Bairro Serra Verde, Lavras", 
        "CEP": "CEP: 37200-000", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "-" 
        }, 
        
        { 
        "Case": 29, 
        "Cidade": "Manhuaçu", 
        "Delegacia": "Delegacia da Mulher em Manhuaçu", 
        "Endereço": "Endereço: Avenida Melo Vianna, nº 222, Bairro Bom Pastor, Manhuaçu", 
        "CEP": "CEP: 36900-000", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: camilasoaresteixeira@yahoo.com.br" 
        }, 
        
        { 
        "Case": 30, 
        "Cidade": "Montes Claros", 
        "Delegacia": "Delegacia da Mulher em Montes Claros", 
        "Endereço": "Endereço: Avenida Vicente Guimarães, nº 381, Bairro Sagrada Família, Montes Claros", 
        "CEP": "CEP: 39400-000", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: delegaciamulheres@yahoo.com.br" 
        }, 
        
        { 
        "Case": 31, 
        "Cidade": "Muriaé", 
        "Delegacia": "Delegacia da Mulher em Muriaé", 
        "Endereço": "Endereço: Rua José Freitas Lima, nº 02 (referência: ao lado do Batalhão da Polícia Militar), Bairro Safira, Muriaé", 
        "CEP": "CEP: 36880-000", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: cpd.muriae@policiacivil.mg.gov.br" 
        }, 
        
        { 
        "Case": 32, 
        "Cidade": "Nova Lima", "Delegacia": "Delegacia da Mulher em Nova Lima", 
        "Endereço": "Endereço: Rua Joviano de Assis Fonseca, nº 41, Bairro Cariocas, Nova Lima", 
        "CEP": "CEP: 34000-000", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: 1dpnovalima@gmail.com" 
        },
        
        { 
        "Case": 33, 
        "Cidade": "Pará de Minas", 
        "Delegacia": "Delegacia da Mulher em Pará De Minas", 
        "Endereço": "Endereço: Praça Afonso Pena, nº 55, Bairro Centro, Pará de Minas", 
        "CEP": "CEP: 35660-049", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: anableao@yahoo.com.br" 
        }, 
        
        { 
        "Case": 34, 
        "Cidade": "Passos", 
        "Delegacia": "Delegacia Civil - Atendimento à Mulher em Passos", 
        "Endereço": "Endereço: Rua Santo Onófre, nº 174, Bairro Canjeranus, Passos", 
        "CEP": "CEP: 37900-504", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: arianepcmg@gmail.com" 
        }, 
        
        { 
        "Case": 35, 
        "Cidade": "Patos de Minas", 
        "Delegacia": "Delegacia da Mulher em Patos De Minas", 
        "Endereço": "Endereço: Rua dos Carajas, nº 641 - 1º Andar, Bairro Caiçaras, Patos de Minas", 
        "CEP": "CEP: 38703-236", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: mulheres.patosdeminas@pc.mg.gov.br" 
        }, 
        
        { 
        "Case": 36, 
        "Cidade": "Patrocínio", 
        "Delegacia": "Delegacia da Mulher em Patrocínio", 
        "Endereço": "Endereço: Rua Heloísa Capuano, nº 816, Bairro Cidade Jardim, Patrocínio", 
        "CEP": "CEP: 38747-508", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: chcartorio@pcivil.mg.gov.br" 
        }, 
        
        { 
        "Case": 37, 
        "Cidade": "Pedro Leopoldo", 
        "Delegacia": "Delegacia da Mulher em Pedro Leopoldo", 
        "Endereço": "Endereço: Rua Santa Luzia, nº 477, Bairro Centro, Pedro Leopoldo", 
        "CEP": "-", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: aisp71.igesp@pc.mg.gov.br" 
        },
        
        { 
        "Case": 38, 
        "Cidade": "Pirapora", 
        "Delegacia": "Delegacia da Mulher em Pirapora", 
        "Endereço": "Endereço: Avenida Benjamin Constant, nº 183, Bairro Centro, Pirapora", 
        "CEP": "CEP: 39270-000", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: regional.pirapora@pc.mg.gov.br" 
        },
        
        { 
        "Case": 39, 
        "Cidade": "Poços de Caldas", 
        "Delegacia": "Delegacia da Mulher em Poços De Caldas", 
        "Endereço": "Endereço: Avenida José Remígio Prezia, nº 492, Bairro Jardim dos Estados, Poços de Caldas", 
        "CEP": "CEP: 37701-102", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: cartorio.deam@pc.mg.gov.br" 
        }, 
        
        { 
        "Case": 40, 
        "Cidade": "Ponte Nova", 
        "Delegacia": "Delegacia da Mulher em Ponte Nova", 
        "Endereço": "Endereço: Rua Felisberto Leopoldo, nº 252, Bairro Santa Teresa, Ponte Nova", 
        "CEP": "CEP: 35430-085", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: dmeneguite@yahoo.com.br" 
        },
        
        { 
        "Case": 41, 
        "Cidade": "Pouso Alegre", 
        "Delegacia": "Delegacia da Mulher em Pouso Alegre", 
        "Endereço": "Endereço: Rua Silvestre Ferraz, nº 226, Bairro Centro, Pouso Alegre", 
        "CEP": "CEP: 37550-126", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: mulheres@pousoalegre.pcivil.mg.gov.br" 
        }, 
        
        { 
        "Case": 42, 
        "Cidade": "Ribeirão das Neves", 
        "Delegacia": "Delegacia da Mulher em Ribeirão Das Neves", 
        "Endereço": "Endereço: Rua Luísa Augusta Guimarães, nº 150, Bairro São Pedro, Ribeirão das Neves", 
        "CEP": "CEP: 33805-558", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: deopf.neves@gmail.com" 
        }, 
        
        { 
        "Case": 43, 
        "Cidade": "Sabará", 
        "Delegacia": "Delegacia da Mulher em Sabará", 
        "Endereço": "Endereço: Avenida João Pinheiro da Silva, nº 25, Bairro Esplanada, Sabará", 
        "CEP": "CEP: 34515-410", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: deamsabara@gmail.com" 
        }, 
        
        { 
        "Case": 44, 
        "Cidade": "Santa Luzia", 
        "Delegacia": "Delegacia da Mulher em Santa Luzia", 
        "Endereço": "Endereço: Avenida Brasília, nº 3550, Bairro São Benedito Duquesa I, Santa Luzia", 
        "CEP": "CEP: 33110-580", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: deam.santaluzia@policiacivil.mg.gov.br"
        }, 
        
        { 
        "Case": 45, 
        "Cidade": "Santa Maria", 
        "Delegacia": "Delegacia Civil - Atendimento à Mulher em Frutal", 
        "Endereço": "Endereço: Rua Olávo Bilac, nº 225, Bairro Nossa Senhora de Fátima, Santa Maria", 
        "CEP": "CEP: 97015-440", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: regional.frutal@pc.mg.gov.br" 
        }, 
        
        { 
        "Case": 46, 
        "Cidade": "Santos Dumont", 
        "Delegacia": "Delegacia da Mulher em Santos Dumont", 
        "Endereço": "Endereço: Avenida Presidente Getúlio Vargas, nº 330, Bairro Centro, Santos Dumont", 
        "CEP": "CEP: 36240-000", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: kenia@barbacena.pcivil.mg.gov.br" 
        }, 
        
        { 
        "Case": 47, 
        "Cidade": "São João Del Rei", 
        "Delegacia": "Delegacia da Mulher em São João Del Rei", 
        "Endereço": "Endereço: Avenida Leite de Castro, nº 1322, Bairro Fábricas, São João Del Rei", 
        "CEP": "CEP: 36301-180", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: mulher@saojoaodelrei.policiacivil.mg.gov.br" 
        }, 
        
        { 
        "Case": 48, 
        "Cidade": "São Lourenço", 
        "Delegacia": "Delegacia da Mulher em São Lourenço", 
        "Endereço": "Endereço: Avenida Damião Junqueira de Souza, nº 167, São Lourenço", 
        "CEP": "CEP: 37470-000", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: regional.saolourenco@gmail.com" 
        }, 
        
        { 
        "Case": 49, 
        "Cidade": "São Sebastião Do Paraíso", 
        "Delegacia": "Delegacia da Mulher em São Sebastião Do Paraíso", 
        "Endereço": "Endereço: Avenida Dárcio Cantieri, nº 1879, Bairro Jardim Coolapa, São Sebastião do Paraíso", 
        "CEP": "CEP: 37950-000", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180",
        "E-mail": "E-mail: cartorioregional.ssparaiso@pc.mg.gov.br" 
        },
        
        { 
        "Case": 50, 
        "Cidade": "Sete Lagoas", 
        "Delegacia": "Delegacia Civil - Atendimento à Mulher em Sete Lagoas", 
        "Endereço": "Endereço: Rua Jovelino Lanza, nº 1316, Bairro Jardim Arizona, Sete Lagoas", 
        "CEP": "CEP: 35700-353", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: regional.setelagoas@pc.mg.gov.br" 
        }, 
        
        { 
        "Case": 51, 
        "Cidade": "Teófilo Otoni", 
        "Delegacia": "Delegacia da Mulher em Teófilo Otoni", 
        "Endereço": "Endereço: Rua Lauro Viêira Otoni, nº 20, Bairro São Diogo, Teófilo Otoni", 
        "CEP": "CEP: 39803-002", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: veronicazimmere@yahoo.com.br" 
        }, 
        
        { 
        "Case": 52, 
        "Cidade": "Três Corações", 
        "Delegacia": "Delegacia da Mulher em Três Corações", 
        "Endereço": "Endereço: Avenida Deputado Renato Azeredo, nº 1360, Bairro Novo Horizonte, Três Corações", 
        "CEP": "CEP: 37410-850", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: cartorio.tcoracoes@pc.mg.gov.br" 
        }, 
        
        { 
        "Case": 53, 
        "Cidade": "Ubá", 
        "Delegacia": "Delegacia da Mulher em Ubá", 
        "Endereço": "Endereço: Avenida dos Ex-Combatentes, nº 1333, Ubá", 
        "CEP": "CEP: 36500-000", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: depolmulheres.uba@pc.mg.gov.br" 
        },
        
        { 
        "Case": 54, 
        "Cidade": "Uberaba", 
        "Delegacia": "Delegacia da Mulher em Uberaba", 
        "Endereço": "Endereço: Rua Amaro Ferreira, nº 221, Bairro Fabrício, Uberaba", 
        "CEP": "CEP: 38065-170", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: elisabetecardoso@uberabadigital.com.br" 
        }, 
        
        { 
        "Case": 55, 
        "Cidade": "Uberlândia", 
        "Delegacia": "Delegacia da Mulher em Uberlândia", 
        "Endereço": "Endereço: Avenida Nicomedes Alves dos Santos, nº 728, Bairro Morada da Colina, Uberlândia", 
        "CEP": "CEP: 38411-106", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: deam.uberlandia@policiacivil.mg.gov.br" 
        }, 
        
        { 
        "Case": 56, 
        "Cidade": "Unaí", 
        "Delegacia": "Delegacia da Mulher em Unaí", 
        "Endereço": "Endereço: Rua Alba Gonzaga, nº 54, Bairro Centro, Unaí", 
        "CEP": "CEP: 38610-000", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: valdete@pc.mg.gov.br" 
        },
        
        { 
        "Case": 57, 
        "Cidade": "Varginha", 
        "Delegacia": "Delegacia da Mulher em Varginha", 
        "Endereço": "Endereço: Praça João Gonzaga, nº 91, Bairro Centro, Varginha", 
        "CEP": "CEP: 37002-380", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: cartorio@varginha.pc.mg.gov.br" 
        }, 
        
        { 
        "Case": 58, 
        "Cidade": "Vespasiano", 
        "Delegacia": "Delegacia da Mulher em Vespasiano", 
        "Endereço": "Endereço: Rua Modestino Fonseca Cota, nº 369, Bairro Cond. Mangueiras, Vespasiano", 
        "CEP": "CEP: 33200-000", 
        "Tel1": "Telefone em caso de emergência: 190 (Polícia Militar)", 
        "Tel2": "Telefone da Central de Atendimento à Mulher: 180", 
        "E-mail": "E-mail: gabinete.vespasiano@policiacivil.mg.gov.br"
        }        
    ]
    }`;

// Conversão de JSON em Objeto JavaScript resultado
var dados = JSON.parse(textoJSON);

//Função para exibir delegacias
function ExibeResultado() { 
    var selecao = document.getElementById("selecaoCidade");
    var cidade = selecao.options[selecao.selectedIndex].value;
    document.getElementById("resultado-delegacia").innerHTML = dados['delegacias'][cidade-1].Delegacia + "<br>" + dados['delegacias'][cidade-1].Endereço + "<br>" + dados['delegacias'][cidade-1].CEP + "<br>" + dados['delegacias'][cidade-1].Tel1 + "<br>" + dados['delegacias'][cidade-1].Tel2 + "<br>" + dados['delegacias'][cidade-1].Email;
}
    


