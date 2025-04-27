# استفاده از Node.js 20 به عنوان base image
FROM node:20

# ست کردن working directory
WORKDIR /app

# کپی کردن package.json و package-lock.json (یا yarn.lock) به کانتینر
COPY package*.json ./

# نصب پکیج‌ها
RUN npm install

# کپی کردن بقیه سورس کد به کانتینر
COPY . .

# بیلد کردن پروژه Next.js (اختیاری: برای production build)
RUN npm run build

# اکسپوز کردن پورت پیش‌فرض Next.js
EXPOSE 3000

# اجرای پروژه
CMD ["npm", "run", "start"]
