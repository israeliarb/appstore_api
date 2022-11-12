import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class PaymentType extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;
}
