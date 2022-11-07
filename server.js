// @deno-types="npm:@types/express"  👈タイプ情報
import express from "npm:express@4";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
