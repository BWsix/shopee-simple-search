import { Injectable } from "@nestjs/common";
import Shopee from "shopee";

const shopee = new Shopee(Shopee.BASE_URL.TAIWAN);

const parsePrice = (price: number) => price / 100000;

@Injectable()
export class AppService {
  async search(query: string): Promise<any> {
    const result = await shopee.search({ query });

    const parsedResult = result.map((item) => ({
      name: item.name,
      price: parsePrice(item.price),
      stock: item.stock,
    }));

    return parsedResult;
  }
}
