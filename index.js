export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const targetDomain = "https://csc.techilyflycsc.workers.dev";
    const targetUrl = new URL(url.pathname + url.search, targetDomain);
    return Response.redirect(targetUrl.toString(), 301);
  },
};
