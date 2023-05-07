import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class ExplorerService {
  listAudioFiles(dirPath: string): string[] {
    const isPathExist = fs.existsSync(dirPath);
    if (!isPathExist) {
      throw 'Path provided do not exist';
    }

    const isFolder = fs.lstatSync(dirPath).isDirectory();
    if (!isFolder) {
      throw 'Path provided is not a folder';
    }

    const files = fs.readdirSync(dirPath);
    return files.filter((file) => file.endsWith('.mp3'));
  }
}
