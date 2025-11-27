import { MiddlewareConfig, NextRequest, NextResponse } from 'next/server';

const publicRoutes = [
  { path: '/login', doWhenAuth: 'redirect' },
  { path: '/register', doWhenAuth: 'redirect' },
  { path: '/tupperware', doWhenAuth: 'skip' },
  { path: '/boticario', doWhenAuth: 'skip' },
  { path: '/demillus', doWhenAuth: 'skip' },
  { path: '/jequiti', doWhenAuth: 'skip' },
  { path: '/produtos', doWhenAuth: 'skip' },

] as const;

const REDIRECT_WHEN_NOT_AUTH_ROUTE = 'login';
const REDIRECT_WHEN_AUTH_ROUTE = '/auth';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicRoute = path === '/' ? { path: '/', doWhenAuth: 'skip' } : publicRoutes.find((route) => path.startsWith(route.path));
  const authToken = request.cookies.get('sb-auth-token');

  if (isPublicRoute && !authToken) {
    return NextResponse.next();
  }

  if (!isPublicRoute && !authToken) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = `/${REDIRECT_WHEN_NOT_AUTH_ROUTE}`;
    return NextResponse.redirect(redirectUrl);
  }

  if (authToken && isPublicRoute && isPublicRoute.doWhenAuth === 'redirect') {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_AUTH_ROUTE;
    return NextResponse.redirect(redirectUrl);
  }

  if (authToken && isPublicRoute && isPublicRoute.doWhenAuth === 'skip') {
    return NextResponse.next();
  }

  if (authToken && !isPublicRoute) {
    //decode token and check if it is expired

    // const token = jwtDecode(`${authToken}`);
    // const currentTime = Math.floor(Date.now() / 1000);

    // if (!token.exp) {
    //   const redirectUrl = request.nextUrl.clone();
    //   redirectUrl.pathname = `/${REDIRECT_WHEN_NOT_AUTH_ROUTE}`;
    //   return NextResponse.redirect(redirectUrl);
    // }

    // if (token.exp < currentTime) {
    //   const redirectUrl = request.nextUrl.clone();
    //   redirectUrl.pathname = `/${REDIRECT_WHEN_NOT_AUTH_ROUTE}`;
    //   return NextResponse.redirect(redirectUrl);
    // }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemal.xml|robots.txt).*)',
  ],
};
