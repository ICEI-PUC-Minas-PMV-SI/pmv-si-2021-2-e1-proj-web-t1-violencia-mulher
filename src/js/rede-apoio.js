// Dados em formato JSON
var textoJSON = `{ "redesapoio": [
        { 
         "Instituição1": "<b>Centro de Referência Especializado de Assistência Social - CREAS</b>", 
        "Endereço1": "Endereço: Rua Tiradentes, 1088, Parque das Nações, Alfenas, CEP: 37130-000", 
        "Site1": "-", 
        "Email1": "-", 
        "Telefone1": "(35) 3297-4547", 
        "Instituição2": "<b>Núcleo de Atenção à Mulher (NAM) - Unifal-MG</b>", 
        "Endereço2": "Endereço: Rua Nabor Toledo Lopes, 598 , Parque das Nações, Alfenas, CEP: 37130-000", 
        "Site2": "Site: https:\/\/www.unifal-mg.edu.br\/prace\/nam\/", 
        "Email2": "E-mail: prace@unifal-mg.edu.br", 
        "Telefone2": "(35) 3701-9242"
        },
        
        { 
        "Instituição1": "<b>Unidade de Acolhimento de Araguari</b>", 
        "Endereço1": "Endereço: Rua Dolival Gonçalves de Araújo, 35, Milenium, Araguari , CEP: 38447-369", 
        "Site1": "-", 
        "Email1": "-", 
        "Telefone1": "(61) 3315-9144", 
        "Instituição2": "<b>Núcleo de Defesa da Mulher</b>", 
        "Endereço2": "Endereço: Praça Getúlio Vargas, Centro, Araguari , CEP: 38440-254", 
        "Site2": "-", 
        "Email2": "-", 
        "Telefone2": "(61) 3315-9144"
        },
        
        { 
        "Instituição1": "<b>Centro de Referência Especializado da Assistência Social (CREAS)</b>", 
        "Endereço1": "Endereço: Av. Imbiara, 900, Centro, Araxá, CEP: 38183-244", 
        "Site1": "Site: https:\/\/cmdcaaraxa.com.br\/creas\/ ", 
        "Email1": "-", 
        "Telefone1": "(34) 36912-2024"
        },
        
        { 
        "Instituição1": "<b>Mulheres Pela Paz</b>", 
        "Endereço1": "Endereço: Av. Gov. Benedito Valadares, 306, São Sebastião, Barbacena, CEP: 36200-008", 
        "Telefone1": "(32) 3332-9638" 
        },
        
        { 
        "Instituição1": "<b>Centro Especializado de Atendimento a Mulher - Benvinda</b>", 
        "Endereço1": "Endereço: R. Hermilo Alves, 34, Santa Tereza, Belo Horizonte, CEP: 31010-115", 
        "Site1": "Site: https:\/\/prefeitura.pbh.gov.br\/smasac\/sudc\/equipamentos\/benvinda", 
        "Email1": "-", 
        "Telefone1": "(31) 3277-4380 | (31) 98873-2036", 
        "Instituição2": "<b>Casa dos Direitos Humanos</b>", 
        "Endereço2": "Endereço: Av. Amazonas, 558, Centro, Belo Horizonte, CEP: 30170-130", 
        "Site2": "Site: http:\/\/direitoshumanos.social.mg.gov.br\/pagina\/atendimento\/casa-de-direitos-humanos", 
        "Email2": "E-mail: cdh@direitoshumanos.mg.gov.br", 
        "Telefone2": "(31) 3916-7932", 
        "Instituição3": "<b>Centro Risoleta Neves de Atendimento</b>", 
        "Endereço3": "Endereço: Av. Amazonas, 558, Centro, Belo Horizonte, CEP: 30180-001", 
        "Site3": "Site: https:\/\/centrorisoleta.wixsite.com\/cerna", 
        "Email3": "-", 
        "Telefone3": "(31) 3270-3235 | 3270-3235 | 3270-3296", 
        "Instituição4": "<b>1ª Companhia da Polícia Militar Independente de Prevenção à Violência Doméstica</b>", 
        "Endereço4": "Endereço: Av. Augusto de Lima, 270, Centro, Belo Horizonte, CEP: 30190-001", 
        "Site4": "Site: https:\/\/www.policiamilitar.mg.gov.br\/portal-pm\/1rpm\/conteudo.action?conteudo=183268&tipoConteudo=noticia", 
        "Email4": "E-mail: cia.pvd@pmmg.mg.gov.br", 
        "Telefone4": "(31) 2108-8938", 
        "Instituição5": "<b>Diretoria de Políticas para as Mulheres</b>", 
        "Endereço5": "Endereço: Avenida Afonso Pena, 342, 1º Andar - Centro", 
        "Site5": "Site: https:\/\/prefeitura.pbh.gov.br\/smasac\/sudc\/politicas\/mulheres", 
        "Email5": "E-mail: dipmbh@pbh.gov.br", 
        "Telefone5": "(31) 3277-9753", 
        "Instituição6": "<b>Núcleo de defesa da mulher - NUDEM </b>", 
        "Endereço6": "Endereço: Av. Augusto de Lima, 270 - Centro, Belo Horizonte, CEP: 30190-001", 
        "Site6": "-", 
        "Email6": "-", 
        "Telefone6": "(31) 3270 3200 | (31) 3270 3202"
        }
    ]
    }`;

// Conversão de JSON em Objeto JavaScript resultado
var dados = JSON.parse(textoJSON);

//Função para exibir as redes de apoio
function ExibeResultado() { 
    var selecao = document.getElementById("selecaoCidade");
    var cidade = selecao.options[selecao.selectedIndex].value;
    document.getElementById("resultado-redeapoio").innerHTML = dados['redesapoio'][cidade-1].Instituição1 + "<br>" + dados['redesapoio'][cidade-1].Endereço1 + "<br>" + dados['redesapoio'][cidade-1].Site1 + "<br>" + dados['redesapoio'][cidade-1].Email1 + "<br>" + dados['redesapoio'][cidade-1].Telefone1;
}
    


