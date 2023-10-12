export class Property {
    id: number;
  name: string;
  address: string;
  gmapCoordinates: string;
  email: string;
  phone: string;
  chargingType: string;
  constructor(property: Property) {
    {
      this.id = property.id || this.getRandomID();
      this.name = property.name || '';
      this.address = property.address || '';
      this.gmapCoordinates = property.gmapCoordinates || '';
      this.email = property.email || '';
      this.phone = property.phone || '';
      this.chargingType = property.chargingType || '';
    }
  }
  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}
