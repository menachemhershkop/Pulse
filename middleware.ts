import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest){
    const authCookie = request.cookies.get('auth_session');
    const isLoginPage = request.nextUrl.pathname=== '/login';

    if (!authCookie && !isLoginPage){
        return NextResponse.redirect(new URL ('/login', request.url));
    }
    if (authCookie && isLoginPage){
        return NextResponse.redirect (new URL('/dahboard', request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard/:path*'],
};