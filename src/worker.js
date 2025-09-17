export default {
  async fetch(request, env, ctx) {
    try {
      // Get the URL from the request
      const url = new URL(request.url);
      
      // Handle the root path and default to index.html
      let pathname = url.pathname;
      
      // If the path ends with / or is just the base path, serve index.html
      if (pathname === '/' || pathname === '/monitor' || pathname === '/monitor/') {
        pathname = '/monitor/index.html';
      }
      
      // If no file extension, try to serve as HTML (for Docusaurus routing)
      if (!pathname.includes('.') && !pathname.endsWith('/')) {
        pathname = pathname + '/index.html';
      }
      
      // Try to get the asset from the ASSETS binding
      const assetRequest = new Request(url.origin + pathname, request);
      const response = await env.ASSETS.fetch(assetRequest);
      
      if (response.status === 404) {
        // If asset not found, try serving index.html for client-side routing
        const indexRequest = new Request(url.origin + '/monitor/index.html', request);
        const indexResponse = await env.ASSETS.fetch(indexRequest);
        
        if (indexResponse.status === 200) {
          // Return index.html with proper headers for SPA routing
          return new Response(indexResponse.body, {
            status: 200,
            headers: {
              'Content-Type': 'text/html',
              'Cache-Control': 'no-cache',
              ...Object.fromEntries(indexResponse.headers)
            }
          });
        }
      }
      
      // Add security headers
      const newHeaders = new Headers(response.headers);
      newHeaders.set('X-Frame-Options', 'DENY');
      newHeaders.set('X-Content-Type-Options', 'nosniff');
      newHeaders.set('X-XSS-Protection', '1; mode=block');
      newHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
      
      // Set appropriate cache headers
      if (pathname.match(/\.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2)$/)) {
        newHeaders.set('Cache-Control', 'public, max-age=31536000, immutable');
      } else {
        newHeaders.set('Cache-Control', 'public, max-age=300');
      }
      
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders
      });
      
    } catch (error) {
      console.error('Worker error:', error);
      return new Response('Internal Server Error', { 
        status: 500,
        headers: {
          'Content-Type': 'text/plain'
        }
      });
    }
  }
};