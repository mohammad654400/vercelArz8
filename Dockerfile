FROM node:18-alpine

# تنظیم registry و حذف کش برای اطمینان از نصب صحیح
RUN npm config set registry https://registry.npmmirror.com && \
    npm cache clean --force

WORKDIR /app

# ابتدا فقط فایل‌های package را کپی کنید
COPY package.json package-lock.json ./

# نصب وابستگی‌ها با بررسی دقیق
RUN npm install --legacy-peer-deps --verbose && \
    npm list next

# کپی بقیه فایل‌ها
COPY . .

# ساخت پروژه
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]