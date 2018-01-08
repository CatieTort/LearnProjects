import potato from '../images/PotatoHouse.png'
import cherry from '../images/cherryHouse.jpeg'
import highlander from '../images/highlanderHouse.jpg'
import taco from '../images/tacoHouse.jpg'
import main from '../images/mainhouse.jpeg'

const apartments = [
  {
    id:0,
    address: '190 Potato Lane',
    beds: 5,
    baths: 1,
    price: "$3,000",
    forRent: true,
    photo: potato
  },
    {
    id:1,
    address: '33 Cherry Drive Apt 2',
    beds: 0,
    baths: 6,
    price: "$1,000",
    forRent: false,
    photo: cherry
  },
    {
    id:2,
    address: '77 Highlander Ave',
    beds: 2,
    baths: 2,
    price: "$4,000",
    forRent:true,
    photo: highlander
  },
    {
    id:3,
    address: '99 Taco Street',
    beds: 6,
    baths: 1,
    price: "$1,000",
    forRent:false,
    photo: taco
  },
    {
    id:4,
    address: '1234 Main Street',
    beds: 3,
    baths: 2,
    price: "$2,750",
    forRent:true,
    photo: main
  },
]

export default apartments;
