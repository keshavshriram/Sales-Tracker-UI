export class AddRecord{
    action ?: string;
    productId : number | undefined;
    productName : string = '';
    quantity : number = 0;
    unitOfMeasure : string = '';
    createdAt ?: string = '';
    totalAmount : number = 0;
    perProductRate : number = 0;

    constructor(
        action : string,
        productId : number | undefined, 
        productName: string,
        quantity: number,
        unitOfMeasure: string,
        createdAt: string,
        totalAmount: number,
        perProductRate: number,
    ) {
        this.action = action;
        this.productId = productId
        this.productName = productName;
        this.quantity = quantity;
        this.unitOfMeasure = unitOfMeasure;
        this.createdAt = createdAt;
        this.totalAmount = totalAmount;
        this.perProductRate = perProductRate;

    }

}