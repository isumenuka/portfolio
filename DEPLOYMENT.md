# Deployment Guide: GitHub & Vercel

This guide details how to deploy your **Portfolio** and your **Sanity Studio** to Vercel.

## Prerequisites
-   A [GitHub Account](https://github.com/)
-   A [Vercel Account](https://vercel.com/) (Login with GitHub recommended)

## Step 1: Push Code to GitHub

1.  **Initialize Git (if not already done)**
    Open your terminal in the project root (`c:\Users\Isum Enuka\Downloads\ezsumm-portfolio`) and run:
    ```bash
    git init
    git add .
    git commit -m "Initial commit of portfolio"
    ```

2.  **Create a New Repository on GitHub**
    -   Go to [GitHub.com/new](https://github.com/new).
    -   Name your repository (e.g., `my-portfolio`).
    -   Keep it **Public** (recommended for free Vercel tier) or Private.
    -   **Important:** Do **not** initialize with README/gitignore.

3.  **Push Code**
    Follow the commands shown on GitHub after creating the repo:
    ```bash
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
    git push -u origin main
    ```

### Alternative: Using VS Code to Push to GitHub

If you prefer using VS Code's GUI instead of the command line:

1.  **Open Source Control Panel**
    -   Click the **Source Control icon** (branch icon) in the left sidebar, or press `Ctrl+Shift+G`.

2.  **Stage Your Changes**
    -   You'll see all your modified files listed under "Changes".
    -   Click the **+** icon next to each file to stage it, or click the **+** icon next to "Changes" to stage all files at once.

3.  **Commit Your Changes**
    -   Enter a commit message in the text box at the top (e.g., "Initial commit of portfolio").
    -   Click the **✓ Commit** button (or press `Ctrl+Enter`).

4.  **Add Remote Repository**
    -   Open the terminal in VS Code (`Ctrl+\``).
    -   Run the following commands to connect to your GitHub repository:
        ```bash
        git branch -M main
        git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
        ```

5.  **Push to GitHub**
    -   After adding the remote, you can push using VS Code:
        -   Click the **"..."** (More Actions) menu in the Source Control panel.
        -   Select **"Push"** or **"Push to..."** (first time only, select your remote).
    -   Alternatively, click the **↑** cloud icon in the status bar at the bottom of VS Code.
    -   You may be prompted to sign in to GitHub - follow the authentication flow.

6.  **Future Updates**
    -   After the initial setup, making updates is simple:
        1. Make your code changes
        2. Stage changes (click **+** in Source Control)
        3. Enter commit message
        4. Click **✓ Commit**
        5. Click **↑ Push** (or use the sync icon if you also want to pull)

> **Tip:** Use the **"Sync Changes"** button (↻ icon) to pull and push in one action!

## Step 2: Deploy Frontend on Vercel

1.  **Import Project**
    -   Go to your [Vercel Dashboard](https://vercel.com/dashboard).
    -   Click **"Add New..."** -> **"Project"**.
    -   Select your GitHub repository (`my-portfolio`).

2.  **Configure Project**
    -   **Framework Preset:** Vite (should detect automatically).
    -   **Root Directory:** `./` (default).

3.  **Environment Variables**
    Expand **"Environment Variables"** and add these (from your `.env.local`):
    
    | Key | Value |
    | :--- | :--- |
    | `NEXT_PUBLIC_SANITY_PROJECT_ID` | `zgo49znz` |
    | `NEXT_PUBLIC_SANITY_DATASET` | `production` |
    | `NEXT_PUBLIC_SANITY_API_VERSION` | `2024-01-01` |

4.  **Deploy**
    -   Click **"Deploy"**.
    -   Wait for build. You get a URL (e.g., `my-portfolio.vercel.app`).

---

## Step 3: Deploy Studio on Vercel (Self-Hosted)

**This creates a separate Admin link (e.g., `my-portfolio-studio.vercel.app`) fully hosted on Vercel.**

1.  **Add New Project (Again)**
    -   Go to Vercel Dashboard.
    -   Click **"Add New..."** -> **"Project"**.
    -   Select the **SAME** GitHub repository (`my-portfolio`) again.

2.  **Configure "Sanity" Project**
    -   **Project Name:** Give it a different name (e.g., `my-portfolio-studio`).
    -   **Framework Preset:** Sanity Studio (or Other).
    -   **Root Directory (CRITICAL):** Click "Edit" and change it to `sanity`.
        -   *Note: This tells Vercel to build the content inside the "sanity" folder.*

3.  **Deploy**
    -   Click **"Deploy"**.
    -   Wait for build. You get a NEW URL (e.g., `my-portfolio-studio.vercel.app`).
    -   **Success!** You now have your own hosted editor.

---

## Step 4: Connect Them (CORS)

For your Studio to talk to Sanity, and your Frontend to fetch data, you must whitelist domains.

1.  Go to [Sanity Manage](https://www.sanity.io/manage).
2.  Select your project (`zgo49znz` / `Isum Enuka Portfolio`).
3.  Go to **API**.
4.  Under **CORS Origins**, click **Add CORS Origin**.
5.  Add **BOTH** Vercel URLs:
    -   Your Frontend: `https://my-portfolio.vercel.app` (Check "Allow credentials")
    -   Your Studio: `https://my-portfolio-studio.vercel.app` (Check "Allow credentials")
6.  Click **Save**.

## Conclusion
-   **Visitor Link:** `https://my-portfolio.vercel.app`
-   **Admin Link:** `https://my-portfolio-studio.vercel.app` (Edit content here!)
