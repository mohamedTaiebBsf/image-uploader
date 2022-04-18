import { NextFunction, Request, Response } from "express";
import fs from "fs";
import path from "path";
import rimraf from "rimraf";
import ImageManager from "../services/ImageManager";

class PurgeMiddleware {
  private fileLife: number = 3600000;
  private uploadsDir: string = new ImageManager().getTarget();

  public purge = (req: Request, res: Response, next: NextFunction) => {
    fs.readdir(this.uploadsDir, (err, files: string[]) => {
      if (files) {
        files.forEach((file: string, index: number) => {
          fs.stat(path.join(this.uploadsDir, file), (err, stats) => {
            if (err) {
              console.error(err);
              return res.status(400).send("Error purging...");
            }

            const now = new Date().getTime();
            const endTime = this.getEndTime(stats.ctime);

            if (now > endTime) {
              return rimraf(path.join(this.uploadsDir, file), (err) => {
                if (err) {
                  console.error(err);
                  return res.status(400).send("Error purging...");
                }

                console.log(`Success purge ${this.uploadsDir} folder`);
              });
            }
          });
        });
      }
      next();
    });
  };

  private getEndTime(ctime: Date) {
    return new Date(ctime).getTime() + this.fileLife;
  }
}

export default PurgeMiddleware;
