import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // اگر درخواست از نوع OPTIONS است (preflight CORS request)
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Timestamp, X-Signature',
        'Access-Control-Max-Age': '86400'
      }
    });
  }
  
  // برای سایر درخواست‌ها
  const response = NextResponse.next();
  
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Timestamp, X-Signature');
  
  return response;
}

export const config = {
  // مسیرهای مشکل‌دار را اضافه کنید
  matcher: ['/cryptocurrencies', '/cryptocurrencies/:path*', '/api/proxy/landing/cryptocurrencies/:path*']
};