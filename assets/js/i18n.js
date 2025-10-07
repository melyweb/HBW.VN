/**
 * HBW Multi-Language System
 * Lazy Loading i18n with Performance Optimization
 * 
 * Features:
 * - Lazy load language files only when needed
 * - Cache loaded translations in memory
 * - Default English content loads first
 * - Vietnamese translations update after JSON load
 * - Page-specific and common translations
 * - LocalStorage for language preference
 */

class HBWi18n {
    constructor() {
        this.currentLang = 'en'; // Default language is English
        this.cache = new Map(); // Translation cache
        this.pageTranslations = {}; // Current page translations
        this.commonTranslations = {}; // Common translations (nav, footer)
        this.isLoading = false;
        
        // Initialize
        this.init();
    }

    init() {
        // Get saved language or default to English
        this.currentLang = localStorage.getItem('hbw_language') || 'en';
        
        // Set initial UI state - Default English button active
        this.updateLanguageButtons();
        
        // Load current language for pages using auto-initialization
        // Pages with manual initialization will call loadLanguage separately
        this.loadLanguage(this.currentLang);
        
        // Setup language switcher event listeners
        this.setupLanguageSwitchers();
    }

    /**
     * Get current page name from URL
     */
    getCurrentPage() {
        const path = window.location.pathname;
        
        if (path === '/' || path === '/index.html') return 'home';
        
        // More specific paths first to avoid conflicts
        if (path.includes('/services/smart-contracts')) return 'smart_contracts';
        if (path.includes('/services/defi-protocols')) return 'defi_protocols';
        if (path.includes('/services/web-development')) return 'web_development';
        if (path.includes('/services/modern-web-apps')) return 'modern_web_apps';
        if (path.includes('/services/e-commerce-solutions')) return 'ecommerce_solutions';
        if (path.includes('/services/mobile-ai-solutions')) return 'mobile_ai_solutions';
        if (path.includes('/services/mobile-apps')) return 'mobile_apps';
        if (path.includes('/services/ai-trading-bots')) return 'ai_trading_bots';
        if (path.includes('/services/boost-rank-similarweb-hypestat')) return 'boost_rank';
        if (path.includes('/services/blockchain')) return 'blockchain';
        
        // General services page should come after specific service pages
        if (path.includes('/services')) return 'services';
        
        if (path.includes('/portfolio')) return 'portfolio';
        if (path.includes('/about')) return 'about';
        if (path.includes('/contact')) return 'contact';
        // Handle individual blog posts by extracting filename
        if (path.includes('/blog/') && path.endsWith('.html')) {
            const filename = path.split('/').pop().replace('.html', '');
            return filename; // e.g., 'the-future-of-defi-trends-2025'
        }
        if (path.includes('/blog')) return 'blog';
        
        if (path.includes('/privacy')) return 'privacy';
        if (path.includes('/terms')) return 'terms';
        if (path.includes('/cookies')) return 'cookies';
        
        return 'home'; // Default fallback
    }

    /**
     * Load language translations with caching
     */
    async loadLanguage(lang) {
        if (this.isLoading) return;
        
        try {
            this.isLoading = true;
            
            // Check cache first
            const cacheKey = `${lang}_translations`;
            if (this.cache.has(cacheKey)) {
                const cached = this.cache.get(cacheKey);
                this.commonTranslations = cached.common;
                this.pageTranslations = cached.page;
                this.applyTranslations();
                return;
            }

            const page = this.getCurrentPage();
            
            // Determine the correct path based on current location
            const pathname = window.location.pathname;
            const basePath = (pathname.includes('/services/') || pathname.includes('/blog/')) ? '../assets/js/lang' : './assets/js/lang';
            
            // Load both common and page-specific translations in parallel
            const commonUrl = `${basePath}/${lang}/common.json`;
            const pageUrl = `${basePath}/${lang}/${page}.json`;
            
            // console.log(`📥 Loading translations: ${commonUrl} and ${pageUrl}`);
            
            const [commonResponse, pageResponse] = await Promise.all([
                fetch(commonUrl),
                fetch(pageUrl)
            ]);

            if (!commonResponse.ok || !pageResponse.ok) {
                console.error(`Failed to load ${lang} translations - Common: ${commonResponse.status}, Page: ${pageResponse.status}`);
                throw new Error(`Failed to load ${lang} translations`);
            }

            const [commonData, pageData] = await Promise.all([
                commonResponse.json(),
                pageResponse.json()
            ]);

            // Cache the loaded translations
            this.cache.set(cacheKey, {
                common: commonData,
                page: pageData
            });

            this.commonTranslations = commonData;
            this.pageTranslations = pageData;
            

            
            // Apply translations to DOM
            this.applyTranslations();
            
            // console.log(`✅ Loaded ${lang.toUpperCase()} translations for ${page} page`);
            
        } catch (error) {
            console.error(`❌ Error loading ${lang} translations:`, error);
            
            // Fallback to English if error loading Vietnamese
            if (lang === 'vi') {
                // console.log('🔄 Falling back to English translations');
                this.currentLang = 'en';
                this.loadLanguage('en');
            }
        } finally {
            this.isLoading = false;
        }
    }

    /**
     * Get nested translation value by key path
     */
    getTranslation(keyPath) {
        // Try page translations first with different strategies
        
        // Strategy 1: Direct key lookup (for keys without prefix like "hero.badge")
        let pageValue = this.getNestedValue(this.pageTranslations, keyPath);
        if (pageValue !== undefined) return pageValue;
        
        // Strategy 2: Remove page prefix (for keys like "defi_protocols.hero.title")
        const page = this.getCurrentPage();
        if (keyPath.startsWith(page + '.')) {
            const cleanKeyPath = keyPath.substring(page.length + 1);
            pageValue = this.getNestedValue(this.pageTranslations, cleanKeyPath);
            if (pageValue !== undefined) return pageValue;
        }
        
        // Strategy 3: Try common translations
        const commonValue = this.getNestedValue(this.commonTranslations, keyPath);
        if (commonValue !== undefined) return commonValue;
        
        // Return key if no translation found (for debugging)
        return keyPath;
    }

    /**
     * Get nested object value by dot notation path
     */
    getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => {
            return current && current[key] !== undefined ? current[key] : undefined;
        }, obj);
    }

    /**
     * Apply translations to all elements with data-i18n attribute
     */
    applyTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            
            if (translation && translation !== key) {
                // Handle different element types
                if (element.tagName === 'INPUT') {
                    element.placeholder = translation;
                } else if (element.tagName === 'META') {
                    element.content = translation;
                } else if (element.hasAttribute('title')) {
                    element.title = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Update document title and meta tags
        this.updatePageMeta();
    }

    /**
     * Update page title and meta tags
     */
    updatePageMeta() {
        // Update page title
        const titleElement = document.querySelector('title[data-i18n]');
        if (titleElement) {
            const key = titleElement.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            if (translation && translation !== key) {
                document.title = translation;
            }
        }

        // Update meta description
        const metaDesc = document.querySelector('meta[name=\"description\"][data-i18n]');
        if (metaDesc) {
            const key = metaDesc.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            if (translation && translation !== key) {
                metaDesc.content = translation;
            }
        }

        // Update meta keywords
        const metaKeywords = document.querySelector('meta[name=\"keywords\"][data-i18n]');
        if (metaKeywords) {
            const key = metaKeywords.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            if (translation && translation !== key) {
                metaKeywords.content = translation;
            }
        }
    }

    /**
     * Switch to a specific language
     */
    async switchLanguage(lang) {
        if (lang === this.currentLang || this.isLoading) return;
        
        this.currentLang = lang;
        localStorage.setItem('hbw_language', lang);
        
        this.updateLanguageButtons();
        await this.loadLanguage(lang);
        
        // Dispatch custom event for language change
        window.dispatchEvent(new CustomEvent('languageChanged', { 
            detail: { language: lang } 
        }));
    }

    /**
     * Update language button states
     */
    updateLanguageButtons() {
        const langButtons = document.querySelectorAll('.lang-btn');
        
        langButtons.forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            
            if (btnLang === this.currentLang) {
                btn.classList.add('active', 'bg-blue-500', 'text-white');
                btn.classList.remove('text-slate-600');
            } else {
                btn.classList.remove('active', 'bg-blue-500', 'text-white');
                btn.classList.add('text-slate-600');
            }
        });
    }

    /**
     * Setup language switcher buttons
     */
    setupLanguageSwitchers() {
        // Add event listeners to language buttons
        document.addEventListener('click', (e) => {
            if (e.target.matches('.lang-btn') || e.target.closest('.lang-btn')) {
                e.preventDefault();
                const button = e.target.matches('.lang-btn') ? e.target : e.target.closest('.lang-btn');
                const lang = button.getAttribute('data-lang');
                
                if (lang && lang !== this.currentLang) {
                    this.switchLanguage(lang);
                }
            }
        });

        // Handle page navigation to reload appropriate translations
        window.addEventListener('popstate', () => {
            this.loadLanguage(this.currentLang);
        });
    }

    /**
     * Manual translation trigger for dynamic content
     */
    translate(element) {
        if (!element) return;
        
        const key = element.getAttribute('data-i18n');
        if (key) {
            const translation = this.getTranslation(key);
            if (translation && translation !== key) {
                element.textContent = translation;
            }
        }
    }

    /**
     * Get current language
     */
    getCurrentLanguage() {
        return this.currentLang;
    }

    /**
     * Clear translation cache (useful for development)
     */
    clearCache() {
        this.cache.clear();
        // console.log('🗑️ Translation cache cleared');
    }
}

// Initialize the i18n system when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // console.log('🌐 Initializing HBW i18n system...');
    const hbwI18n = new HBWi18n();
    
    // Export for global access
    window.HBWi18n = hbwI18n;
    
    // console.log('✅ HBW i18n system initialized');
});

// Export for ES6 modules
export default HBWi18n;