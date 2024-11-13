# CMD Line AI Chatbot with Google GEMINI using Node.js

Demo project for an AI ChatBot using Google Gemini, built using Node.js! This application is designed to provide a conversational experience with AI, leveraging the capabilities of the Google Gemini API.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

The Google Gemini ChatBot is integrated in a Node.js application, interacting with users through natural language processing. The applications provides a simple command line interface to offer a range of functionalities powered by the Google Gemini API. Whether you need information, assistance, or just a chat, this bot is here to help.

## Features

- Natural Language Understanding
- Contextual Conversations
- Integration with Google Gemini API
- Easy Setup and Configuration

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 18 or higher)
- npm (Node package manager)
- Google Gemini API key

## Installation

Follow these steps to set up and run the application:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/AI-ChatBot-Nodejs.git
   cd AI-ChatBot-Nodejs
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Add your Google Gemini API key in `.env` file of the root directory:

   ```env
   GEMINI_API_KEY=YOUR_API_KEY
   ```

   - First, get the initial code from [Google AI Studio](https://aistudio.google.com/app/prompts/new_chat)
   - Next, click 'Get API key'
   - then 'Create API key'
   - Select your Google Cloud project and click 'Create'

## Usage

To start the chatbot application, run:

```bash
node index.js
```
