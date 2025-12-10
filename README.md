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

## Run the Docker Container

### The running container must also use the required naming convention:

docker run -d \
 --name popoola_akintayo_coding_assignment14 \
 -p 5575:5575 \
 popoola_akintayo_coding_assignment14

## Access the Application

### Once the container is running, open your browser and visit:

http://localhost:5575

## Stop and Remove the Container

### To stop the running container:

docker stop popoola_akintayo_coding_assignment14

### To remove it:

docker rm popoola_akintayo_coding_assignment14

## Project Sections

### Basic Information

Includes introductory hero content such as:

Name

Role

Personal introduction

Summary statement

## Work

Showcases featured projects with:

Titles

Descriptions

Images

Tech stacks

Direct GitHub links

## Skills

Organized into categories including:

Languages

Frameworks

Tools

Development technologies

## Resources

A curated set of learning resources featuring:

Titles

Icons or images

Short summaries

External links

## Developer Setup

Outlines the development environment used:

VS Code extensions & theme

Terminal configuration (e.g., Zsh / Oh My Zsh)

Preferred programming font with ligatures

## Contact

A dedicated Contact page

Professionally styled UI consistent with your component system

Social and external links

Accessible and responsive design

Integration of custom components and icons

## Technology Stack

This project uses:

React (Create React App)

TypeScript

Custom Component Library

CSS & Styled Components

Lucide React Icons

Docker Multi-Stage Build using:

node:18-alpine for building

serve for hosting the production build
