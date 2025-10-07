// HBW Service Worker for Progressive Web App capabilities
// Version 1.0.0

const CACHE_NAME = 'hbw-v1.0.0';
const STATIC_CACHE_URLS = [
    '/',
    '/index-multilang.html',
    '/en/index.html',
    '/assets/js/language.js',
    '/assets/js/components.js', 
    '/assets/js/main.js',
    '/assets/js/forms.js',
    '/assets/data/vi.json',
    '/assets/data/en.json',
    'https://cdn.tailwindcss.com',
    'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
];

// Install event - cache static resources
self.addEventListener('install', (event) => {
    // console.log('[SW] Installing...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                // console.log('[SW] Caching static resources');
                return cache.addAll(STATIC_CACHE_URLS.map(url => new Request(url, {
                    cache: 'reload'
                })));
            })
            .then(() => {
                // console.log('[SW] Installation complete');
                return self.skipWaiting();
            })
            .catch((error) => {
                console.error('[SW] Installation failed:', error);
            })
    );
});

// Activate event - cleanup old caches
self.addEventListener('activate', (event) => {
    // console.log('[SW] Activating...');
    
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames
                        .filter((cacheName) => {
                            return cacheName.startsWith('hbw-') && cacheName !== CACHE_NAME;
                        })
                        .map((cacheName) => {
                            // console.log('[SW] Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        })
                );
            })
            .then(() => {
                // console.log('[SW] Activation complete');
                return self.clients.claim();
            })
    );
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests and chrome-extension requests
    if (event.request.method !== 'GET' || event.request.url.startsWith('chrome-extension://')) {
        return;
    }

    // Handle navigation requests
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    // If network request succeeds, return it
                    if (response && response.status === 200) {
                        return response;
                    }
                    // If it fails, fall back to cache
                    return caches.match('/index-multilang.html');
                })
                .catch(() => {
                    // Network failed, serve from cache
                    return caches.match('/index-multilang.html');
                })
        );
        return;
    }

    // Handle other requests with Cache First strategy
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                if (cachedResponse) {
                    // Serve from cache
                    return cachedResponse;
                }
                
                // Not in cache, fetch from network
                return fetch(event.request)
                    .then((response) => {
                        // Check if valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clone the response for caching
                        const responseToCache = response.clone();

                        // Cache the response for future use
                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    })
                    .catch((error) => {
                        console.error('[SW] Fetch failed:', error);
                        
                        // For image requests, return a placeholder
                        if (event.request.destination === 'image') {
                            return new Response(`
                                <svg width="200" height="150" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="100%" height="100%" fill="#f3f4f6"/>
                                    <text x="50%" y="50%" font-family="Arial" font-size="14" fill="#6b7280" text-anchor="middle" dominant-baseline="middle">
                                        Image Offline
                                    </text>
                                </svg>
                            `, {
                                headers: { 'Content-Type': 'image/svg+xml' }
                            });
                        }
                        
                        // For other requests, throw the error
                        throw error;
                    });
            })
    );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
    // console.log('[SW] Background sync triggered:', event.tag);
    
    if (event.tag === 'contact-form-sync') {
        event.waitUntil(
            // Handle offline form submissions
            handleOfflineFormSubmissions()
        );
    }
});

// Push notification handling
self.addEventListener('push', (event) => {
    // console.log('[SW] Push notification received');
    
    const options = {
        body: event.data ? event.data.text() : 'New notification from HBW',
        icon: '/assets/images/icon-192.png',
        badge: '/assets/images/badge-72.png',
        tag: 'hbw-notification',
        actions: [
            {
                action: 'view',
                title: 'View Details'
            },
            {
                action: 'dismiss', 
                title: 'Dismiss'
            }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification('HBW Technology', options)
    );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
    // console.log('[SW] Notification clicked:', event.action);
    
    event.notification.close();
    
    if (event.action === 'view') {
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

// Helper function for offline form submissions
async function handleOfflineFormSubmissions() {
    try {
        // Implement offline form submission logic here
        // console.log('[SW] Handling offline form submissions');
        
        // This would typically involve:
        // 1. Retrieving saved form data from IndexedDB
        // 2. Attempting to submit to the server
        // 3. Showing appropriate user feedback
        
        return Promise.resolve();
    } catch (error) {
        console.error('[SW] Offline form submission failed:', error);
        return Promise.reject(error);
    }
}

// Performance monitoring
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'PERFORMANCE_METRICS') {
        // console.log('[SW] Performance metrics received:', event.data.metrics);
        
        // Forward metrics to analytics service when online
        if (navigator.onLine) {
            // Send metrics to analytics endpoint
            fetch('/api/analytics', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(event.data.metrics)
            }).catch(error => {
                console.error('[SW] Analytics submission failed:', error);
            });
        }
    }
});