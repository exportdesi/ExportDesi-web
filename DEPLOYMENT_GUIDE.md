# Export Desi Launch Checklist: Vercel & Production Settings

Follow these steps to ensure your analytics, forms, and security features are active for the live site at `exportdesi.com`.

## 1. Environment Variables (Vercel)
Login to your Vercel Dashboard, go to **Settings > Environment Variables**, and add the following keys. These are critical for the site to function correctly.

| Variable Name | Purpose | Where to get it |
| :--- | :--- | :--- |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics | Google Analytics dashboard (starts with `G-`) |
| `VITE_CLARITY_PROJECT_ID` | Heatmaps & Session Recording | Microsoft Clarity dashboard |
| `VITE_GOOGLE_SITE_VERIFICATION` | Google Search Console | Search Console "Meta Tag" verification code |
| `VITE_FORMSPREE_ENDPOINT` | Contact form processing | Your Formspree form endpoint URL |
| `VITE_RECAPTCHA_SITE_KEY` | Spam protection | Google reCAPTCHA Admin Console (v2 Checkbox) |

---

## 2. Google Search Console Verification
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add your domain `www.exportdesi.com`.
3. Choose **HTML Tag** as the verification method.
4. Copy the unique code in `content="..."` and add it as `VITE_GOOGLE_SITE_VERIFICATION` in Vercel.

---

## 3. reCAPTCHA v2 Administration
1. Go to the [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin).
2. Ensure you have registered the domain `exportdesi.com` and `www.exportdesi.com`.
3. Select **reCAPTCHA v2 ("I'm not a robot" checkbox)**.
4. Copy the **Site Key** and add it as `VITE_RECAPTCHA_SITE_KEY` in Vercel.

---

## 4. Custom Domain DNS Settings
In your domain provider (e.g., GoDaddy, Namecheap), ensure these records point to Vercel:
- **A Record**: `@` points to `76.76.21.21`
- **CNAME Record**: `www` points to `cname.vercel-dns.com`

---

## 5. Formspree Verification
- Log in to Formspree.
- Ensure your email `inquiry@exportdesi.com` is verified.
- Whitelist `exportdesi.com` in the form settings to prevent spam from other domains.

> [!IMPORTANT]
> After adding these variables in Vercel, you must **Redeploy** the latest commit for the changes to take effect.
