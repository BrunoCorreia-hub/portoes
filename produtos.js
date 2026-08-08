var produtos = [
    // Centrais
    { id: 1, nome: "Central H500", descricao: "Central eletrônica compatível com diversos motores do mercado, aceita qualquer controle 433MHz.", preco: 130.00, icone: "./img/h500.png" },
    { id: 2, nome: "Central H1000", descricao: "Central eletrônica de maior capacidade, compatível com diversos motores do mercado.", preco: 180.00, icone: "./img/h1000.webp" },
    { id: 3, nome: "Central H-Slim", descricao: "Central compacta indicada também para portões basculantes.", preco: 150.00, icone: "./img/500-mini.webp" },
    { id: 4, nome: "Central H500 Mini", descricao: "Versão mini da central H500, compatível com controles 433MHz.", preco: 110.00, icone: "./img/500-mini.webp" },

    // Controles
    { id: 5, nome: "Controle Engemove", descricao: "Controle remoto original Engemove, frequência 433MHz.", preco: 40.00, icone: "fa-walkie-talkie" },
    { id: 6, nome: "Controle Nice", descricao: "Controle remoto original Nice, frequência 433MHz.", preco: 45.00, icone: "fa-walkie-talkie" },
    { id: 7, nome: "Controle PIX", descricao: "Controle remoto original PIX, frequência 433MHz.", preco: 40.00, icone: "fa-walkie-talkie" },
    { id: 8, nome: "Controle Universal Ideal-SE", descricao: "Controle universal compatível com diversas centrais do mercado.", preco: 30.00, icone: "fa-walkie-talkie" },
    { id: 9, nome: "Controle Universal Resistente à Água", descricao: "Controle universal com proteção contra umidade e respingos.", preco: 35.00, icone: "fa-walkie-talkie" },
    { id: 10, nome: "Controle Universal Cromado", descricao: "Controle universal com acabamento cromado, mais resistente.", preco: 38.00, icone: "fa-walkie-talkie" },

    // Cremalheiras (1 metro)
    { id: 11, nome: "Cremalheira Plástico Chapa 18 (1m)", descricao: "Cremalheira residencial em plástico, chapa 18, com 1 metro.", preco: 25.00, icone: "fa-gears" },
    { id: 12, nome: "Cremalheira Plástico Chapa 16 (1m)", descricao: "Cremalheira residencial em plástico, chapa 16, com 1 metro.", preco: 28.00, icone: "fa-gears" },
    { id: 13, nome: "Cremalheira Plástico Chapa 14 (1m)", descricao: "Cremalheira residencial em plástico, chapa 14, com 1 metro.", preco: 32.00, icone: "fa-gears" },
    { id: 14, nome: "Cremalheira Nylon Chapa 16 (1m)", descricao: "Cremalheira residencial em nylon industrial, chapa 16, com 1 metro.", preco: 38.00, icone: "fa-gears" },
    { id: 15, nome: "Cremalheira Nylon Chapa 14 (1m)", descricao: "Cremalheira residencial em nylon industrial, chapa 14, com 1 metro.", preco: 42.00, icone: "fa-gears" },
    { id: 16, nome: "Cremalheira Alumínio Chapa 14 (1m)", descricao: "Cremalheira residencial em alumínio, chapa 14, com 1 metro.", preco: 55.00, icone: "fa-gears" },

    // Engrenagens
    { id: 17, nome: "Engrenagem Interna", descricao: "Engrenagem interna de tração para motores de portão.", preco: 50.00, icone: "fa-gear" },
    { id: 18, nome: "Engrenagem Externa", descricao: "Engrenagem externa de tração para motores de portão.", preco: 50.00, icone: "fa-gear" },

    // Capacitores
    { id: 19, nome: "Capacitor 15uF", descricao: "Capacitor de partida para motores assíncronos de portão elétrico.", preco: 22.00, icone: "fa-bolt" },
    { id: 20, nome: "Capacitor 25uF", descricao: "Capacitor de partida para motores assíncronos de portão elétrico.", preco: 25.00, icone: "fa-bolt" },
    { id: 21, nome: "Capacitor 30uF", descricao: "Capacitor de partida para motores assíncronos de portão elétrico.", preco: 28.00, icone: "fa-bolt" },

    // Motores
    { id: 22, nome: "Motor DZ Spin", descricao: "Motor para portões de até 400kg, kit com 3 metros de cremalheira.", preco: 650.00, icone: "fa-cogs" },
    { id: 23, nome: "Motor DZ Slim", descricao: "Motor para portões de até 400kg, kit com 3 metros de cremalheira.", preco: 680.00, icone: "fa-cogs" },
    { id: 24, nome: "Motor DZ 500", descricao: "Motor para portões de até 600kg, kit com 3 metros de cremalheira.", preco: 850.00, icone: "fa-cogs" },
    { id: 25, nome: "Motor DZ 800", descricao: "Motor para portões de até 800kg, kit com 3 metros de cremalheira.", preco: 1050.00, icone: "fa-cogs" },

    // Baterias
    { id: 26, nome: "Bateria A23", descricao: "Bateria para controles remotos de portão, modelo A23.", preco: 12.00, icone: "fa-battery-full" },
    { id: 27, nome: "Bateria A27", descricao: "Bateria para controles remotos de portão, modelo A27.", preco: 12.00, icone: "fa-battery-full" },
    { id: 28, nome: "Bateria 2032", descricao: "Bateria tipo moeda para controles remotos de portão, modelo CR2032.", preco: 8.00, icone: "fa-battery-full" },

    // Tabletes de cremalheira (25cm)
    { id: 29, nome: "Tablete de Cremalheira Plástico (25cm)", descricao: "Tablete de reposição em plástico com 25cm.", preco: 10.00, icone: "fa-gears" },
    { id: 30, nome: "Tablete de Cremalheira Nylon (25cm)", descricao: "Tablete de reposição em nylon com 25cm.", preco: 14.00, icone: "fa-gears" },
    { id: 31, nome: "Tablete de Cremalheira Alumínio (25cm)", descricao: "Tablete de reposição em alumínio com 25cm.", preco: 18.00, icone: "fa-gears" },

    // Acessórios diversos
    { id: 32, nome: "Tampa de Motor", descricao: "Tampa de reposição para motores de portão eletrônico.", preco: 60.00, icone: "fa-box" },
    { id: 33, nome: "Roldana 2P", descricao: "Roldana de reposição modelo 2P para portões deslizantes.", preco: 30.00, icone: "fa-circle-notch" },
    { id: 34, nome: "Roldana 2.1P", descricao: "Roldana de reposição modelo 2.1P para portões deslizantes.", preco: 32.00, icone: "fa-circle-notch" },
    { id: 35, nome: "Roldana 3P", descricao: "Roldana de reposição modelo 3P para portões deslizantes.", preco: 35.00, icone: "fa-circle-notch" },
    { id: 36, nome: "Roldana 4P", descricao: "Roldana de reposição modelo 4P para portões deslizantes.", preco: 40.00, icone: "fa-circle-notch" },
    { id: 37, nome: "Suporte Aéreo para Motor", descricao: "Suporte de fixação aérea para instalação de motores de portão.", preco: 45.00, icone: "fa-toolbox" },
    { id: 38, nome: "Base de Chão para Motor", descricao: "Base de fixação no chão para instalação de motores de portão.", preco: 45.00, icone: "fa-toolbox" }
];