
# Portfolio

This is my portfolio powered by Vue3, TailwindCSS, ThreeJS and AnimeJS.

All of the features within this project are frontend only, there are no involvement with any backend frameworks or similar.


## Featrues 
- Interactive 3D model and UI
- Auto code typing + custom syntax highlighting
- Highly customizable with theme selector
- Flexible responsive design 



---
## Customization
### New Page 
When creating a new page, make sure to add a new route on `router.js`, then update the data block of `webRoutes` on `MainNavbar.vue`.

### Modifying contents
Skills and Works (projects) both contain a JSON file on the `components` folder. If you wish to modify only the contents of the pages without touching the UI, you will only need
to modify the JSON file of the related page. Note that the `MainLanding` and `MainContact` does not contain a JSON file, so modifications to the contents will require modifying the
HTML contents of the files.

### New colorscheme
For the color palette, it will contain a JSON file called `Themes.json`. `themeType` refers to the type of the theme whether it is a light theme or a dark theme, meanwhile modifying the
color scheme will change the overall appearance of the web. `DomID` is not relevant as of now. It is recommended to use the hexcode of the color for `colorscheme`, it also works for transparent
hex colors.

---
## Deployment
I recommend using Vercel for deployment as it is simple and contains a lot of features such as preview deployment before production deployment. If you are using VPS for hosting, you need to do the following

```bash
npm run build
```


