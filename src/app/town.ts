export class Town {
  id: string;
  city: string;
  postcode: string;
  latitude: string;
  longitude: number;
  weather: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
