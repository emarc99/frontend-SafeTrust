
---

# 🌟 SafeTrust 🌟

**SafeTrust** is a decentralized platform designed to revolutionize P2P transactions, providing secure deposits and payments powered by blockchain and trustless technologies. 🌐✨ Experience transparency and reliability in every cryptocurrency transaction. 💸🔒

---

## 🚀 **Why Choose SafeTrust?**

🔐 **Trustless Technology**: Secure and block deposits without intermediaries.
💾 **Blockchain-Powered Transparency**: Immutable, auditable, and verifiable transactions.
💱 **Crypto-Payment Support**: Manage cryptocurrency payments safely and efficiently.
✅ **Automated Refunds**: Streamlined processes ensure refunds and payment releases happen automatically.

---

## 🌟 **Key Features**

🛠️ **Trustless Escrow**: Funds are securely held in blockchain-based escrow accounts until all terms are met.

🔎 **Blockchain Transparency**: Every transaction is logged on the blockchain for full visibility and accountability. 📜

💰 **Crypto Payments**: Supports irreversible and secure cryptocurrency payments while reducing risks of fraud or disputes.

🔗 **Trustline Process**: Verified trustlines between parties add an extra layer of transaction security. 🔒

📤 **Automated Refund System**: Ensures funds are automatically released based on the terms of the agreement, with no manual intervention required.

---

## ⚙️ **How It Works**

1. **Create Escrow**: The renter creates a secure escrow account. 🏗️
2. **Fund Escrow**: The deposit is funded by the renter. 💵
3. **Rental Agreement**: Terms are agreed upon and stored on the blockchain. 📃
4. **Completion or Cancellation**: Funds are released based on contract outcomes. 🎯

---

## 📋 **Getting Started**

### **Prerequisites**

- Node.js v18 or later 🖥️
- A Stellar blockchain wallet — **Freighter** is recommended 🔐
- Trustless Work API access ([docs here](https://docs.trustlesswork.com/trustless-work)) 📖
- A Firebase project with **Email/Password** authentication enabled ([Firebase Console](https://console.firebase.google.com)) 🔥

---

### **Installation**

**1️⃣ Fork and clone the repository**

```bash
git clone https://github.com/<your_user>/frontend-SafeTrust
cd frontend-SafeTrust
git remote add upstream https://github.com/safetrustcr/frontend-SafeTrust
```

**2️⃣ Install dependencies**

```bash
npm install
```

**3️⃣ Set up environment variables**

```bash
cp .env.example .env.local
```

Then open `.env.local` and fill in the values — see the **Environment Variables** section below for exact instructions.

**4️⃣ Start the development server**

```bash
npm run dev
```

---

### **Environment Variables**

All environment variables live in `.env.local` (never committed to git). Use `.env.example` as the template.

#### 🔥 Firebase Client SDK

These come from the **Firebase Console**. Follow these steps:

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Select or create your project (SafeTrust uses project ID `safetrust-890d0`)
3. Click the **gear icon** → **Project Settings**
4. Scroll to **Your Apps** → select your Web app (or click **Add app** → Web if none exists)
5. Under **SDK setup and configuration**, select **Config**
6. Copy each value into your `.env.local`:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...          # apiKey
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com  # authDomain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id               # projectId
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456:web:abc123                # appId
```

> ⚠️ These are **public browser-safe keys** — they are prefixed with `NEXT_PUBLIC_` intentionally. They are not the Firebase Admin SDK private key (which lives in `backend-SafeTrust` only and must never be exposed to the browser).

**Enable Email/Password auth** (required for Register and Login to work):

1. In the Firebase Console → **Authentication** → **Sign-in method**
2. Click **Email/Password** → toggle **Enable** → Save

#### 🌐 TrustlessWork API

```bash
NEXT_PUBLIC_API_URL=https://api.trustlesswork.com
NEXT_PUBLIC_API_KEY=your_trustlesswork_api_key        # obtain from TrustlessWork dashboard
NEXT_PUBLIC_TRUSTLESS_API_URL=https://api.trustlesswork.com
NEXT_PUBLIC_TRUSTLESS_API_URL_DEV=https://dev.api.trustlesswork.com
NEXT_PUBLIC_TRUSTLESS_NETWORK=testnet                 # use 'testnet' for local development
```

Obtain your TrustlessWork API key from [docs.trustlesswork.com](https://docs.trustlesswork.com/trustless-work).

#### 🗄️ Hasura GraphQL

```bash
NEXT_PUBLIC_HASURA_GRAPHQL_URL=http://localhost:8080/v1/graphql
```

This points to the Hasura instance running via Docker Compose in `backend-SafeTrust`. Make sure `docker compose up -d` is running before starting the frontend.

> 🔒 `HASURA_GRAPHQL_ADMIN_SECRET` is intentionally absent from the frontend environment. The frontend authenticates via Firebase JWT — never via the admin secret. See `src/config/apollo.ts` for details.

#### 🔗 Backend URL

```bash
NEXT_PUBLIC_BACKEND_URL=http://localhost:3000
```

Points to the webhook/auth service from `backend-SafeTrust` running locally. Required for the Register flow to sync the new user to PostgreSQL.

---

### **Complete `.env.local` example**

```bash
# Firebase Client SDK
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456:web:abc123

# TrustlessWork API
NEXT_PUBLIC_API_URL=https://api.trustlesswork.com
NEXT_PUBLIC_API_KEY=your_trustlesswork_api_key
NEXT_PUBLIC_TRUSTLESS_API_URL=https://api.trustlesswork.com
NEXT_PUBLIC_TRUSTLESS_API_URL_DEV=https://dev.api.trustlesswork.com
NEXT_PUBLIC_TRUSTLESS_NETWORK=testnet

# Hasura GraphQL (backend-SafeTrust must be running)
NEXT_PUBLIC_HASURA_GRAPHQL_URL=http://localhost:8080/v1/graphql

# Backend auth/webhook service (backend-SafeTrust/webhook must be running)
NEXT_PUBLIC_BACKEND_URL=http://localhost:3000
```

---

### **UI-only Testing (no Firebase required)**

If you only need to inspect the dashboard UI without live Firebase auth, bypass the auth guard via the browser console:

```js
localStorage.setItem("walletAddress", "GBUILD_TEST_ADDRESS_HERE")
```

Then navigate directly to `http://localhost:3001/dashboard`.

---

## 📡 **API Reference**

- **`/escrow/initiate`**: Start the escrow process and create agreements.
- **`/escrow/fund`**: Securely fund the escrow account.
- **`/escrow/complete`**: Complete the process and release funds to the appropriate party.

---

## 🛠️ **Tech Stack**

- **Frontend**: TypeScript, Next.js 15, Tailwind CSS
- **Auth**: Firebase Authentication (Email/Password, Google OAuth)
- **GraphQL**: Apollo Client 4, Hasura GraphQL Engine
- **Blockchain**: Stellar, TrustlessWork API
- **Wallet**: Freighter, Albedo, LOBSTR

---

## 🧪 **Testing Infrastructure**

This project uses Jest, React Testing Library, and Cypress for comprehensive testing.

### **Running Tests**

```bash
npm test              # unit and integration tests
npm run test:e2e      # E2E tests (Cypress)
npm run test:coverage # coverage report
```

### **Test Structure**

- Unit and integration tests live in `__tests__` directories or as `.test.ts(x)` files next to the code they test
- E2E tests live in `cypress/e2e/`
- API requests are mocked via Mock Service Worker (MSW) — handlers in `mocks/handlers.ts`

---

## 🎨 **Design Mockup**

[SafeTrust Figma](https://www.figma.com/design/CVg9hoim0f1FIlozIar7ZZ/SafeTrust?node-id=0-1&node-type=canvas&t=LCzPmGeJfVxCMWTT-0)

---

🌟 **Join SafeTrust today and revolutionize the way you manage P2P transactions!** 🌟

---
