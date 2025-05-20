export class AddRecord{
    itemName : string = '';
    itemQty : number = 0;
    unit : string = '';
    buyQty : number = 0;
    buyRate : number = 0;

    sellQty : number = 0;
    sellRate : number = 0;

    carryForward : number = 0;
    creayedAt : string = '';

    constructor(
        itemQty: number,
        buyQty: number,
        buyRate: number,
        sellQty: number,
        sellRate: number,
        itemName: string,
        unit: string,
        carryForward :number,
        creayedAt: string
    ) {
        this.itemName = itemName;
        this.itemQty = itemQty;
        this.unit = unit;
        this.buyQty = buyQty;
        this.buyRate = buyRate;

        this.sellRate = sellRate;
        this.sellQty = sellQty;
        this.carryForward = carryForward;
        this.creayedAt = creayedAt;
    }

}