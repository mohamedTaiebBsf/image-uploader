import express from "express";
import ImageManager from "../services/ImageManager";

class ImageController {
  constructor(private manager: ImageManager) {}

  public upload = (req: express.Request, res: express.Response) => {
    this.manager.upload(req, res, function (err) {
      if (err) {
        return res.status(400).send({ msg: err });
      } else {
        if (req.file === undefined) {
          return res.status(400).send({ msg: "Error: No File Selected!" });
        }

        res.status(200).send({ msg: "Successfully Uploaded!", file: req.file });
      }
    });
  };
}

export const imageController = new ImageController(new ImageManager());
