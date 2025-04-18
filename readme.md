# 🚀 BikeServ - Bike Servicing Management System

## 📝 Project Summary

**BikeServ** is a RESTful backend API designed to streamline operations in a bike servicing center. It allows administrators to manage **customers**, **bikes**, and **service records** with ease. Built using modern tools like **TypeScript**, **Prisma**, and **PostgreSQL**, this API supports full CRUD functionality and includes specialized features for tracking and updating service statuses.

---


## 🌐 Live Link

> 🔗 [Live Link](https://assignment-8-three-psi.vercel.app/)  
> 📂 [GitHub Repository](https://github.com/Farsit-007/Assignment-8-Prisma)


## 🛠 Tech Stack

| Technology       | Purpose                              |
|------------------|---------------------------------------|
| **Node.js**      | JavaScript runtime environment        |
| **Express.js**   | Web framework for building APIs       |
| **TypeScript**   | Type-safe JavaScript for better DX    |
| **Prisma ORM**   | Elegant DB schema modeling & queries  |
| **PostgreSQL**   | SQL-based relational database         |

---

## ⚙️ Key Features

- ✅ **CRUD Operations** for:
  - Customers
  - Bikes
  - Service Records

- 🔄 **Service Workflow Management**:
  - Add services with status `pending`
  - Update status to `in-progress`
  - Complete services by marking them `done` and setting a `completionDate`

- ⏰ **Overdue Service Checker**:
  - Endpoint to retrieve services older than **7 days** that are still `pending` or `in-progress`

- 🔐 **Robust Validation & Error Handling**:
  - Uses `Zod` for schema validation
  - Centralized async error handling

- 🧱 **Clean Database Design**:
  - All entities use **UUIDs** for secure, unique identification

- 📁 **Modular Structure**:
  - Organized into `routes`, `controllers`, `services`, and `validators` for scalability

---

## 📚 How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/Farsit-007/Assignment-8-Prisma.git
cd Assignment-8-Prisma

### Create .env file in root
```ts
DATABASE_URL="...."
```

### Install 

```shell
npm i
npx prisma generate
```

### Run the Project

```shell
npm run dev
```


## 🧪 API Endpoints Overview

### ✅ Customers

| Method | Endpoint             | Description           |
| ------ | -------------------- | --------------------- |
| POST   | `/api/customers`     | Create a new customer |
| GET    | `/api/customers`     | Get all customers     |
| GET    | `/api/customers/:customerId` | Get customer by ID    |
| PUT    | `/api/customers/:customerId` | Update customer       |
| DELETE | `/api/customers/:customerId` | hardly delete customer  |

### ✅ Bikes

| Method | Endpoint         | Description    |
| ------ | ---------------- | -------------- |
| POST   | `/api/bikes`     | Add a new bike |
| GET    | `/api/bikes`     | Get all bikes  |
| GET    | `/api/bikes/:bikeId` | Get bike by ID |
| PUT    | `/api/bikes/:bikeId` | Get bike by ID |

### ✅ Services

| Method | Endpoint                     | Description                  |
| ------ | ---------------------------- | ---------------------------- |
| POST   | `/api/services`              | Create a service record      |
| GET    | `/api/services`              | Get all service records      |
| GET    | `/api/services/:serviceId`          | Get service by ID            |
| PUT    | `/api/services/:serviceId/complete` | Complete a service           |
| GET    | `/api/services/status`       | Get pending/overdue services |

---

## 🗃 Database Schema (Prisma)

### Customer

```ts
model Customer {
  customerId String   @id @default(uuid())
  name       String
  email      String   @unique
  phone      String
  createdAt  DateTime @default(now())
  bike       Bike[] // One to Many Relation

  @@map("customers")
}
```

### Bike

```ts
model Bike {
  bikeId         String          @id @default(uuid())
  brand          String
  model          String
  year           Int
  createdAt      DateTime        @default(now())
  customerId     String
  customer       Customer        @relation(fields: [customerId], references: [customerId])
  serviceRecords ServiceRecord[]

  @@map("bikes")
}
```

### ServiceRecord

```ts
model ServiceRecord {
  serviceId      String    @id @default(uuid())
  bikeId         String
  serviceDate    DateTime  @default(now())
  completionDate DateTime? 
  description    String
  status         Status @default(pending)
  createdAt      DateTime  @default(now())
  bike           Bike      @relation(fields: [bikeId], references: [bikeId])

  @@map("serviceRecords")
}

```