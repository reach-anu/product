import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private products = [
    {
      name: 'car',
      price: '200',
    },
    {
      name: 'horse',
      price: '400',
    },
  ];
  findAll() {
    return this.products;
  }
}
