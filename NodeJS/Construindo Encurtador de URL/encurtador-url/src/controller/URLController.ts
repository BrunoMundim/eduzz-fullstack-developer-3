import URL from "../database/model/URL";
import { Request, response, Response } from "express";
import shortId from "shortid";
import { config } from "../config/Constants";

export class URLController {
  public async shorten(req: Request, res: Response): Promise<void> {
    const { originURL } = req.body;
    const url = await URL.findOne({ originURL });
    if (url) {
      res.json(url);
      return;
    }
    const hash = shortId.generate();
    const shortURL = `${config.API_URL}/${hash}`;
    const newURL = await URL.create({ hash, shortURL, originURL });
    res.json(newURL);
  }

  public async redirect(req: Request, res: Response): Promise<void> {
    const { hash } = req.params;
    const url = await URL.findOne({ hash });

    if (url) {
      res.redirect(url.originURL);
      return;
    }

    res.status(400).json({ error: "URL not found" });
  }
}
