import { Router } from "express";
import fileUpload from "express-fileupload";
import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const router = Router();
router.use(fileUpload());
router.post("/upload", (req, res) => {
  //   console.log(req.body.img);
  fs.writeFile(
    join(__dirname, `../data/users/${req.body.user}/file.png`),
    req.body.img.replace(/^data:image\/png;base64,/, ""),
    "base64",
    (error) => {
      if (error) {
        console.log(error);
        res.json({ success: false, error: error });
      } else {
        res.json({ success: true });
      }
    }
  );
});

export default router;
