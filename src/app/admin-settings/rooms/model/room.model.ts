export class Room {
    id: number;
    proprtyId: number
    roomNo: string;
    type: string;
    acNonac: string;
    meal: string;
    capacity: string;
    retailPrice: number;
    discountAmount: number;
    constructor(room: Room) {
      {
        this.id = room.id || this.getRandomID();
        this.proprtyId = room.proprtyId;
        this.roomNo = room.roomNo || '';
        this.type = room.type || '';
        this.acNonac = room.acNonac || '';
        this.meal = room.meal || '';
        this.capacity = room.capacity || '';
        this.retailPrice = room.retailPrice;
        this.discountAmount = room.discountAmount;
      }
    }
    public getRandomID(): number {
      const S4 = () => {
        return ((1 + Math.random()) * 0x10000) | 0;
      };
      return S4() + S4();
    }
  }
  