const express = require("express");
const cors = require("cors");

const { extractIntent } = require("./intentExtractor");
const { designSystem } = require("./systemDesigner");
const { generateSchema } = require("./schemaGenerator");
const { validateConfig } = require("./validator");
const { repairConfig } = require("./repairEngine");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("AI App Compiler Backend is running");
});

app.post("/compile", (req, res) => {
  const { prompt } = req.body;

  const intent = extractIntent(prompt);
  const design = designSystem(intent);
  let config = generateSchema(design);

  let validation = validateConfig(config);

  if (!validation.valid) {
    config = repairConfig(config, validation.errors);
    validation = validateConfig(config);
  }

  res.json({
    message: "Compilation successful",
    pipeline: {
      intent,
      design,
      config,
      validation
    }
  });
});

app.listen(5001, () => {
  console.log("Backend running on http://localhost:5001");
});



