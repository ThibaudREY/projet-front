export class Town {
  id: string;
  city: string;
  postcode: string;
  latitude: string;
  logitude: number;
  weather: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
