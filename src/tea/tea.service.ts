import { Injectable } from '@nestjs/common';
import { Tea } from './tea.interface';
import Data from '../data';

@Injectable()
export class TeaService {
  private readonly teas: Tea[] = Data.teas;

  findAll(flavour?: string): Tea[] {
    if (flavour) {
      flavour = flavour.toLowerCase();
      return this.teas.filter((value: Tea) => value.flavour === flavour);
    }
    return this.teas;
  }

  create(tea: Tea): void {
    this.teas.push(tea);
  }

  findById(id: string): Tea {
    return this.teas.find((value: Tea) => value.id === id);
  }

  remove(id: string): void {
    this.teas.splice(this.teas.indexOf(this.teas.find((value: Tea) => value.id === id)), 1);
  }

  update(id: string, updatedTea: Tea): void {
    this.teas.splice(this.teas.indexOf(this.teas.find((value: Tea) => value.id === id)), 1, updatedTea);
  }
}
