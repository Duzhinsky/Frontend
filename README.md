# Frontend
The ability to create a small web page is quite valuable for any developer. At least, I think so. This repository contains my works in this area.

### Gulp Template
I use Gulp toolkit to build sources. My template for web pages could be found [here][gulp-template]. It consists of autoprefixer, sass preprocessor and browsersync tool.

Structure of a page:
| Folder | Purpose |
| ------ | ------ |
| dist/* | Compiled version of page |
| src/* | Source path |
| src/img | Path to images to be processed to use in web. Accepted formats: jpg,jpeg,png,svg,gif,ico,webp |
| src/fonts | Path to fonts to be preprocessed. Accepted formats:ttf,woff,woff2,eot |
| src/scss | Sass path. |
| dest/css | Destination folder to styles after preprocessing incuding preprocessing, autoprefixing, minimuzing |
| [src/dest]/[img/js] | Purpose is obviously. JS files are being minimized |

If a source file name starts with "_" it means that the file is used to include in others.
Also there could be found some useful sass functions in [src/scss/_adaptive.scss][adaptive]

### Starting with template
**Install dependencies:**
Node.js 
Ubuntu:
``` bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```
Windows:
Download pre-build installer from [here](https://nodejs.org/en/)

Gulp:
``` bash
npm install --global gulp-cli
```

Then copy template and start just running in the folder
``` bash
npm install
gulp
```

## Finished and not so pages
Click on a title to open the page
### [Remmy][remmy]  
![full adaptive](https://img.shields.io/badge/Device%20support-Full%20adaptive-green)
My markup for sketch of skincare mobile app landing.
![remmy page](https://i.imgur.com/f6BJqgF.png)

### [Dog][dog]

![full adaptive](https://img.shields.io/badge/Device%20support-Full%20adaptive-green)
![full adaptive](https://img.shields.io/badge/extra-animations-orange)
The landing for pet goods shop. I've enjoyed working with clip-path and overlaying.
![dog page](https://i.imgur.com/NGViuO9.png)

### [Фотосалон "Первый"][fotosalon1]

![full adaptive](https://img.shields.io/badge/Device%20support-Full%20adaptive-green)
The site's draft I've designed long ago for my friend's studio. It has multi-page design, but only one page is available.
![photosalon page](https://i.imgur.com/LRgg0cp.png)


[gulp-template]: https://github.com/Duzhinsky/Frontend/tree/master/gulp-template
[adaptive]: https://github.com/Duzhinsky/Frontend/blob/master/gulp-template/src/scss/_adaptive.scss
[remmy]: https://duzhinsky.github.io/Frontend/Remmy/dist/
[dog]: https://duzhinsky.github.io/Frontend/Dog/dist/
[fotosalon1]: https://duzhinsky.github.io/Frontend/fotosalon1 
