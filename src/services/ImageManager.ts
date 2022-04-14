import express from "express";
import fs from "fs";
import multer from "multer";
import path from "path";

interface FileFilter {
  (
    req: express.Request,
    file: Express.Multer.File,
    callback: multer.FileFilterCallback
  ): void;
}

class ImageManager {
  private uploadTo: string = "uploads";
  private fieldName: string = "my-image";

  public get upload(): express.RequestHandler {
    return multer(this.options).single(this.fieldName);
  }

  private storage(): multer.StorageEngine {
    return multer.diskStorage({
      destination: (req, file, cb) => {
        this.mkdirTarget();

        cb(null, this.uploadTo);
      },
      filename: (req, file, cb) => cb(null, this.uniqueName(file)),
    });
  }

  private filter(): FileFilter {
    return (req, file, cb) => {
      this.checkFileType(file, cb);
    };
  }

  private get options(): multer.Options {
    return {
      storage: this.storage(),
      fileFilter: this.filter(),
    };
  }

  private checkFileType(
    file: Express.Multer.File,
    cb: multer.FileFilterCallback
  ) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(null, false);
    }
  }

  private mkdirTarget(): void {
    if (!fs.existsSync(this.uploadTo)) {
      fs.mkdirSync(this.uploadTo);
    }
  }

  private uniqueName(file: Express.Multer.File): string {
    const uui = Date.now() + "-" + Math.round(Math.random() * 1e9);
    return `${uui}-${file.originalname}`;
  }
}

export default ImageManager;
