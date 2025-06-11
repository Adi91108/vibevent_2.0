# 🎪 EventEasee – The Superpowered Event Sidekick 🦸‍♀️

> *“Why be ordinary, when you can manage events like a superhero?”*

Welcome to **EventEasee**, your dynamic, no-stress, RSVP-busting, event-creating, user-controlling, dashboard-dancing web app! 🦸‍♂️✨

Built using the mighty powers of **Next.js 15**, **TypeScript**, and the wizardry of modern tools, EventEasee is the event management hero you've been waiting for.

---

## 🖥️ Live in Action

🚀 [Check Out the Live Demo](https://trail-4qi-nreui.vercel.app/)

---

## 🧪 Test Like a Legend – Sample Credentials

Choose your secret identity:

🛡 **Admin**  
`admin.test@event.com` | `Admin.test@`  
_Permissions: Everything, everywhere, all at once._  

🧰 **Staff**  
`staff.test@event.com` | `Staff.test@`  
_Permissions: Event wrangling, RSVP-fu, and data-crunching._  

🎤 **Event Owner**  
`owner.test@event.com` | `Owner.test@`  
_Permissions: Host with the most._  

> 🔒 *Psst... For heroic testing only. Don’t reuse passwords in real life, sidekick!*

---

## 🛠️ Superpowers aka Features

### 🧬 Core Abilities
- 🔐 Role-based Auth (Admin, Staff, Event Owner)
- 🗓️ Full Event CRUD
- 🔍 Public Event Discovery + Filters
- ✍️ RSVP with Validation
- 📤 CSV Export of RSVPs
- 👥 Admin User Control Panel
- 🧑‍💼 Profile & Password Management

### 🎭 Secret Identities (Roles & Permissions)
| Role         | Powers                                                                 |
|--------------|------------------------------------------------------------------------|
| 🦸 Admin      | Supreme overlord of everything. Stats, users, events—you name it.      |
| 🧙 Staff      | The event whisperer. Moderate, manage, analyze like a pro.             |
| 🎉 Owner      | Your party, your rules. Create, edit, and run events like a boss.      |
| 🌍 Public     | RSVP and browse like a free-spirited festival-goer.                   |

### 🧪 Extra Cool Stuff
- 📱 Fully Responsive UI
- 📊 Real-Time Dashboards
- 🎛 Advanced Filters & Search
- 🌀 Smooth Framer Motion Animations
- 🔐 Hardened Security Layers
- 📈 Powerful Reports for Admin/Staff

---

## 🧙‍♂️ Under the Hood – Tech Stack

| Tech        | Power Level |
|-------------|-------------|
| 🧠 Next.js 15 | Multiversal Routing |
| 🔤 TypeScript | Strong Typing Sorcery |
| 💨 TailwindCSS + shadcn/ui | Stylish + Functional |
| 🛢 PostgreSQL (via Xata.io) | Reliable Database Core |
| 🔌 Prisma ORM | Data Layer Wizard |
| 🛡 NextAuth.js | Auth Shield |
| 🌀 Framer Motion | Animated Coolness |
| ☁️ Vercel | Lightning Deployment |
| 🔄 Node.js | Universal Runtime Engine |

---

## 🗂️ File Fortress (Project Structure)

> The Batcave of Code. Fully stocked and organized.

```bash
eventease/
├── app/
│   ├── api/            # Superhero API routes
│   ├── auth/           # Identity Management
│   ├── dashboard/      # Control Panels for heroes
│   ├── events/         # Public Events Lounge
│   ├── event/[id]/     # Individual Event Pages
│   └── layout.tsx      # Secret base layout
├── components/         # Reusable Gadgets (UI Components)
├── lib/                # Tools & Utilities
├── prisma/             # Power schema source
├── types/              # Definitions from the Codex
├── middleware.ts       # Route Guardian
├── tailwind.config.ts  # Costume Config
└── README.md           # This Awesome File!

# 1. Clone your sidekick
git clone https://github.com/your-username/eventease
cd eventease

# 2. Install the gadgets
npm install
# OR
bun install

# 3. Set the magic environment
cp .env.example .env
# Fill in secrets like DATABASE_URL & NEXTAUTH_SECRET

# 4. Initialize the database
npx prisma generate
npx prisma db push
npx prisma studio # Optional UI

# 5. Install UI components
npx shadcn@latest init
npx shadcn@latest add button input label card ...

# 6. Launch!
npm run dev
# OR
bun dev

npm run dev        # Develop like a hero
npm run build      # Build for the real world
npm run start      # Start the prod server
npm run lint       # ESLint like a pro

# Prisma DB spells
npm run db:push
npm run db:studio
npm run db:generate
```
##  🧑‍💻 Developer
Aditya Sen
✉️ adityasen911@gmail.com
🛠️ Full-Stack Sorcerer | Builder of Digital Magic

EventEasee – Built with 💖 to bring order to event chaos. Manage like a superhero.
