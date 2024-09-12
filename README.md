# react-motion-pack

> React Motion Pack provides a collection of reusable React components with built-in CSS only animations for effortless and efficient motion effects.

[![NPM](https://img.shields.io/npm/v/react-motion-pack.svg)](https://www.npmjs.com/package/react-motion-pack) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-css-motion-pack
```

## Usage

```tsx
import React, { Component } from 'react'

import {MyComponent} from 'react-motion-pack'
import 'react-motion-pack/dist/index.css'

export default function Example(){
  return <MyComponent/>
}

```

## Components

### CardReveal

The `CardReveal` component displays a list of images with a 3D reveal effect on hover.

#### Props

- `images` (required): An array of image objects with the following properties:
  - `src`: The source URL of the image.
  - `width`: The width of the image.
  - `alt`: The alt text for the image.
- `containerStyle`: Optional CSS properties for the container.
- `itemStyle`: Optional CSS properties for each item.
- `imageStyle`: Optional CSS properties for each image.
- `containerClassName`: Optional CSS class for the container.
- `itemClassName`: Optional CSS class for each item.
- `imageClassName`: Optional CSS class for each image.
- `onImageClick`: Optional callback function when an image is clicked.

#### Example

## License

MIT © [chandansingh01](https://github.com/chandansingh01)
