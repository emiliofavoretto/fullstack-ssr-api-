# CRUD Front — Next.js 16 (App Router)

## 🟣 arrays de Exemplos

### 🔑 Get - ApiKey → /apikey

mermaid
flowchart LR
    S[🖥️ Server] -- 1. página --> B[🌐 Browser/Client]
    B -- 2. x-api-key --> A[(🗄️ API/BD)]
    A -- 3. séries --> B
    style S fill:#dfd,stroke:#090
    style B fill:#ddf,stroke:#00c
    style A fill:#fed,stroke:#c60

❌ **api-key exposta** — o browser vai direto na API, sem voltar ao server (DevTools → Network → Headers → x-api-key)

---

### 🖥️ Get - SSR → /ssr

mermaid
flowchart LR
    S[🖥️ Server] -- 1. x-api-key --> A[(🗄️ API/BD)]
    A -- 2. séries --> S
    S -- 3. página + séries --> B[🌐 Browser/Client]
    B -.->|"4. salva"| SS[💾 sessionStorage]
    style S fill:#dfd,stroke:#090
    style B fill:#ddf,stroke:#00c
    style A fill:#fed,stroke:#c60
    style SS fill:#ffd,stroke:#a80

✅ **api-key privada** · 💾 **dados salvos no browser** — DevTools → Application → Session Storage

 💡 O passo 4 (**é adicional**): salvar no sessionStorage serve apenas para o card **Get - Offline** funcionar sem API.

---

### 📴 Get - Offline → /offline

mermaid
flowchart LR
    S[🖥️ Server] -- 1. página --> B[🌐 Browser/Client]
    B -- 2. lê --> SS[💾 sessionStorage]
    SS -- 3. séries --> B
    style S fill:#dfd,stroke:#090
    style B fill:#ddf,stroke:#00c
    style SS fill:#ffd,stroke:#a80

✅ **sem chamar a API** — DevTools → Network vazio

 💡 Lê os dados que o **Get - SSR** salvou (passo 4 tracejado). Visite o /ssr antes.

---

### 🔗 Get - FullStack → /fullstack

mermaid
flowchart LR
    S[🖥️ Server] -- 1. página --> B[🌐 Browser/Client]
    B -- 2. /api/series --> R[🖥️ Server<br/>API Route]
    R -- 3. x-api-key --> A[(🗄️ API/BD)]
    A -- 4. séries --> R
    R -- 5. séries --> B
    style S fill:#dfd,stroke:#090
    style R fill:#dfd,stroke:#090
    style B fill:#ddf,stroke:#00c
    style A fill:#fed,stroke:#c60

✅ **api-key privada** — o browser volta ao server (route.js), que vai na API (DevTools → Network → só /api/series, sem x-api-key)

---

## 🧩 arrays de CRUD

### ➕ Post - Create → /create

mermaid
flowchart LR
    S[🖥️ Server] -- 1. página --> B[🌐 Browser/Client]
    B -- 2. POST /api/series --> R[🖥️ Server<br/>API Route]
    R -- 3. x-api-key + série --> A[(🗄️ API/BD)]
    A -- 4. séries --> R
    R -- 5. séries --> B
    style S fill:#dfd,stroke:#090
    style R fill:#dfd,stroke:#090
    style B fill:#ddf,stroke:#00c
    style A fill:#fed,stroke:#c60
✅ **api-key privada** — o formulário vai para o route.js, que cria na API (DevTools → Network → series → Payload, sem x-api-key)
