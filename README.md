# User Management Application

แอปพลิเคชันจัดการรายชื่อผู้ใช้แบบ Full Stack ที่ใช้ React + Express.js + SQLite

## 📋 สารบัญ

- [ภาพรวม](#ภาพรวม)
- [เทคโนโลยีที่ใช้](#เทคโนโลยีที่ใช้)
- [โครงสร้างโปรเจค](#โครงสร้างโปรเจค)
- [การติดตั้ง](#การติดตั้ง)
- [การใช้งาน](#การใช้งาน)
- [API Endpoints](#api-endpoints)
- [ฟีเจอร์](#ฟีเจอร์)
- [การพัฒนาต่อ](#การพัฒนาต่อ)

## 🎯 ภาพรวม

โปรเจคนี้เป็นแอปพลิเคชันเว็บแบบ Full Stack สำหรับจัดการรายชื่อผู้ใช้ ประกอบด้วย:
- **Frontend**: React.js พร้อม Vite สำหรับการพัฒนาที่รวดเร็ว
- **Backend**: Express.js API Server
- **Database**: SQLite สำหรับเก็บข้อมูลผู้ใช้

## 🛠 เทคโนโลยีที่ใช้

### Frontend
- **React 19.1.1** - JavaScript Library สำหรับสร้าง UI
- **Vite 7.1.0** - Build Tool และ Dev Server
- **ESLint** - Code Linting
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime Environment
- **Express.js 5.1.0** - Web Framework
- **SQLite3 5.1.7** - Database
- **CORS 2.8.5** - Cross-Origin Resource Sharing
- **Nodemon 3.1.10** - Development Tool

## 📁 โครงสร้างโปรเจค

```
project-root/
├── frontend/                 # React Frontend
│   ├── public/
│   │   └── vite.svg         # Vite Logo
│   ├── src/
│   │   ├── assets/
│   │   │   └── react.svg    # React Logo
│   │   ├── App.jsx          # Main Component
│   │   ├── App.css          # App Styles
│   │   ├── index.css        # Global Styles
│   │   └── main.jsx         # Entry Point
│   ├── package.json
│   ├── vite.config.js
│   └── eslint.config.js
├── backend/                  # Express Backend
│   ├── server.js            # API Server
│   ├── package.json
│   └── database.db          # SQLite Database (สร้างอัตโนมัติ)
└── README.md
```

## ⚙️ การติดตั้ง

### ความต้องการของระบบ
- Node.js (แนะนำเวอร์ชัน 18 ขึ้นไป)
- npm หรือ yarn

### 1. Clone โปรเจค
```bash
git clone <repository-url>
cd <project-directory>
```

### 2. ติดตั้ง Dependencies

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd ../frontend
npm install
```

### 3. เริ่มต้นฐานข้อมูล
เมื่อเริ่มต้น Backend ครั้งแรก ระบบจะสร้างไฟล์ `database.db` และตาราง `users` อัตโนมัติ

## 🚀 การใช้งาน

### เริ่มต้น Backend Server
```bash
cd backend
npm run dev
```
Server จะทำงานที่ `http://localhost:3000`

### เริ่มต้น Frontend Development Server
```bash
cd frontend
npm run dev
```
Frontend จะทำงานที่ `http://localhost:5173` (หรือพอร์ตอื่นที่ Vite กำหนด)

### การ Build Production
```bash
cd frontend
npm run build
```

## 🔌 API Endpoints

### Base URL: `http://localhost:3000`

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| GET | `/users` | ดึงรายชื่อผู้ใช้ทั้งหมด | - | `{ message: "success", data: [users] }` |
| POST | `/users` | เพิ่มผู้ใช้ใหม่ | `{ name: string }` | `{ message: "success", data: { id, name } }` |

### ตัวอย่างการใช้งาน API

#### ดึงรายชื่อผู้ใช้ทั้งหมด
```javascript
fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then(data => console.log(data));
```

#### เพิ่มผู้ใช้ใหม่
```javascript
fetch('http://localhost:3000/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'ชื่อผู้ใช้' })
})
.then(response => response.json())
.then(data => console.log(data));
```

## ✨ ฟีเจอร์

### ปัจจุบัน
- ✅ แสดงรายชื่อผู้ใช้ทั้งหมด
- ✅ เพิ่มผู้ใช้ใหม่ผ่านฟอร์ม
- ✅ Real-time Update หลังเพิ่มข้อมูล
- ✅ Responsive Design
- ✅ Error Handling
- ✅ CORS Support

### Database Schema
```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL
);
```

## 🔧 การกำหนดค่า

### Frontend Configuration (vite.config.js)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### Backend Configuration
- **Port**: 3000
- **Database**: SQLite (database.db)
- **CORS**: เปิดใช้งานสำหรับทุก Origin

## 🚧 การพัฒนาต่อ

### ฟีเจอร์ที่แนะนำ
- [ ] แก้ไขข้อมูลผู้ใช้
- [ ] ลบผู้ใช้
- [ ] การค้นหาผู้ใช้
- [ ] Pagination
- [ ] Validation ข้อมูล
- [ ] Authentication/Authorization
- [ ] Unit Tests
- [ ] Docker Support

### การเพิ่มฟีเจอร์ใหม่

#### เพิ่ม API Endpoint ใหม่ (Backend)
```javascript
// ใน server.js
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  
  db.run('UPDATE users SET name = ? WHERE id = ?', [name, id], function(err) {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({
      message: "success",
      changes: this.changes
    });
  });
});
```

#### เพิ่ม Component ใหม่ (Frontend)
```jsx
// components/UserCard.jsx
const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <button onClick={() => onEdit(user.id)}>แก้ไข</button>
      <button onClick={() => onDelete(user.id)}>ลบ</button>
    </div>
  );
};
```

## 🐛 การแก้ไขปัญหา

### ปัญหาที่พบบ่อย

#### 1. CORS Error
**อาการ**: ไม่สามารถเรียก API จาก Frontend ได้
**วิธีแก้**: ตรวจสอบว่า Backend มี CORS middleware
```javascript
app.use(cors());
```

#### 2. Database Connection Error
**อาการ**: ไม่สามารถเชื่อมต่อฐานข้อมูลได้
**วิธีแก้**: ตรวจสอบไฟล์ `database.db` ใน directory backend

#### 3. Port Already in Use
**อาการ**: พอร์ต 3000 หรือ 5173 ถูกใช้แล้ว
**วิธีแก้**: 
```bash
# หา Process ที่ใช้พอร์ต
netstat -ano | findstr :3000

# หยุด Process
taskkill /PID <PID> /F
```

