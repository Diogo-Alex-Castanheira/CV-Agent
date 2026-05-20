![alt text](https://github.com/EYAIChallenge/Overview/blob/main/Banner-EY-1280x640.jpg "EY AI Challenge")

<h1 align="center"> <img src="https://github.com/EYAIChallenge/Overview/blob/main/EY_Logo_Beam_RGB_White_Yellow.png" width="40" alt="Logo"/> AI Challenge 2026 | CV Analyzer Agent Challenge </h1>

## 📄 Description

In this strategic consulting challenge, your team will partner with **EY's talent acquisition department** to revolutionize their candidate selection process for **5 critical open positions**.

As consultants, you'll develop an **AI-powered talent intelligence solution** that transforms how the organization **identifies, evaluates**, and **engages top talent**.

Your solution may take various forms:
- A **decision support system** that identifies optimal candidate-role matches.
- An **intelligent recommendation engine** surfacing high-potential candidates.
- A **strategic interview platform** generating personalized assessment questions.
- Or any other innovative AI-driven approach.

### 🎯 Objective
Demonstrate how **strategic application of AI** can:
- Enhance recruitment quality.
- Improve candidate experience.
- Reduce time-to-hire.
- Deliver a competitive advantage in the war for talent.

---

## 🗂 Data

The dataset consists of:
- 📄 **107 candidate CVs** (PDF format)
- 🧾 **5 job descriptions** (PDF format)

---

## 🧠 Consulting Mindset Expectations

- **Business Problem Solvers**: Address real hiring pain points.
- **Insight Providers**: Turn raw CVs into actionable intelligence.
- **Experience Designers**: Enhance recruiter and candidate journeys.
- **Sell the Solution**: Present it as a valuable strategic asset to the client.

## Local CV Pipeline

This repository includes a local-first Python pipeline that converts the CV and
job description PDFs into frontend-ready JSON files under `output/`.

Install dependencies:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt
```

Fast deterministic run:

```bash
python pipeline.py --clear-cache
```

Optional local AI polish with Ollama, keeping candidate data on the machine:

```bash
ollama serve
python pipeline.py --ai-backend ollama --ai-polish-top-n 10
```

The default Ollama model is `phi4-mini:3.8b` because it produced the most
reliable structured JSON in local tests. You can override it:

```bash
python pipeline.py --ai-backend ollama --ollama-model llama3.1:8b --ai-polish-top-n 10
```

Generated files:

- `output/jobs_metadata.json`
- `output/job_1_results.json` through `output/job_5_results.json`

`jobs_metadata.json` includes job card/detail data such as department,
location, experience level, about-role text, requirements, required skills,
languages, responsibilities, preferred certifications, and source PDF. Each
`job_X_results.json` also includes the same data under a top-level `job` object
next to the ranked `candidates` list.

Known data issue: the text extractor skips PDFs that return empty text. In the
current dataset those are `cv_2.pdf`, `cv_21.pdf`, `cv_45.pdf`, `cv_75.pdf`,
and `cv_90.pdf`.

---

## 📦 Deliverables

- ✅ A **working prototype** of your solution.
- ✅ **Organized, well-documented, reproducible code**.
- ✅ A **strategic presentation** pitching your solution to EY executives.
- ✅ A technical presentation pitching your solution to the judging panel as if they were the client's IT stakeholders
- ✅ A frontend for the solution is mandatory for the live demo of the strategic presentation

🔹 **Optional Enhancements**:  
- Performance analysis vs traditional knowledge access methods
  
<h2 align="center"> ⚠️ **Important Submission Requirement** ⚠️ </h2>
<h3> ✅ Before the 14h00 deadline</h3>

Submit you solution to you specific branch:
- Repository with the code of the solution developed
  - The solution must be ready to run
- A README file with the context of the solution and how to run it

---

## 🛠 Tech & Tools – You Have Full Freedom

- **Mandatory:**  
  - Solution must be developed mainly using Python  
  - You'll publish the solution into a specific branch of the challenge's repository

- **Free to Choose:**  
  - Libraries/Packages
  - Visualization
  - Frontend solution
  - AI Assistants

---

## ⏱ Time Management & Rules

- Total Time: **4 hours** – No extensions  
- Final Presentations: **5 minutes each** – Simulate a client-facing pitch
  - You must divide the team for the strategic and technical presentations
- Support:
  - 🧑‍💻 1 technical session (max 5 minutes)  
  - 💼 1 business session (max 5 minutes)  
  - **Note:** Assistants guide only — no direct solutions

---

## ⚙️ Strategy & Workflow Tips

1. 👥 **Assign roles early** – data analyst, business analyst, presenter.
2. 🔄 **Work in parallel** – avoid bottlenecks.
3. 🧑‍🏫 **Start preparing the presentation early**.
4. 🎯 **Be realistic** – focus on clarity and impact over complexity.

> 💡 Success is about **teamwork, structure, clarity, and strategy**, not just code.

---

## 💡 Tips for Competitors

- 🎯 Choose your **LLM** strategically: 

- 🧾 **Master the Talent Data**: Look beyond the obvious – identify potential, culture fit, growth signals.

- 🛤 Define a clear **AI Role**: Will it automate, augment, or assist hiring?

- 👥 **Design for All Stakeholders**: Recruiters, hiring managers, and candidates.

- 📊 Show **Measurable Impact**:
  - Reduced time-to-hire
  - Improved candidate quality
  - Cost savings

- 🚀 Think beyond tools – **reinvent the hiring process** itself.

- 📈 Build a **Business Case**: Position your solution as a strategic advantage.

- - **Own what you're doing:**
  Don't just let the AI create the solution for you without understanding it's core tecnically and funcionally 

---

## 🧭 Final Thought

This challenge is your opportunity to **redefine how organizations attract and hire talent**.

🏆 Winning teams will blend:
- Strategic business insight
- Clear communication
- End-to-end stakeholder thinking
- Technical AI expertise

Deliver a solution that’s not just smart – make it **transformational**.

---

### 🏁 Brought to you by **EY AI Challenge**
