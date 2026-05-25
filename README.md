## AI App Compiler

AI App Compiler is a compiler-style software generation system that converts natural language requirements into a structured, validated application configuration.

---

## Objective

The goal of this project is to build a reliable system where open-ended user prompts are converted into strict app architecture output.

### Example Input

Build a CRM with login contacts dashboard admin analytics and premium payments

The system produces:

* Intent structure
* System design
* UI schema
* API schema
* Database schema
* Auth rules
* Validation result

---

## Architecture

```text
User Prompt
↓
Intent Extractor
↓
System Designer
↓
Schema Generator
↓
Validator
↓
Repair Engine
↓
Final App Configuration
```

---

## Pipeline Explanation

### 1. Intent Extraction

The intent extractor reads the user prompt and identifies:

* app type
* required features
* roles
* assumptions

---

### 2. System Design

The system designer converts extracted intent into app architecture.

It defines:

* pages
* entities
* roles
* business logic

---

### 3. Schema Generation

The schema generator creates:

* UI schema
* API schema
* Database schema
* Auth schema

---

### 4. Validation Layer

The validator checks:

* required sections exist
* API fields match DB fields
* auth rules exist
* schema consistency

---

### 5. Repair Engine

The repair engine automatically fixes inconsistencies.

Example:

If an API uses contacts but the database schema does not contain a contacts table, the repair engine adds it automatically.

---

## Execution Flow

### Backend API

```text
POST /compile
```

### Input

```json
{
  "prompt": "Build a CRM with login contacts dashboard admin analytics and premium payments"
}
```

### Output

```json
{
  "pipeline": {
    "intent": {},
    "design": {},
    "config": {},
    "validation": {}
  }
}
```

---

## Tech Stack

### Backend

* Node.js
* Express.js
* JavaScript

### Frontend

* HTML
* CSS
* JavaScript

---

## Features

* Multi-stage compiler pipeline
* Structured JSON generation
* Validation engine
* Repair engine
* Frontend UI
* Streaming JSON effect
* Theme toggle
* Copy output button

---

## How to Run

### Backend

```bash
cd backend
node server.js
```

Runs on:

```text
http://localhost:5001
```

### Frontend

Open:

```text
frontend/index.html
```

---

## Example Prompt

```text
Build a CRM with login contacts dashboard admin analytics and premium payments
```

---

## Folder Structure

```text
app-compiler/
├── backend/
│   ├── intentExtractor.js
│   ├── systemDesigner.js
│   ├── schemaGenerator.js
│   ├── validator.js
│   ├── repairEngine.js
│   └── server.js
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

---

## Future Improvements

* LLM integration
* Runtime renderer
* Deployment system
* Evaluation metrics
* Retry tracking
* Runtime app generation
