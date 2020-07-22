import { Migration } from 'mikro-orm';

export class Migration20200722171837 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `ingredient` (`id` integer not null primary key autoincrement, `name` varchar not null);');

    this.addSql('create table `ingredient_recipe_usage` (`id` integer not null primary key autoincrement, `amount` integer not null);');

    this.addSql('create table `recipe` (`id` integer not null primary key autoincrement, `name` varchar not null);');

    this.addSql('alter table `ingredient_recipe_usage` add column `recipe_id` integer null;');
    this.addSql('alter table `ingredient_recipe_usage` add column `ingredient_id` integer null;');
    this.addSql('create index `ingredient_recipe_usage_recipe_id_index` on `ingredient_recipe_usage` (`recipe_id`);');
    this.addSql('create index `ingredient_recipe_usage_ingredient_id_index` on `ingredient_recipe_usage` (`ingredient_id`);');
  }

}
