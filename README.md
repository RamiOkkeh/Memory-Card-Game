# Memory

Cute Little Game of match the images

<div style="text-align:center">
    <a align="center" href="https://memory-game-1.herokuapp.com/index.html">
        <img src="header.gif" width="500" style="margin-left:100px;" align="center" alt="Memory-perview"/>
    </a>
</div>

## Description

How good is your memory, try out this game to figure it out! it offers 2 modes of dificulty with many
different images each game to keep you on your toes.

## Technologies

- CSS used to create a grid to display the images, and style the page.
- JavaScript used to create a game loop, where each game the images are selected randomly from a large array of icons, then duplicated and scattered randomly across the grid.
- jQuery used for handling user interactions when clicking on images, updating state of the image boxes and setting the game dificulty.

## Key Files

1. [props](https://github.com/RamiOkkeh/Memory-Card-Game/blob/master/props.js)
   - Contains _imagesSrc_, an array of the images used for the game play.
   - Adds a few helper functions like _randomImages_ which returns a random sub-array from _imagesSrc_ with length based on the parameter given \(8 by default\), for making the game loop.
