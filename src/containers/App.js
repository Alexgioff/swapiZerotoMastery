import React, {Component} from 'react';

import ContainerData from '../components/ContainerData';
import Headers from '../components/Headers';
import Particles  from 'react-particles-js';


const particlesJSON = {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 1200
        }
      },
      "color": {
        "value": "#020202"
      },
      "shape": {
        "type": "triangle",
        "stroke": {
          "width": 1,
          "color": "#ecc860"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 90,
        "color": "#ecc860",
        "opacity": 0.4,
        "width": 1.736124811591
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };

  let i = 0;
  let peoples = [];

class App extends Component {
    constructor(){
        super();
        this.state = {
            people: [],
            searchField: ''

        }
    }


    componentDidMount() {
        setTimeout(() => {
         this.fetchSwapi();
        }, 2000)
    }

    onSearchChange = (event) => {
        this.setState({
            searchField: event.target.value
        });
    }

    fetchSwapi = () => {
        i = ++i;
        let api = 'https://swapi.co/api/people/?page=' +i;
        fetch(api)
            .then(res => res.json())
            .then(data => {
                peoples = peoples.concat(data.results);
                if(data.next === null){
                    this.setState({people: peoples})
                    return -1;
                } else {
                    this.fetchSwapi()
                }
            })
    }


    render(){
        const {people, searchField} = this.state;
        const searchPeople = people.filter(people => {
            return people.name.toLowerCase().includes(searchField.toLowerCase())
        });
        return !people.length ? <h1 style={{color: "#fff", textAlign: "center"}}>Loading...</h1> :
                (
                    <div>
                    <Particles className='particles'
                        params={particlesJSON}
                    />
                        <Headers searchChange={this.onSearchChange}/>
                        <ContainerData people={searchPeople}/>
                    </div>
                )
    }
}



export default App;