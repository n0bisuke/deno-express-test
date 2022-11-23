// @deno-types="npm:@types/express"  👈タイプ情報
// import express from "npm:express@4";
import express  from "npm:express";

const app = express();
const PORT = 3000;
app.get("/", (_req, res) => {
  res.send("Hello World!!!!!");
});


app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
