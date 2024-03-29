import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  // // Routes that can be accessed while signed out
  publicRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe'],
  // ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/sign-in"]
 

});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};