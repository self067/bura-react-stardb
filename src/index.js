// import React from 'react';
// import ReactDOM from 'react-dom';

//  fetch('https://swapi.dev/api/people/1/',
// { mode: 'no-cors', }

// const url = 'https://api.github.com/users';
// const url = './db.json';
// const url = 'https://api.foursquare.com/v2/';
// const urlAll = 'https://api.foursquare.com/v2/';

// axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)

class SwapiService {
  _apiBase = 'https://swapi.dev/api/';

  // _clientId = 'O3KMVQGZ3L3IHZ1XTE1BL3HEK4C10MTKK1EWC3XSAZBXMWD5';
  // _clientSecret = 'G1LASIHAR013A3QWVBJ0IJ3PPN40JX3BDEEBX51WHCRWATIE';
  //  https://api.foursquare.com/v2/venues/explore/?ll=40.7243,-74.0018&client_id=O3KMVQGZ3L3IHZ1XTE1BL3HEK4C10MTKK1EWC3XSAZBXMWD5&client_secret=G1LASIHAR013A3QWVBJ0IJ3PPN40JX3BDEEBX51WHCRWATIE&v=20200101
  // _authData = `?ll=40.7243,-74.0018&client_id=${this._clientId}&client_secret=${this._clientSecret}&v=20200101`;

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} status=${res.status}`);
    }
    const body = await res.json();
    return body;
  }

  async getAllPeople() {
    const res = await this.getResource('people/');
    return res.results;
  }

  async getAllPlanets() {
    const res = await this.getResource('planets/');
    return res.results;
  }

  async getAllStarships() {
    const res = await this.getResource('starships/');
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`people/${id}/`);
  }

  getPlanet(id) {
    return this.getResource(`planet/${id}/`);
  }

  getStarship(id) {
    return this.getResource(`startship/${id}/`);
  }


}

const swapi = new SwapiService();

swapi.getAllPeople()
  .then((people) => {
    people.forEach((p) => {
      console.log(p.name);
    });
  }).catch((e)=> {
    console.log(e);
});

// swapi.getPerson(1)
//   .then((body) => {
//     console.log(body);
//   }).catch((e)=> {
//     console.log(e);
// });
