🏥 EHR Frontend Application

Blockchain-Based Secure and Decentralized Healthcare Data Exchange Platform (Frontend)

📌 Overview

This repository contains the frontend web application for a blockchain-based, patient-centric Electronic Health Record (EHR) system.
The frontend is responsible for providing role-based user interfaces and securely interacting with backend APIs that orchestrate blockchain, consent management, and off-chain storage.

The application is designed as part of a faculty–student collaborative research project, following a layered and modular architecture suitable for long-term extension, experimentation, and academic evaluation.

🎯 Objectives

The primary objectives of the frontend module are:

Provide role-specific dashboards for patients, doctors, and administrators

Enable consent-driven access workflows for medical records

Ensure a security-aware user experience aligned with backend and blockchain constraints

Act as a clean interaction layer between users and a distributed backend system

This frontend does not store or process raw medical data permanently and relies on backend services for authorization, encryption, blockchain interaction, and audit logging.

🧱 Architecture Alignment

The frontend aligns with the overall system architecture consisting of:

Frontend Layer (this repository)

Backend API Layer (NestJS)

Blockchain Layer (EVM smart contracts)

Off-Chain Storage Layer (IPFS + PostgreSQL)

The frontend strictly adheres to the principle of separation of concerns, acting only as a presentation and interaction layer.

🧑‍💻 Tech Stack

React (with TypeScript)

Vite (build and development tooling)

Material UI (MUI) for UI components

React Router for client-side routing

Axios for HTTP communication

@tanstack/react-query for server state management

Formik + Yup (optional) for form handling and validation

📁 Project Structure
src/
 ├── api/                # Backend API interaction layer
 │   ├── auth.ts
 │   ├── records.ts
 │   ├── consent.ts
 │   └── audit.ts
 ├── app/                # App-level configuration
 │   ├── App.tsx
 │   ├── router.tsx
 │   └── queryClient.ts
 ├── components/
 │   ├── layout/         # Layout components (sidebar, shell)
 │   ├── common/         # Reusable UI components
 │   └── guards/         # Role & auth guards
 ├── pages/
 │   ├── auth/           # Login & authentication views
 │   ├── patient/        # Patient dashboards & flows
 │   ├── doctor/         # Doctor dashboards & flows
 │   └── admin/          # Admin views (optional)
 ├── hooks/              # Custom React hooks
 ├── store/              # Auth & global state
 ├── types/              # Shared TypeScript types
 ├── utils/              # Constants & helpers
 └── main.tsx            # Application entry point


This structure is intentionally modular to support:

Independent development of features

Long-term maintainability

Research-oriented experimentation

🔐 Role-Based Design

The frontend supports the following user roles:

Patient

Upload medical records

View own records

Approve or reject access requests

View audit logs

Doctor

Request access to patient records

View records only after approval

Admin (optional / future)

Provider onboarding

System monitoring

All role enforcement is visual and logical only; final authorization is enforced by the backend and blockchain layers.

🔄 Data Flow (High Level)

User authenticates via backend (JWT based)

Frontend stores token securely in memory/state

React Query fetches role-specific data

User actions trigger backend API calls

Backend validates permissions and interacts with:

Blockchain (for consent & audit)

IPFS (for encrypted records)

Frontend reflects updated system state

🚀 Getting Started
Prerequisites

Node.js ≥ 18

npm or yarn

Installation
npm install

Run Development Server
npm run dev


The application will be available at:

http://localhost:517

write for whole project

Below is a complete, professional README for the entire project (frontend + backend + blockchain + storage), written at a faculty / research-collaboration level.

You can place this in the root of the monorepo as README.md.

🏥 Blockchain-Based Secure and Decentralized EHR System

A patient-centric Electronic Health Record (EHR) platform that enables secure, consent-based sharing of medical records using blockchain, off-chain encrypted storage, and a modular web architecture.

This project is developed as a faculty–student collaborative research and engineering effort, focusing on privacy preservation, auditability, and long-term extensibility rather than short-term prototyping.

📌 Project Motivation

Traditional EHR systems suffer from:

Centralized control over patient data

Poor interoperability

Limited auditability of access

Weak patient consent enforcement

This project addresses these issues by:

Giving patients full ownership and control over their records

Enforcing explicit, revocable consent via smart contracts

Storing medical data off-chain in encrypted form

Using blockchain only for integrity, consent, and audit logs

🎯 Key Objectives

Enforce patient-controlled access to medical records

Maintain privacy by design (no PHI on-chain)

Provide tamper-evident audit trails

Support role-based workflows (patient, doctor, admin)

Enable future research extensions (AI, compliance, interoperability)

🧱 High-Level Architecture

The system follows a layered architecture:

Frontend Layer

React-based web application

Role-specific dashboards

Secure UX for consent workflows

Backend API Layer

NestJS-based service

Authentication & authorization

Orchestrates blockchain and storage

Blockchain Layer

EVM-compatible smart contracts

Identity, consent, and audit logic

Off-Chain Storage Layer

IPFS for encrypted medical files

PostgreSQL for metadata & logs

Each layer is independently scalable and replaceable.

🧑‍💻 Technology Stack
Frontend

React + TypeScript

Vite

Material UI

React Router

Axios

@tanstack/react-query

Backend

NestJS

JWT Authentication

Prisma ORM

PostgreSQL

Ethers.js

Blockchain

Solidity (EVM)

Hardhat (local development)

Polygon Testnet (staging)

Storage

IPFS (encrypted medical records)

PostgreSQL (metadata, access logs)

🔐 Core Design Principles

Patient Sovereignty
Patients approve, reject, or revoke access at any time.

Minimal On-Chain Data
No raw medical content is ever stored on blockchain.

Defense in Depth
Security checks exist at frontend, backend, blockchain, and storage layers.

Auditability
All access events are immutably logged.

Modularity
Components can evolve independently.

👥 User Roles & Capabilities
🧑 Patient

Upload medical records

View personal records

Approve / reject / revoke access requests

View access audit logs

🧑‍⚕️ Doctor

Request access to patient records

View records only after approval

🧑‍💼 Admin (Optional / Future)

Provider onboarding

System monitoring

🔄 Core Workflow (End-to-End)

Patient uploads a medical record

Record is encrypted and stored on IPFS

Metadata + CID are registered

Doctor requests access

Patient approves access

Doctor views record

Access event is logged immutably

This workflow represents the minimum complete system path.

📁 Repository Structure (Monorepo)
.
├── frontend/                 # React frontend application
│   └── src/
├── backend/                  # NestJS backend API
│   └── src/
├── contracts/                # Solidity smart contracts (Hardhat)
│   ├── contracts/
│   ├── scripts/
│   └── test/
├── docs/                     # Architecture & design documentation
├── docker-compose.yml        # Local development environment
└── README.md

🚀 Local Development Setup
Prerequisites

Node.js ≥ 18

Docker & Docker Compose

npm

1️⃣ Clone Repository
git clone <repository-url>
cd ehr-system

2️⃣ Environment Configuration

Create .env files for backend and contracts as required:

DATABASE_URL=
JWT_SECRET=
CHAIN_RPC_URL=
CHAIN_PRIVATE_KEY=
IPFS_API_KEY=

3️⃣ Start Local Stack
docker-compose up --build


This launches:

Frontend

Backend API

Local blockchain (Hardhat)

PostgreSQL

🧪 Testing Strategy

Smart Contracts

Consent lifecycle

Role enforcement

Access logging

Backend

Auth flows

Consent APIs

Record handling

Frontend

Role-based routing

Consent UX

Error handling

📈 Scalability Considerations

Stateless backend (horizontal scaling)

IPFS distributed storage

Indexed PostgreSQL queries

Blockchain used only where immutability is required

🔮 Future Extensions

Healthcare interoperability (FHIR mapping)

Decentralized identifiers (DID)

Emergency “break-glass” access

AI-based anomaly detection on access logs

National health system integration

🎓 Academic & Research Context

This project is designed for:

Long-term faculty–student collaboration

Research publication potential

Security & privacy experimentation

Advanced system design learning

It is not a short-term demo project and is intentionally architected for growth.

📜 License

This project is intended for academic and research use.
Licensing terms may be finalized as the project evolves.
