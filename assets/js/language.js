// HBW Multi-Language System
// Handles dynamic content loading, language switching, and URL routing

class LanguageManager {
    constructor() {
        this.currentLang = this.detectLanguage();
        this.data = {};
        this.fallbackLang = 'vi';
        this.supportedLangs = ['vi', 'en'];
        this.initialized = false;
        
        // Bind methods
        this.init = this.init.bind(this);
        this.loadLanguage = this.loadLanguage.bind(this);
        this.switchLanguage = this.switchLanguage.bind(this);
        this.getText = this.getText.bind(this);
        this.updateContent = this.updateContent.bind(this);
    }
    
    // Detect language from URL, localStorage, or browser
    detectLanguage() {
        // Check URL path first
        const path = window.location.pathname;
        if (path.startsWith('/en/') || path === '/en') {
            return 'en';
        }
        
        // Check localStorage
        const saved = localStorage.getItem('hbw_language');
        if (saved && this.supportedLangs.includes(saved)) {
            return saved;
        }
        
        // Check browser language
        const browserLang = navigator.language.slice(0, 2);
        if (this.supportedLangs.includes(browserLang)) {
            return browserLang;
        }
        
        // Default to Vietnamese
        return 'vi';
    }
    
    // Initialize language system
    async init() {
        try {
            // Load current language data
            await this.loadLanguage(this.currentLang);
            
            // Update page content
            this.updateContent();
            
            // Update meta tags
            this.updateMetaTags();
            
            // Update hreflang tags
            this.updateHreflangTags();
            
            // Setup language switcher
            this.setupLanguageSwitcher();
            
            // Setup URL handling
            this.setupUrlHandling();
            
            this.initialized = true;
            console.log(`✅ Language system initialized: ${this.currentLang}`);
            
        } catch (error) {
            console.error('❌ Language initialization failed:', error);
            // Fallback to Vietnamese if English fails
            if (this.currentLang !== this.fallbackLang) {
                this.currentLang = this.fallbackLang;
                await this.init();
            }
        }
    }
    
    // Load language data from JSON
    async loadLanguage(lang) {
        if (this.data[lang]) {
            return this.data[lang];
        }
        
        try {
            const response = await fetch(`/assets/data/${lang}.json`);
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            this.data[lang] = await response.json();
            console.log(`📄 Loaded language data: ${lang}`);
            return this.data[lang];
            
        } catch (error) {
            console.error(`❌ Failed to load language: ${lang}`, error);
            throw error;
        }
    }
    
    // Get text by key path (e.g., 'hero.headline')
    getText(key, lang = null) {
        const targetLang = lang || this.currentLang;
        const langData = this.data[targetLang];
        
        if (!langData) {
            console.warn(`Language data not loaded: ${targetLang}`);
            return key;
        }
        
        // Navigate through nested object keys
        const keys = key.split('.');
        let value = langData;
        
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                console.warn(`Translation key not found: ${key} in ${targetLang}`);
                return key;
            }
        }
        
        return typeof value === 'string' ? value : key;
    }
    
    // Update all content on page
    updateContent() {
        // Update elements with data-lang attribute
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(element => {
            const key = element.getAttribute('data-lang');
            const text = this.getText(key);
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        });
        
        // Update elements with data-lang-html (for HTML content)
        const htmlElements = document.querySelectorAll('[data-lang-html]');
        htmlElements.forEach(element => {
            const key = element.getAttribute('data-lang-html');
            const text = this.getText(key);
            element.innerHTML = text;
        });
        
        // Update links with data-lang-href
        const linkElements = document.querySelectorAll('[data-lang-href]');
        linkElements.forEach(element => {
            const key = element.getAttribute('data-lang-href');
            const href = this.getText(key);
            if (href && href !== key) {
                element.href = href;
            }
        });
        
        console.log(`🔄 Content updated for language: ${this.currentLang}`);
    }
    
    // Update meta tags
    updateMetaTags() {
        const langData = this.data[this.currentLang];
        if (!langData || !langData.meta) return;
        
        // Update title
        if (langData.meta.title) {
            document.title = langData.meta.title;
        }
        
        // Update description
        const descMeta = document.querySelector('meta[name="description"]');
        if (descMeta && langData.meta.description) {
            descMeta.content = langData.meta.description;
        }
        
        // Update keywords
        const keywordsMeta = document.querySelector('meta[name="keywords"]');
        if (keywordsMeta && langData.meta.keywords) {
            keywordsMeta.content = langData.meta.keywords;
        }
        
        // Update Open Graph
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle && langData.meta.title) {
            ogTitle.content = langData.meta.title.split(' | ')[0];
        }
        
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc && langData.meta.description) {
            ogDesc.content = langData.meta.description;
        }
    }
    
    // Update hreflang tags
    updateHreflangTags() {
        // Remove existing hreflang tags
        document.querySelectorAll('link[hreflang]').forEach(link => link.remove());
        
        // Get current path without language prefix
        let basePath = window.location.pathname;
        if (basePath.startsWith('/en/')) {
            basePath = basePath.replace('/en/', '/');
        } else if (basePath === '/en') {
            basePath = '/';
        }
        
        // Add hreflang for Vietnamese (default)
        const viLink = document.createElement('link');
        viLink.rel = 'alternate';
        viLink.hreflang = 'vi';
        viLink.href = `${window.location.origin}${basePath}`;
        document.head.appendChild(viLink);
        
        // Add hreflang for English
        const enPath = basePath === '/' ? '/en/' : `/en${basePath}`;
        const enLink = document.createElement('link');
        enLink.rel = 'alternate';
        enLink.hreflang = 'en';
        enLink.href = `${window.location.origin}${enPath}`;
        document.head.appendChild(enLink);
        
        // Add canonical
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            const canonicalPath = this.currentLang === 'en' ? enPath : basePath;
            canonical.href = `${window.location.origin}${canonicalPath}`;
        }
    }
    
    // Setup language switcher
    setupLanguageSwitcher() {
        // Create language switcher if it doesn't exist
        let switcher = document.querySelector('#languageSwitcher');
        if (!switcher) {
            switcher = this.createLanguageSwitcher();
        }
        
        // Add event listeners
        const buttons = switcher.querySelectorAll('[data-lang-switch]');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const targetLang = button.getAttribute('data-lang-switch');
                this.switchLanguage(targetLang);
            });
        });
        
        // Update active state
        this.updateSwitcherState(switcher);
    }
    
    // Create language switcher element
    createLanguageSwitcher() {
        const switcher = document.createElement('div');
        switcher.id = 'languageSwitcher';
        switcher.className = 'flex items-center space-x-2 text-sm';
        switcher.innerHTML = `
            <button data-lang-switch="vi" class="px-2 py-1 rounded transition-colors">
                🇻🇳 VI
            </button>
            <span class="text-gray-400">|</span>
            <button data-lang-switch="en" class="px-2 py-1 rounded transition-colors">
                🇺🇸 EN
            </button>
        `;
        
        // Insert into header navigation
        const nav = document.querySelector('nav .flex.items-center.space-x-4');
        if (nav) {
            nav.insertBefore(switcher, nav.firstChild);
        }
        
        return switcher;
    }
    
    // Update switcher active state
    updateSwitcherState(switcher) {
        const buttons = switcher.querySelectorAll('[data-lang-switch]');
        buttons.forEach(button => {
            const lang = button.getAttribute('data-lang-switch');
            if (lang === this.currentLang) {
                button.className = 'px-2 py-1 rounded bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 font-semibold transition-colors';
            } else {
                button.className = 'px-2 py-1 rounded text-gray-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors';
            }
        });
    }
    
    // Switch language
    async switchLanguage(targetLang) {
        if (!this.supportedLangs.includes(targetLang) || targetLang === this.currentLang) {
            return;
        }
        
        try {
            // Show loading state
            this.showLoadingState();
            
            // Load target language data
            await this.loadLanguage(targetLang);
            
            // Update current language
            this.currentLang = targetLang;
            
            // Save to localStorage
            localStorage.setItem('hbw_language', targetLang);
            
            // Update URL
            this.updateUrl(targetLang);
            
            // Update content
            this.updateContent();
            
            // Update meta tags
            this.updateMetaTags();
            
            // Update hreflang
            this.updateHreflangTags();
            
            // Update switcher state
            const switcher = document.querySelector('#languageSwitcher');
            if (switcher) {
                this.updateSwitcherState(switcher);
            }
            
            // Hide loading state
            this.hideLoadingState();
            
            console.log(`🔄 Language switched to: ${targetLang}`);
            
            // Dispatch custom event
            window.dispatchEvent(new CustomEvent('languageChanged', {
                detail: { language: targetLang, data: this.data[targetLang] }
            }));
            
        } catch (error) {
            console.error(`❌ Language switch failed: ${targetLang}`, error);
            this.hideLoadingState();
        }
    }
    
    // Update URL based on language
    updateUrl(lang) {
        const currentPath = window.location.pathname;
        let newPath;
        
        if (lang === 'en') {
            // Switch to English URL
            if (currentPath.startsWith('/en/')) {
                return; // Already on English URL
            } else if (currentPath === '/') {
                newPath = '/en/';
            } else {
                newPath = `/en${currentPath}`;
            }
        } else {
            // Switch to Vietnamese URL (default)
            if (currentPath.startsWith('/en/')) {
                newPath = currentPath.replace('/en/', '/');
                if (newPath === '/') newPath = '/';
            } else if (currentPath === '/en') {
                newPath = '/';
            } else {
                return; // Already on Vietnamese URL
            }
        }
        
        // Update URL without page reload
        const newUrl = `${window.location.origin}${newPath}${window.location.search}${window.location.hash}`;
        window.history.pushState({ language: lang }, '', newUrl);
    }
    
    // Setup URL handling for back/forward navigation
    setupUrlHandling() {
        window.addEventListener('popstate', (event) => {
            const newLang = this.detectLanguage();
            if (newLang !== this.currentLang) {
                this.switchLanguage(newLang);
            }
        });
    }
    
    // Show loading state
    showLoadingState() {
        document.body.style.pointerEvents = 'none';
        document.body.style.opacity = '0.8';
    }
    
    // Hide loading state  
    hideLoadingState() {
        document.body.style.pointerEvents = '';
        document.body.style.opacity = '';
    }
    
    // Get all data for current language
    getAllData(lang = null) {
        const targetLang = lang || this.currentLang;
        return this.data[targetLang] || {};
    }
    
    // Check if language is loaded
    isLanguageLoaded(lang) {
        return !!this.data[lang];
    }
    
    // Get current language
    getCurrentLanguage() {
        return this.currentLang;
    }
    
    // Get supported languages
    getSupportedLanguages() {
        return [...this.supportedLangs];
    }
}

// Create global instance
window.langManager = new LanguageManager();

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.langManager.init();
    });
} else {
    window.langManager.init();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LanguageManager;
}