import { Migration } from 'mikro-orm';

export class Migration20200723122043 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `recipe` add column `selling_price` integer null;');
  }

}
