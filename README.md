# Portfolio Website – Coding Assignment 14

**Author:** Akintayo Popoola **Course:**
Full Stack Web Development **Assignment:**
Coding Assignment 14 – Portfolio with Component Library & Docker ---

## Running the Project with Docker

This project includes a multi-stage Docker build that produces a production-ready version of the portfolio site. Follow the steps below to build, run, and access the application.

## Prerequisites

### Ensure you have:

Docker Desktop installed and running

Port 5575 available on your machine

## Build the Docker Image

### This assignment requires the image to be named:

popoola_akintayo_coding_assignment14

Run:

docker build -t popoola_akintayo_coding_assignment14 .

This uses a multi-stage Dockerfile that compiles the React application in production mode using node:18-alpine and serves the final build using serve.

## Run the Docker Container

### The running container must also use the required naming convention:

docker run -d \
 --name popoola_akintayo_coding_assignment14 \
 -p 5575:5575 \
 popoola_akintayo_coding_assignment14

This starts the container and exposes the site on your machine.

## Access the Application

### Once the container is running, open your browser and visit:

http://localhost:5575

## Stop and Remove the Container

### To stop the running container:

docker stop popoola_akintayo_coding_assignment14

### To remove it:

docker rm popoola_akintayo_coding_assignment14

## Project Sections

The portfolio includes the following sections as required:

### Basic Information

The introductory area includes:

Name and professional title

Profile image

Short tagline and summary of expertise

Primary CTAs (e.g., View Projects, Contact)

## Work

A curated selection of professional and academic projects, each containing:

Project title

Description

Image

Tech list

Direct GitHub link

Category-based filtering using custom Radio components

## Skills

Organized into categories such as:

Languages

Frameworks

Tools and technologies

Each skill item uses custom Card, Typography, and Label components for consistent UI.

## Resources

A curated list of developer learning resources including:

Titles

Icons

Summaries

External links

Displayed using custom Card and Typography components.

## Developer Setup

A breakdown of the personal development environment, including:

VS Code extensions and theme

Preferred terminal and shell setup

Coding font (with ligatures)

## Contact

A dedicated contact page featuring:

Professional glass-style information cards

Icons indicating location, email, status, and response time

A functional contact form

Custom Button, Typography, Heading, and Card components

Accessible and responsive layout

## Technology Stack

This project uses:

### Frontend

React (Create React App)

TypeScript

Custom Component Library (Buttons, Cards, Labels, Typography, Radio, Image)

CSS + Styled Components

Lucide React Icons

### Testing

Jest

React Testing Library

100% passing test suite

Husky pre-commit hooks enforce tests before commit

### Tooling / Pipeline

Prettier & ESLint

GitHub Actions (CI pipeline for lint, format, and test)

Husky pre-commit checks

### Docker

Multi-stage build using:

node:18-alpine (build stage)

serve (run stage)

Exposed on port 5575
