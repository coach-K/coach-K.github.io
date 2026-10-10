# Kehinde Ogunde

Personal portfolio and CV. Static HTML and CSS for the GitHub Pages user site, served from the default branch root.

## Preview locally

```bash
python3 -m http.server 8080
```

Open [http://127.0.0.1:8080](http://127.0.0.1:8080).

## GitHub Pages

Publish from the default branch at `/` (root). `.nojekyll` is included so Pages serves the files as-is, with no Jekyll build. `CNAME` sets the custom domain to kehindeogunde.com.

The CV download is [assets/Kehinde-Ogunde-CV.pdf](assets/Kehinde-Ogunde-CV.pdf).

Keztrip links to [keztrip.com](https://keztrip.com/). Teamforce, WhatsApp, and Telegram link to [teamforcetechnologies.com](https://teamforcetechnologies.com/). Homie links to [homie.com](https://homie.com). Andela cards link to repositories under [github.com/coach-K](https://github.com/coach-K). Open source links the merged `andela/helpmebuy` pull requests. The CV source is [cv/kehinde-ogunde-cv.html](cv/kehinde-ogunde-cv.html); print it to `assets/Kehinde-Ogunde-CV.pdf` with headless Chrome. The Writing section links the verified Medium article only. Visitor counts use GoatCounter (`kehindeogunde`); create that free site code at goatcounter.com before visits are recorded. No cookie banner.

Regenerate the CV:

```bash
google-chrome --headless --disable-gpu --no-sandbox --no-pdf-header-footer \
  --print-to-pdf=assets/Kehinde-Ogunde-CV.pdf \
  file://$PWD/cv/kehinde-ogunde-cv.html
```
