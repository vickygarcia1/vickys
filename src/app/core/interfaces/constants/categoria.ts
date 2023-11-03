import { Categoria } from "../categoria";

export const CATEGORIA: Categoria[]=[
    /*que algo arranque con{}significa objeto*/
    {
        nombre:'Hamburguesas',
        id: 1,
        fotoUrl:"https://www.clarin.com/img/2022/05/27/0HXb0UR0v_2000x1500__1.jpg",
        producto:[{
            nombre: 'Clasic',
            precio: 2000,
            descripcion: 'Doble patty, cebolla, peinillos y tomate',
            imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQytZOcyM06CRhy5zq0ue0DoDoTvcaO6a3SLw&usqp=CAU'
        },
        {
            nombre: 'Americana',
            precio: 2500,
            descripcion: 'Patty simple, cebolla caramelizada, panceta y salsa ahumada',
            imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQjnDS1_L-dgjQvNmMf91upSujmjeUg6SLDg&usqp=CAU'  
        },
        {
            nombre: 'Cheese x2',
            precio: 3000,
            descripcion: 'Doble patty, doble cheddar y doble panceta',
            imagen:'https://img.cocinarico.es/2022-02/smashburger-tha2.jpg'     
        },
        {
            nombre: 'Vegana',
            precio: 2900,
            descripcion: 'Patty NotCo, palta, lechuga y pepinos',
            imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiteyzLN7BOA-NviLWRDaqz72DxsXsAAfFAQ&usqp=CAU'
        },
        {
            nombre: 'House burger',
            precio: 3200,
            descripcion: 'Pan a base de chia, tomate, salsa picante y patty ahumada',
            imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx2d8nsmn4GCaMGpF6gODKPw7MBMvdbbv6g3DYA8D2FmuCJWRIEsNlsZ1zsUzhI8DU3Tg&usqp=CAU'
        }

        ]
    } ,
      {
        nombre:'Pizzas',
        id: 2,
        fotoUrl:"https://2trendies.com/hero/2023/04/pizzapepperoni.jpg?width=768&aspect_ratio=16:9&format=nowebp",
        producto:[{
            nombre: "Clasica",
            precio: 2000,
            descripcion: "Muzzarella",
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpx259EHIpu5kb8yGbeQo2W5_4vSUJqAtlA&usqp=CAU"
        },
        {
            nombre: 'Tres quesos',
            precio: 2500,
            descripcion: 'Roquefort, cremon y brie',
            imagen: 'https://www.pizzahouse.es/wp-content/uploads/2017/02/tres-quesos.jpg' 
        },
        {
            nombre: 'Margarita',
            precio: 2300,
            descripcion: 'Albhaca, tomate y muzzarella',
            imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ula4VQvcErkBX-Kb9zsBQf17wVhXkcZ4tw&usqp=CAU'
        },
        {
            nombre: 'American',
            precio: 2500,
            descripcion: 'Cheddar, papas fritas y panceta',
            imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4cRGzDKaD0EMqVuEjb42Z_-Qsh6Z4qmQRiA&usqp=CAU'
        },
        {
            nombre: 'Pepperoni',
            precio: 2300,
            descripcion: 'Muzzarella y pepperoni',
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhu2Z8gcNT2_V-G2FKSH7ktuJXtjbkMBvbkw&usqp=CAU"
        }

        ]
    } ,
      {
        nombre:'Postres',
        id: 3,
        fotoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ472UPKYJ2XndR7PJU1BN0rrzTHnQ0zGpAw&usqp=CAU",
        producto:[{
            nombre: 'Brownie',
            precio: 800,
            descripcion: 'Con pedazos de chocolate amargo',
            imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQdlWBl9R6g45UcsLVrRwb0LGDwX0oy3ASTA&usqp=CAU'
        },
        {
            nombre: 'Helado',
            precio: 850,
            descripcion: 'Chocolate',
            imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcILW631NngA86mv4e8wlIf737DYlcRNlA3Q&usqp=CAU'
        },
        {
            nombre: 'Red velvet',
            precio: 1000,
            descripcion: 'humeda con frosting de queso crema',
            imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZn6z9L3Mkb1bwBUlsuPEoQdpE5hmYnK2LIg&usqp=CAU'
        },
        {
            nombre: 'Macarons',
            precio: 300,
            descripcion: 'chocolate',
            imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1NEG88YWaxPfFy0dV4NzYGQ0VylKEF4SzHg&usqp=CAU'
        },
        {
            nombre: 'Volcan de chocolate',
            precio: 1200,
            descripcion: 'chocolatoso con fambruesa',
            imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_xUcJfXyM4DHrrrhpBjQjh9K8zH-LvtGdGw&usqp=CAU'
        }
    ]
    } ,
      {
        nombre:'Bebidas',
        id: 4,
        fotoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAgtSkNHe_zHIIQ5jifzlPFl-WoZ6zG2oaqQ&usqp=CAU",
        producto:[{
            nombre: 'Agua',
            precio: 600,
            descripcion: 'Fresca',
            imagen:'https://bcdn.products.pcc.eu/wp-content/uploads/2022/09/FOT1-pH-wody.jpg'
        },
        {
            nombre: 'Gaseosas',
            precio: 600,
            descripcion: 'Coca Cola o Sprite',
            imagen:'https://masonlineprod.vtexassets.com/arquivos/ids/275303/Gaseosa-Coca-Cola-Sabor-Original-2-25-L-Gaseosa-Sprite-Lima-Lim-n-2-25-L-2-20222.jpg?v=638139945709100000'
        },
        {
        nombre: 'Fernet',
            precio: 1200,
            descripcion: 'Con Coca Cola',
            imagen:'https://acdn.mitiendanube.com/stores/835/701/products/pack-fernet-branca-750-ml-coca-cola-2250-ml1-157fa8ffbc7463fd3116661040936587-640-0.jpg'
        },
        {
            nombre: 'Limonada',
            precio: 900,
            descripcion: 'Con los limones mas frescos',
            imagen:'https://cdn1.celebritax.com/sites/default/files/styles/amp/public/recetas/limonada.jpg'
        },
        {
            nombre: 'Vodka cranberry',
            precio: 1200,
            descripcion: 'Vodka con soda, frutos rojos y una rodaja de limon',
            imagen:'https://tornadoughalli.com/wp-content/uploads/2022/11/VODKA-CRANBERRY-3-1.jpg'
        }
    ]
    } 
  
    ]
  
  