import { NestFactory } from '@nestjs/core';
import * as fs from 'fs';
import { AppModule } from './app.module';
import { TagsService } from './tags/tags.service';

async function main() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const tagsService = app.get(TagsService);
  const folders = fs.readdirSync('./files');
  console.log(folders);
  for (const folder of folders) {
    tagsService.setFileNameAsTitle('./files/' + folder);
  }
}
main();
