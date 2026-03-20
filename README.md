# Personal Portfolio

Welcome to my personal portfolio page!

## Tech Stack

This website was built using `yarn create-react-app` and is hosted on **GitHub Pages** with a custom URL.

## Features

- 🌗 Light/dark mode toggle
- 🖼️ Animated background image on scroll
- 📜 Parallax scrolling effects on the portfolio and projects pages

## About

This is a React Single Page Application (SPA) that uses client-side routing on GitHub Pages.

## Challenges

One of the main challenges I faced was that GitHub Pages doesn't support client-side routing, so refreshing `/portfolio` or `/projects` would return a `404` error because it serves static files and doesn't handle server-side routing.

**To solve this:**
- The script inside `404.html` redirects back to `index.html`, passing the original path as a query parameter.
- The script in `index.html` then reads that query parameter and redirects the user to the correct route in the SPA, ensuring smooth navigation.

## Animated Background & Parallax

The background is a piece of custom math art that animates based on the user's scroll
position, using `background-repeat: repeat-y` to create a seamless, infinitely scrolling effect.

### The Banding Bug

Updating `background-position` directly on every scroll event was causing severe visual
artifacts — white bands and pixel streaks thrashing across the screen during fast scrolling.

**The fix had two parts:**

- **Custom `throttleRAF` function** — combines throttling (capped at one update per 100ms)
  with `requestAnimationFrame` to sync background position updates to the browser's natural
  repaint cycle, preventing it from being overwhelmed by rapid scroll events.
- **`background-attachment: fixed`** — fixes the background image relative to the viewport
  rather than the element, offloading scroll rendering to the browser's compositor. This
  immediately eliminated the banding artifacts and made the parallax effect smooth.

## Background — The Sangaku Problem

The animated background is a visualization of an original math problem I designed,
inspired by **Sangaku** — the rigorous geometry problems historically displayed in
Japanese Shinto shrines during the Edo period as a form of mathematical meditation.

**The Problem:**
> Given the curve `y = cos(x)` and a circle with center `(0, 1/2)` and radius `1/2`,
> what is the sequence that produces the Nth circle such that it is tangentially
> contained within the space created by `cos(x)`, `y = 0`, and the previous circle?

![Sangaku Visualization](https://raw.githubusercontent.com/4Michael1Angelo5/portfolio2024/refs/heads/master/src/assets/images/Sangaku13/SANQuest.png)

Solving it required deriving a system of three equations using:
- The **incircle** of a pedal triangle formed by the tangent to `cos(x)`, the tangent
  to the previous circle, and the line `y = 0`
- The **perpendicular bisector** of the tangent to `cos(x)` intersected with the
  **angle bisector** of `y = 0` to find the incenter
- A **distance formula** constraint: the distance between circle centers minus the
  previous radius must equal the next radius

The result is an infinitely repeating sequence of tangent circles — which became the
scrolling background of this site. It was built and visualized using **GeoGebra**.

## MagicCypher - Magic Square Driven Encryption

![cover](https://github.com/user-attachments/assets/d3640ae9-e139-4630-9d67-30b29080540d)

Magic Cypher is a passion project born of a long-standing love for math and cyberpunk aesthetics. The app encrypts images and text, lets users save and share their encrypted content, and offers a unique, visually expressive take on personal data privacy.

The core of Magic Cypher is a scalable TypeScript encryption engine that supports three different magic-square algorithms. The app automatically chooses the correct method based on the user’s input — for example, a 49-character message uses a 7×7 square. For images, a deterministic color-hash system selects the algorithm while keeping the image’s appearance unchanged.

How it works: A user inputs a text message they wish to encrypt and clicks submit. The encryption engine takes over and determines, based on the number of characters in the text message, which magic square algorithm to use. For example, if the user's message is 45 characters long, an odd 7x7 magic square is generated, and the message is padded with 4 extra characters. 45 + 4 = 7 x 7 = 49. Then the app reads and concatenates each row to form the final encrypted message. For decryption, a similar process in the reverse order is used. That's it!

I borrowed techniques from 2D video game map rendering to encrypt images. Games often use a “sprite atlas,” where a single image contains many smaller tiles, and the engine assembles a world by sampling different tile locations. Magic Cypher uses a similar idea: I built a lookup table that tells WebGL which parts of the user’s image to pull from and how to scramble them. Instead of making a game map, I use the same concept to visually rearrange the image during encryption.

One of the coolest features of the app is real-time visualization of the image encryption process. I used WebGL to unlock GPU-accelerated animations. Users watch their images scramble and reassemble with smooth GPU-accelerated motion, turning encryption into an interactive experience.

[mc_image_animation.webm](https://github.com/user-attachments/assets/dc8d0425-087a-4b8a-a707-a9b8e4a465ee)


