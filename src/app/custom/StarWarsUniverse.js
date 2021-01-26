import Entity from './Entity';

export default class StarWarsUniverse {
  constructor() {
    this.entities = [];
  }

  async init() {
    const response = await fetch('https://swapi.dev/api/');
    const data = await response.json();

    for (const property in data) {
      const entityResponse = await fetch(data[property]);
      const entityData = await entityResponse.json();

      const entity = new Entity(property, entityData);

      this.entities.push(entity);
    }
  }
}
