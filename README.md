# Task Organizer

This repository contains a simplified application for task organization. The goal is to create an environment where users can easily create, store, and edit their task boards, each containing relevant activities. This document covers all aspects of the application, including its architecture, routes, and other pertinent information.

## Overview

This application allows users to create customized task boards and manage their associated activities. A simple login system ensures that only authenticated users can access and modify their boards and tasks. Each board is linked to a specific user, just as each activity is linked to a board.

## Tools
- Bun
- Elysia
- Drizzle

## Architecture

- **Controller:** Responsible for managing all the application routes, providing the main interface between the user and the system.
- **Infrastructure:** Handles direct operations related to the database, including connection configuration and table management.
- **Model:** Contains the interfaces, classes, and models used in the application, defining the data structure.
- **Repository:** Acts as an intermediary between the application and the database, handling operations like insertions and selections, responsible for sending and retrieving data.

## Routes

The application routes are currently under construction and will be added soon.

## Contribution

As this is an initial project, contributions and suggestions for improvements are welcome. Feel free to open an issue or send pull requests with contributions.
