# Vercel Deployment Guide — DriveIt Cars (`driveitcars.in`) 🚀

This guide provides end-to-end instructions for deploying the **DriveIt Cars Next.js 16 + Sanity CMS** application to [Vercel](https://vercel.com) with custom domain configuration, automated SSL, environment variables, and Sanity CORS permissions.

---

## 📋 Prerequisites

Before proceeding, ensure you have:
1. A **GitHub account** with access to [`https://github.com/akheels-web/driveitcars.in.git`](https://github.com/akheels-web/driveitcars.in.git).
2. A **Vercel account** (sign up for free at [vercel.com](https://vercel.com/signup) using your GitHub account).
3. Access to your domain registrar (GoDaddy, Hostinger, Namecheap, Cloudflare, etc.) for `driveitcars.in`.
4. Access to the **Sanity.io Management Console** at [sanity.io/manage](https://www.sanity.io/manage) for project `g0myfztr`.

---

## ⚡ Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Import the GitHub Repository
1. Log in to [Vercel](https://vercel.com).
2. On your Vercel Dashboard, click **"Add New..."** in the top right and select **"Project"**.
3. Under **"Import Git Repository"**, locate:
   ```text
   akheels-web/driveitcars.in
   ```
   *(If not visible, click "Adjust GitHub App Permissions" and authorize the repository).*
4. Click **"Import"**.

---

### Step 2: Configure Project Settings
In the **Configure Project** screen:

| Setting | Value | Notes |
|---|---|---|
| **Project Name** | `driveitcars` *(or your choice)* | Default is fine |
| **Framework Preset** | `Next.js` | Automatically detected |
| **Root Directory** | `./` | Leave default |
| **Build Command** | `next build` | Default (uses Turbopack) |
| **Output Directory** | `.next` | Automatically managed |
| **Install Command** | `npm install` | Default |

---

### Step 3: Configure Environment Variables
Expand the **"Environment Variables"** section and add the following 4 keys:

| Key | Value | Description |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `g0myfztr` | Your Sanity CMS Project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` | Production dataset name |
| `NEXT_PUBLIC_SANITY_API_VERSION` | `2024-10-02` | Sanity API version date |
| `SANITY_API_TOKEN` | *(Your Token from `.env.local`)* | Private read/write token |

> 🔒 **Security Notice**: Ensure that `SANITY_API_TOKEN` is marked as available in **Production**, **Preview**, and **Development** environments in the Vercel dashboard.

---

### Step 4: Deploy
1. Click the blue **"Deploy"** button.
2. Vercel will begin building:
   - Installing dependencies (`npm install`).
   - Running Next.js build with Turbopack (`next build`).
   - Generating all **63 static HTML pages** and serverless functions.
3. Upon completion (~45–90 seconds), you will see:
   > 🎉 **Congratulations! What will you ship next?**
4. Click the preview thumbnail to verify your temporary deployment at `https://driveitcars-*.vercel.app`.

---

## 🌐 Custom Domain Setup (`driveitcars.in`)

To connect your custom domain so users access your site at `https://driveitcars.in`:

### Step 1: Add Domain in Vercel
1. In your Vercel project dashboard, go to **Settings** → **Domains**.
2. Type `driveitcars.in` and click **"Add"**.
3. Vercel will prompt you to choose how to handle `www`:
   - Select: **Recommend: Redirect `www.driveitcars.in` to `driveitcars.in`** (or vice versa based on your preference).
4. Click **"Add"**.

---

### Step 2: Configure DNS Records at Your Domain Registrar
Log in to your domain registrar (GoDaddy, Hostinger, Cloudflare, etc.) and update the DNS records:

#### Record 1 (Apex / Root Domain: `driveitcars.in`):
| Type | Name / Host | Value / Target | TTL |
|---|---|---|---|
| **A** | `@` (or leave empty) | `76.76.21.21` | Automatic / 300 |

#### Record 2 (Subdomain: `www.driveitcars.in`):
| Type | Name / Host | Value / Target | TTL |
|---|---|---|---|
| **CNAME** | `www` | `cname.vercel-dns.com.` | Automatic / 300 |

> ⏳ **DNS Propagation**: DNS updates typically take 5–15 minutes, but can take up to 24 hours depending on registrar TTL. Vercel automatically checks DNS status and provisions a free **Let's Encrypt SSL Certificate** once verified.

---

## 🔐 Authorize Sanity CORS Origins (Critical for `/studio`)

To enable the embedded Sanity Studio (`/studio`) and live GROQ queries to function on your production domain:

1. Visit [https://www.sanity.io/manage](https://www.sanity.io/manage) and log in.
2. Select project **`g0myfztr`**.
3. Go to the **API** tab → **CORS Origins** section.
4. Click **"Add CORS origin"** and add each of the following URLs:

| Origin URL | Allow Credentials | Purpose |
|---|---|---|
| `https://driveitcars.in` | ✅ **Checked** | Production primary domain |
| `https://www.driveitcars.in` | ✅ **Checked** | Production WWW domain |
| `https://*.vercel.app` | ✅ **Checked** | Vercel preview & staging deployments |
| `http://localhost:3000` | ✅ **Checked** | Local development |

5. Click **"Save"**.

---

## 💻 Method 2: Deploy via Vercel CLI (Alternative)

If you prefer terminal deployment:

```bash
# 1. Install Vercel CLI globally
npm i -g vercel

# 2. Login to your Vercel account
vercel login

# 3. Deploy to preview
vercel

# 4. Deploy directly to production
vercel --prod
```

During the interactive CLI prompts:
- `Set up and deploy?` → **Y**
- `Which scope?` → Select your personal / team account
- `Link to existing project?` → **N**
- `What’s your project’s name?` → `driveitcars`
- `In which directory is your code located?` → `./`

Add your environment variables via CLI:
```bash
vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID production
vercel env add NEXT_PUBLIC_SANITY_DATASET production
vercel env add SANITY_API_TOKEN production
```

---

## ✅ Post-Deployment Verification Checklist

Once deployed, perform this smoke test:

- [ ] **Homepage (`/`)**:
  - Hero slider advances smoothly and renders with full resolution.
  - Daily vs Monthly rental toggle switches prices and reveals the 50% discount indicator.
  - Car cards display complete vehicle images without cropping.
- [ ] **Mobile Header & Drawer**:
  - Header displays clean DRIVEIT Logo on left and Menu button on right with no overlap.
  - Tapping Menu opens the dark slide-over drawer with blurred backdrop.
  - "Area Service Locations" accordion expands Section 1 and Section 2.
- [ ] **Instant CTAs**:
  - Clicking "Enquire Now" triggers a phone call to `+91 6300041186`.
  - Clicking "WhatsApp Us" opens WhatsApp with the vehicle-specific prefilled message.
  - Floating WhatsApp and Phone buttons are positioned and responsive at the bottom-right.
- [ ] **Locality Routes**:
  - Visit `/gachibowli`, `/banjara-hills`, and `/hitech-city` — verify zero 404s and localized content.
- [ ] **Sanity Studio (`/studio`)**:
  - Visit `https://driveitcars.in/studio`.
  - Log in with Sanity credentials and confirm you can edit vehicles and banners.
- [ ] **SEO Validation**:
  - Open `https://driveitcars.in/sitemap.xml` — verify XML format and all 63 URLs.
  - Open `https://driveitcars.in/robots.txt` — verify Allow rules and Sitemap pointer.
  - Open `https://driveitcars.in/llms.txt` — verify AI crawler index.

---

## 🛠️ Troubleshooting & FAQs

### Q: Why do I get a CORS error when opening `/studio` in production?
**A**: Ensure your production domain (`https://driveitcars.in`) has been added under **Sanity.io/manage → API → CORS Origins** with **"Allow Credentials" enabled**.

### Q: Does Vercel automatically re-deploy when I push to GitHub?
**A**: **Yes.** Every commit pushed to the `main` branch on `https://github.com/akheels-web/driveitcars.in` triggers an automatic zero-downtime production deployment on Vercel. Pushes to other branches create instant preview deployments.

### Q: Will the site break if Sanity CMS is temporarily unavailable?
**A**: **No.** The site implements a resilient fallback cache in `src/sanity/lib/cars.js`. If the Sanity API fails or times out, curated static vehicle inventory is served immediately without any downtime.

---

*Need assistance? Contact the technical team at [driveitcars@gmail.com](mailto:driveitcars@gmail.com).*
