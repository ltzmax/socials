## Social link website
A simple, clean site for social media links.

---

## Features
- **Fully responsive**
- **Animated glowing background**
- **Custom 18+ warning modal** (no ugly browser alerts)
- **friendly** buttons with hover/focus effects
- **Easy to customize** – just edit the links in `index.html`
- **No build tools needed** – pure HTML, CSS, and vanilla JS
- **Tailwind CSS via CDN** – fast and lightweight, you do not need extra setup here.

---

## How It Works

### 1. **Edit Your Links**
- Open `index.html` and find the `<div class="space-y-3 sm:space-y-4">` section.
    - Each link is an `<a>` tag like this:
```html
<a href="https://yourlink.com" target="_blank" class="glow-button ...">
  <svg>...</svg>
  <span>Your Platform</span>
</a>
```
## To change a link:

- Replace `href="https://yourlink.com"` with your actual URL
- Update the <span> text (e.g., Instagram, Twitch, etc.)
- (Optional) Replace the SVG icon with one from Heroicons or Simple Icons

### 2. Add a New Social Link
- Copy any existing <a> block and paste it inside the `space-y-3` container.
```html
<a href="https://twitch.tv/yourname" target="_blank"
   class="glow-button flex items-center justify-center p-3 sm:p-4 rounded-lg w-full">
  <svg class="w- planetary5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="currentColor" viewBox="0 0 24 24">
    <path d="M11.64 5.93h1.5v4.43h-1.5V5.93zm4.43 0h1.5v4.43h-1.5V5.93zM5.93 2L3.5 5.93v12.21h4.43v3.5l3.5-3.5h2.93l5.93-5.93V3.5H5.93zM19.14 11.64l-3.5 3.5h-2.93l-2.5 2.5v-2.5H7.43V3.5h11.71v8.14z"/>
  </svg>
  <span class="font-medium text-sm sm:text-base">Twitch</span>
</a>
```
> Tip: Use [Simple Icons](https://simpleicons.org/) for accurate brand SVGs which this site uses.

### 3. NSFW / 18+ Links
To add an 18+ link with the warning modal:
- Add `class="nsfw"` to the <a> tag
- Add `data-href="your-link"` (recommended for security)
```html
<a href="#"
   class="nsfw glow-button flex items-center justify-center p-3 sm:p-4 rounded-lg w-full" 
   data-href="https://example.com">
  <svg class="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
  </svg>
  <span class="font-medium text-sm sm:text-base">(18+)</span>
</a>
```
> The modal will block navigation until the user confirms they are 18+.

----

### Deployment
Deploy in seconds with:
- Vercel (drag and drop)
- Netlify
- GitHub Pages
- nginx (selfhost from your own vps)
