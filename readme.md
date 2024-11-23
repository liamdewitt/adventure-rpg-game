# RPG Game Grid

## Table of Contents
1. [Overview](#overview)  
2. [Features](#features)  
3. [Technologies Used](#technologies-used)  
4. [Installation](#installation)  
5. [How to Play](#how-to-play)  
6. [Class Structure](#class-structure)  
8. [Reflection](#reflection)  


## Overview
The **RPG Game Grid** is a grid-based RPG game built with object-oriented programming (OOP) principles. Designed as a text-based adventure, the project simulates a player navigating a 2D grid, encountering enemies, collecting items, and reaching a final goal. This project demonstrates a modular design that’s scalable for future enhancements.

## Features
- **Object-Oriented Design**:  
  - Extensible class hierarchy with a `GridObject` base class and specialized subclasses like `PlayerObject`, `EnemyObject`, and `ItemObject`.
- **Interactive Gameplay**:  
  - Navigate the grid using CLI inputs via `inquirer`.  
  - Encounter randomized events such as battles or item discoveries.
- **Dynamic Grid System**:  
  - The grid is encapsulated in a `Grid` class, handling creation, updates, and player interactions.
- **Randomized Events**:  
  - Probabilistic event spawning ensures unpredictable and engaging gameplay.
- **Turn-Based Combat System**:  
  - Strategic battles with stats like attack, defense, and HP.

## Technologies Used
- **JavaScript**: Core programming language for the logic and structure.  
- **Node.js**: Runtime environment.  
- **Inquirer**: For creating a user-friendly CLI interface.

## Installation
1. Clone the repository:  
   ```bash
   git clone https://github.com/yourusername/rpg-game-grid.git
   cd rpg-game-grid

2. Install dependencies:
    ```bash
    npm install

3. Run the game:
    ```bash
    node grid.js

## How To Play
1. Start the game and follow the CLI prompts to navigate the grid.

2. Encounter various events such as battles, item pickups, or empty tiles.

3. Use strategic moves to survive enemy encounters and reach the final goal.

## Class Structure
- GridObject (Base Class)
    - Shared properties: position, name.
    - Shared methods: move(), interact().
- PlayerObject (Extends GridObject)
    - Unique properties: HP, inventory.
    - Unique methods: attack(), defend().
- EnemyObject (Extends GridObject)
    - Unique properties: HP, strength.
    - Unique methods: attackPlayer().
- ItemObject (Extends GridObject)
    - Unique properties: effect.
    - Unique methods: use().

## Reflection
This project was a hands-on way to deepen my understanding of OOP and modular programming. The focus on planning and structure reinforced the importance of designing scalable and maintainable code.