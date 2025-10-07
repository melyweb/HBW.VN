/**
 * HBW Component Templates - ES6 Modules
 * Professional solution for Cloudflare static hosting
 * EDIT THIS FILE = UPDATE ALL PAGES
 */

// HEADER TEMPLATE - Edit here to update ALL pages
export const headerTemplate = `
<!-- Header Navigation -->
<header role="banner" class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
    <nav class="container mx-auto px-6" role="navigation">
        <div class="flex items-center justify-between h-16">
            
            <!-- Logo -->
            <a href="/" class="flex items-center space-x-3 focus-ring rounded-lg">
                <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-lg">
                    B
                </div>
                <span class="text-xl font-bold text-slate-800">HBW</span>
            </a>
            
            <!-- Desktop Navigation -->
            <div class="hidden lg:flex items-center space-x-8">
                <a href="/" data-page="home" class="nav-link flex items-center text-slate-600 font-semibold transition-colors duration-200 focus-ring rounded px-3 py-2 hover:bg-blue-50">
                    <i class="fas fa-home w-4 h-4 mr-2 text-sm"></i>
                    <span data-i18n="navigation.home">Home</span>
                </a>
                
                <!-- Services Mega Menu -->
                <div class="mega-menu-wrapper group relative">
                    <a href="/services" data-page="services" class="nav-link relative flex items-center px-4 py-3 font-medium transition-all duration-300 rounded-lg text-slate-600 hover:text-blue-600">
                        <i class="flex items-center justify-center w-4 h-4 mr-3 text-sm transition-transform duration-300 fas fa-cogs group-hover:scale-110"></i>
                        <span class="leading-4" data-i18n="navigation.services">Services</span>
                        <i class="flex items-center justify-center w-3 h-3 ml-2 text-xs transition-transform duration-300 fas fa-chevron-down group-hover:rotate-180"></i>
                    </a>
                    
                    <!-- Mega Menu Dropdown -->
                    <div class="absolute left-0 z-50 invisible w-screen max-w-4xl mt-3 transition-all duration-300 transform opacity-0 top-full group-hover:opacity-100 group-hover:visible">
                        <div class="overflow-hidden bg-white shadow-2xl rounded-2xl border border-slate-200">
                            <div class="p-6 bg-slate-50/50">
                                <div class="grid grid-cols-3 gap-8">
                                    <!-- Blockchain Development -->
                                    <div class="space-y-4">
                                        <h4 class="font-semibold text-slate-800 mb-4 flex items-center">
                                            <i class="fab fa-bitcoin mr-2 text-blue-600"></i>
                                            <span data-i18n="navigation.mega_menu.blockchain.title">Blockchain Development</span>
                                        </h4>
                                        <div class="space-y-2">
                                            <a href="/services/smart-contracts" class="flex items-center p-3 transition-all duration-200 rounded-xl hover:bg-white hover:shadow-md group/item">
                                                <div class="flex items-center justify-center w-10 h-10 mr-3 transition-colors duration-200 rounded-lg bg-blue-50 group-hover/item:bg-blue-100">
                                                    <i class="fas fa-file-contract text-blue-600"></i>
                                                </div>
                                                <div>
                                                    <div class="font-medium transition-colors duration-200 text-slate-800 group-hover/item:text-blue-600" data-i18n="navigation.mega_menu.blockchain.smart_contracts">Smart Contracts</div>
                                                    <div class="text-xs text-slate-500" data-i18n="navigation.mega_menu.blockchain.smart_contracts_desc">ERC-20, ERC-721, DeFi</div>
                                                </div>
                                            </a>
                                            <a href="/services/defi-protocols" class="flex items-center p-3 transition-all duration-200 rounded-xl hover:bg-white hover:shadow-md group/item">
                                                <div class="flex items-center justify-center w-10 h-10 mr-3 transition-colors duration-200 rounded-lg bg-purple-50 group-hover/item:bg-purple-100">
                                                    <i class="fas fa-coins text-purple-600"></i>
                                                </div>
                                                <div>
                                                    <div class="font-medium transition-colors duration-200 text-slate-800 group-hover/item:text-purple-600" data-i18n="navigation.mega_menu.blockchain.defi">DeFi Protocols</div>
                                                    <div class="text-xs text-slate-500" data-i18n="navigation.mega_menu.blockchain.defi_desc">AMM, Yield Farming, Lending</div>
                                                </div>
                                            </a>
                                            <a href="/services/ai-trading-bots" class="flex items-center p-3 transition-all duration-200 rounded-xl hover:bg-white hover:shadow-md group/item">
                                                <div class="flex items-center justify-center w-10 h-10 mr-3 transition-colors duration-200 rounded-lg bg-indigo-50 group-hover/item:bg-indigo-100">
                                                    <i class="fas fa-robot text-indigo-600"></i>
                                                </div>
                                                <div>
                                                    <div class="font-medium transition-colors duration-200 text-slate-800 group-hover/item:text-indigo-600" data-i18n="navigation.mega_menu.blockchain.ai_trading">AI Trading Bots</div>
                                                    <div class="text-xs text-slate-500" data-i18n="navigation.mega_menu.blockchain.ai_trading_desc">Algorithmic Trading</div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <!-- Web Development -->
                                    <div class="space-y-4">
                                        <h4 class="font-semibold text-slate-800 mb-4 flex items-center">
                                            <i class="fas fa-laptop-code mr-2 text-green-600"></i>
                                            <span data-i18n="navigation.mega_menu.web.title">Web Development</span>
                                        </h4>
                                        <div class="space-y-2">
                                            <a href="/services/web-development" class="flex items-center p-3 transition-all duration-200 rounded-xl hover:bg-white hover:shadow-md group/item">
                                                <div class="flex items-center justify-center w-10 h-10 mr-3 transition-colors duration-200 rounded-lg bg-green-50 group-hover/item:bg-green-100">
                                                    <i class="fab fa-react text-green-600"></i>
                                                </div>
                                                <div>
                                                    <div class="font-medium transition-colors duration-200 text-slate-800 group-hover/item:text-green-600" data-i18n="navigation.mega_menu.web.web_development">Web Development</div>
                                                    <div class="text-xs text-slate-500" data-i18n="navigation.mega_menu.web.web_development_desc">React, Vue.js, Next.js</div>
                                                </div>
                                            </a>
                                            <a href="/services/modern-web-apps" class="flex items-center p-3 transition-all duration-200 rounded-xl hover:bg-white hover:shadow-md group/item">
                                                <div class="flex items-center justify-center w-10 h-10 mr-3 transition-colors duration-200 rounded-lg bg-blue-50 group-hover/item:bg-blue-100">
                                                    <i class="fas fa-rocket text-blue-600"></i>
                                                </div>
                                                <div>
                                                    <div class="font-medium transition-colors duration-200 text-slate-800 group-hover/item:text-blue-600" data-i18n="navigation.mega_menu.web.modern_apps">Modern Web Apps</div>
                                                    <div class="text-xs text-slate-500" data-i18n="navigation.mega_menu.web.modern_apps_desc">PWA, WebAssembly, AI</div>
                                                </div>
                                            </a>
                                            <a href="/services/e-commerce-solutions" class="flex items-center p-3 transition-all duration-200 rounded-xl hover:bg-white hover:shadow-md group/item">
                                                <div class="flex items-center justify-center w-10 h-10 mr-3 transition-colors duration-200 rounded-lg bg-teal-50 group-hover/item:bg-teal-100">
                                                    <i class="fas fa-store text-teal-600"></i>
                                                </div>
                                                <div>
                                                    <div class="font-medium transition-colors duration-200 text-slate-800 group-hover/item:text-teal-600" data-i18n="navigation.mega_menu.web.ecommerce">E-commerce Solutions</div>
                                                    <div class="text-xs text-slate-500" data-i18n="navigation.mega_menu.web.ecommerce_desc">Shopify, WooCommerce</div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>

                                    <!-- Mobile & AI -->
                                    <div class="space-y-4">
                                        <h4 class="font-semibold text-slate-800 mb-4 flex items-center">
                                            <i class="fas fa-mobile-alt mr-2 text-orange-600"></i>
                                            <span data-i18n="navigation.mega_menu.mobile.title">Mobile & AI Solutions</span>
                                        </h4>
                                        <div class="space-y-2">
                                            <a href="/services/mobile-apps" class="flex items-center p-3 transition-all duration-200 rounded-xl hover:bg-white hover:shadow-md group/item">
                                                <div class="flex items-center justify-center w-10 h-10 mr-3 transition-colors duration-200 rounded-lg bg-orange-50 group-hover/item:bg-orange-100">
                                                    <i class="fas fa-mobile-alt text-orange-600"></i>
                                                </div>
                                                <div>
                                                    <div class="font-medium transition-colors duration-200 text-slate-800 group-hover/item:text-orange-600" data-i18n="navigation.mega_menu.mobile.apps">Mobile Apps</div>
                                                    <div class="text-xs text-slate-500" data-i18n="navigation.mega_menu.mobile.apps_desc">iOS, Android, Cross-Platform</div>
                                                </div>
                                            </a>
                                            <a href="/services/mobile-ai-solutions" class="flex items-center p-3 transition-all duration-200 rounded-xl hover:bg-white hover:shadow-md group/item">
                                                <div class="flex items-center justify-center w-10 h-10 mr-3 transition-colors duration-200 rounded-lg bg-pink-50 group-hover/item:bg-pink-100">
                                                    <i class="fas fa-brain text-pink-600"></i>
                                                </div>
                                                <div>
                                                    <div class="font-medium transition-colors duration-200 text-slate-800 group-hover/item:text-pink-600" data-i18n="navigation.mega_menu.mobile.ai_mobile">AI Mobile Solutions</div>
                                                    <div class="text-xs text-slate-500" data-i18n="navigation.mega_menu.mobile.ai_mobile_desc">Computer Vision, NLP</div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Call to Action -->
                            <div class="p-6 bg-gradient-to-r from-blue-600 to-purple-600">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center space-x-4">
                                        <div class="flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl">
                                            <i class="text-lg text-white fas fa-comments"></i>
                                        </div>
                                        <div>
                                            <div class="text-lg font-bold text-white" data-i18n="navigation.mega_menu.consultation.title">Need Free Consultation?</div>
                                            <div class="text-blue-100" data-i18n="navigation.mega_menu.consultation.subtitle">Contact us for detailed project quotes</div>
                                        </div>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <a href="/contact" class="px-6 py-3 font-semibold transition-colors duration-200 bg-white shadow-lg text-blue-600 rounded-xl hover:bg-blue-50">
                                            <i class="mr-2 fas fa-comments"></i>
                                            <span data-i18n="navigation.mega_menu.consultation.cta">Contact Now</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <a href="/portfolio" data-page="portfolio" class="nav-link flex items-center text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200 focus-ring rounded px-3 py-2 hover:bg-blue-50">
                    <i class="fas fa-folder-open w-4 h-4 mr-2 text-sm"></i>
                    <span data-i18n="navigation.portfolio">Portfolio</span>
                </a>
                <a href="/about" data-page="about" class="nav-link flex items-center text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200 focus-ring rounded px-3 py-2 hover:bg-blue-50">
                    <i class="fas fa-users w-4 h-4 mr-2 text-sm"></i>
                    <span data-i18n="navigation.about">About</span>
                </a>
                <a href="/contact" data-page="contact" class="nav-link flex items-center text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200 focus-ring rounded px-3 py-2 hover:bg-blue-50">
                    <i class="fas fa-phone w-4 h-4 mr-2 text-sm"></i>
                    <span data-i18n="navigation.contact">Contact</span>
                </a>
                <a href="/blog" data-page="blog" class="nav-link flex items-center text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200 focus-ring rounded px-3 py-2 hover:bg-blue-50">
                    <i class="fas fa-rss w-4 h-4 mr-2 text-sm"></i>
                    <span data-i18n="navigation.blog">Blog</span>
                </a>
            </div>
            
            <!-- Language Switch & CTA -->
            <div class="flex items-center space-x-4">
                <div class="hidden sm:flex items-center space-x-2 p-1 bg-slate-100 rounded-lg">
                    <button id="lang-vi" class="px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 focus-ring lang-btn" data-lang="vi">VI</button>
                    <button id="lang-en" class="px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 focus-ring lang-btn active bg-blue-500 text-white" data-lang="en">EN</button>
                </div>
                <a href="/contact" class="hidden md:inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 focus-ring" data-i18n="navigation.cta">Free Consultation</a>
                
                <!-- Mobile menu button -->
                <button id="mobile-menu-btn" class="lg:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors duration-200 focus-ring rounded" aria-label="Toggle mobile menu" aria-expanded="false">
                    <i class="fas fa-bars text-lg"></i>
                </button>
            </div>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200 lg:hidden hidden z-40 shadow-lg">
        <div class="container mx-auto px-4 py-4 max-h-screen overflow-y-auto">
            <div class="space-y-3">
                
                <!-- Home -->
                <a href="/" data-page="home" class="mobile-nav-link flex items-center justify-between w-full p-3 text-left transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 rounded-xl text-slate-700 font-medium">
                    <div class="flex items-center space-x-4">
                        <div class="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/10">
                            <i class="fas fa-home text-sm text-blue-600"></i>
                        </div>
                        <span data-i18n="navigation.home">Home</span>
                    </div>
                </a>
                
                <!-- Services Accordion -->
                <div>
                    <button class="flex items-center justify-between w-full p-3 text-left transition-all duration-200 hover:bg-slate-50 hover:text-blue-600 rounded-xl text-slate-700 font-medium" onclick="toggleMobileAccordion('services')">
                        <div class="flex items-center space-x-4">
                            <div class="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/10">
                                <i class="fas fa-cogs text-sm text-purple-600"></i>
                            </div>
                            <span data-i18n="navigation.services">Services</span>
                            <span class="px-2 py-1 ml-2 text-xs font-medium text-purple-600 bg-purple-500/10 rounded-full">Premium</span>
                        </div>
                        <div class="flex items-center">
                            <svg class="w-5 h-5 transition-transform duration-200 services-chevron" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </button>
                    
                    <div class="services-content overflow-hidden transition-all duration-300 ease-in-out max-h-0">
                        <div class="py-3 pl-4 mt-2 space-y-2 bg-slate-50/50 rounded-2xl">
                            
                            <!-- Blockchain Category -->
                            <div class="py-2">
                                <div class="flex items-center px-4 py-3 mb-3 bg-white rounded-full shadow-sm">
                                    <i class="mr-3 text-sm fab fa-bitcoin text-blue-600"></i>
                                    <h4 class="text-sm font-semibold text-slate-900" data-i18n="navigation.mega_menu.blockchain.title">Blockchain Development</h4>
                                </div>
                                <div class="ml-4 space-y-2">
                                    <a href="/services/smart-contracts" class="mobile-nav-link flex items-center px-4 py-2 mb-1 text-sm text-slate-600 transition-colors rounded-full hover:bg-white hover:text-blue-600 hover:shadow-sm">
                                        <i class="mr-2 text-xs fas fa-file-contract text-blue-500"></i>
                                        <span data-i18n="navigation.mega_menu.blockchain.smart_contracts">Smart Contracts</span>
                                    </a>
                                    <a href="/services/defi-protocols" class="mobile-nav-link flex items-center px-4 py-2 mb-1 text-sm text-slate-600 transition-colors rounded-full hover:bg-white hover:text-purple-600 hover:shadow-sm">
                                        <i class="mr-2 text-xs fas fa-coins text-purple-500"></i>
                                        <span data-i18n="navigation.mega_menu.blockchain.defi">DeFi Protocols</span>
                                    </a>
                                    <a href="/services/ai-trading-bots" class="mobile-nav-link flex items-center px-4 py-2 mb-1 text-sm text-slate-600 transition-colors rounded-full hover:bg-white hover:text-indigo-600 hover:shadow-sm">
                                        <i class="mr-2 text-xs fas fa-robot text-indigo-500"></i>
                                        <span data-i18n="navigation.mega_menu.blockchain.ai_trading">AI Trading Bots</span>
                                    </a>
                                </div>
                            </div>
                            
                            <!-- Web Development Category -->
                            <div class="py-2">
                                <div class="flex items-center px-4 py-3 mb-3 bg-white rounded-full shadow-sm">
                                    <i class="mr-3 text-sm fas fa-laptop-code text-green-600"></i>
                                    <h4 class="text-sm font-semibold text-slate-900" data-i18n="navigation.mega_menu.web.title">Web Development</h4>
                                </div>
                                <div class="ml-4 space-y-2">
                                    <a href="/services/web-development" class="mobile-nav-link flex items-center px-4 py-2 mb-1 text-sm text-slate-600 transition-colors rounded-full hover:bg-white hover:text-green-600 hover:shadow-sm">
                                        <i class="mr-2 text-xs fab fa-react text-green-500"></i>
                                        <span data-i18n="navigation.mega_menu.web.web_development">Web Development</span>
                                    </a>
                                    <a href="/services/modern-web-apps" class="mobile-nav-link flex items-center px-4 py-2 mb-1 text-sm text-slate-600 transition-colors rounded-full hover:bg-white hover:text-blue-600 hover:shadow-sm">
                                        <i class="mr-2 text-xs fas fa-rocket text-blue-500"></i>
                                        <span data-i18n="navigation.mega_menu.web.modern_apps">Modern Web Apps</span>
                                    </a>
                                    <a href="/services/e-commerce-solutions" class="mobile-nav-link flex items-center px-4 py-2 mb-1 text-sm text-slate-600 transition-colors rounded-full hover:bg-white hover:text-orange-600 hover:shadow-sm">
                                        <i class="mr-2 text-xs fas fa-shopping-cart text-orange-500"></i>
                                        <span data-i18n="navigation.mega_menu.web.ecommerce">E-commerce Solutions</span>
                                    </a>
                                </div>
                            </div>
                            
                            <!-- Mobile & AI Category -->
                            <div class="py-2">
                                <div class="flex items-center px-4 py-3 mb-3 bg-white rounded-full shadow-sm">
                                    <i class="mr-3 text-sm fas fa-mobile-alt text-orange-600"></i>
                                    <h4 class="text-sm font-semibold text-slate-900" data-i18n="navigation.mega_menu.mobile.title">Mobile & AI Solutions</h4>
                                </div>
                                <div class="ml-4 space-y-2">
                                    <a href="/services/mobile-apps" class="mobile-nav-link flex items-center px-4 py-2 mb-1 text-sm text-slate-600 transition-colors rounded-full hover:bg-white hover:text-orange-600 hover:shadow-sm">
                                        <i class="mr-2 text-xs fas fa-mobile-alt text-orange-500"></i>
                                        <span data-i18n="navigation.mega_menu.mobile.mobile_apps">Mobile Apps</span>
                                    </a>
                                    <a href="/services/mobile-ai-solutions" class="mobile-nav-link flex items-center px-4 py-2 mb-1 text-sm text-slate-600 transition-colors rounded-full hover:bg-white hover:text-pink-600 hover:shadow-sm">
                                        <i class="mr-2 text-xs fas fa-brain text-pink-500"></i>
                                        <span data-i18n="navigation.mega_menu.mobile.ai_solutions">AI Solutions</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Portfolio -->
                <a href="/portfolio" data-page="portfolio" class="mobile-nav-link flex items-center justify-between w-full p-3 text-left transition-all duration-200 hover:bg-slate-50 hover:text-blue-600 rounded-xl text-slate-700 font-medium">
                    <div class="flex items-center space-x-4">
                        <div class="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/10">
                            <i class="fas fa-folder-open text-sm text-green-600"></i>
                        </div>
                        <span data-i18n="navigation.portfolio">Portfolio</span>
                    </div>
                </a>
                
                <!-- About -->
                <a href="/about" data-page="about" class="mobile-nav-link flex items-center justify-between w-full p-3 text-left transition-all duration-200 hover:bg-slate-50 hover:text-blue-600 rounded-xl text-slate-700 font-medium">
                    <div class="flex items-center space-x-4">
                        <div class="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500/10">
                            <i class="fas fa-users text-sm text-indigo-600"></i>
                        </div>
                        <span data-i18n="navigation.about">About</span>
                    </div>
                </a>
                
                <!-- Contact -->
                <a href="/contact" data-page="contact" class="mobile-nav-link flex items-center justify-between w-full p-3 text-left transition-all duration-200 hover:bg-orange-50 hover:text-orange-600 rounded-xl text-slate-700 font-medium">
                    <div class="flex items-center space-x-4">
                        <div class="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500/10">
                            <i class="fas fa-phone text-sm text-orange-600"></i>
                        </div>
                        <span data-i18n="navigation.contact">Contact</span>
                    </div>
                </a>
                
                <!-- Blog -->
                <a href="/blog" data-page="blog" class="mobile-nav-link flex items-center justify-between w-full p-3 text-left transition-all duration-200 hover:bg-slate-50 hover:text-blue-600 rounded-xl text-slate-700 font-medium">
                    <div class="flex items-center space-x-4">
                        <div class="flex items-center justify-center w-10 h-10 rounded-full bg-slate-500/10">
                            <i class="fas fa-rss text-sm text-slate-600"></i>
                        </div>
                        <span data-i18n="navigation.blog">Blog</span>
                    </div>
                </a>
                
                <!-- Language Switcher & CTA for Mobile -->
                <div class="pt-4 border-t border-slate-200">
                    <div class="flex items-center justify-between space-x-4">
                        <div class="flex items-center space-x-2 p-1 bg-slate-100 rounded-lg">
                            <button class="px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 focus-ring lang-btn" data-lang="vi">VI</button>
                            <button class="px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 focus-ring lang-btn active bg-blue-500 text-white" data-lang="en">EN</button>
                        </div>
                        <a href="/contact" class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm transition-all duration-300 focus-ring" data-i18n="navigation.cta">Free Consultation</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
`;

// FOOTER TEMPLATE - Edit here to update ALL pages  
export const footerTemplate = `
<footer class="bg-slate-900 text-slate-300">
    <div class="container mx-auto px-6 py-12">
        <!-- New Layout: Company Info + Right Side Columns -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            <!-- Left Column: Company Info (5/12 width on desktop, full width on mobile) -->
            <div class="lg:col-span-5">
                <div class="flex items-center space-x-3 mb-6">
                    <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-xl">B</div>
                    <div>
                        <span class="text-2xl font-bold text-white">HBW</span>
                        <div class="text-sm text-blue-400" data-i18n="footer.company.tagline">Technology Solutions</div>
                    </div>
                </div>
                <p class="text-slate-400 mb-6 max-w-md" data-i18n="footer.company.description">
                    Professional blockchain development company specializing in DeFi protocols, AI trading systems, and innovative web solutions.
                </p>
                <div class="flex space-x-4">
                    <a href="https://github.com/hbw-tech" class="flex items-center justify-center w-10 h-10 bg-slate-800 hover:bg-blue-500 text-slate-400 hover:text-white rounded-lg transition-all duration-300">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/company/hbw-blockchain" class="flex items-center justify-center w-10 h-10 bg-slate-800 hover:bg-blue-500 text-slate-400 hover:text-white rounded-lg transition-all duration-300">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="mailto:hello@hbw.com" class="flex items-center justify-center w-10 h-10 bg-slate-800 hover:bg-blue-500 text-slate-400 hover:text-white rounded-lg transition-all duration-300">
                        <i class="fas fa-envelope"></i>
                    </a>
                    <a href="https://twitter.com/hbw_tech" class="flex items-center justify-center w-10 h-10 bg-slate-800 hover:bg-blue-500 text-slate-400 hover:text-white rounded-lg transition-all duration-300">
                        <i class="fab fa-twitter"></i>
                    </a>
                </div>
            </div>

            <!-- Right Side: Service Columns + Operating Company (7/12 width on desktop) -->
            <div class="lg:col-span-7">
                <!-- Service Columns Layout -->
                <div class="space-y-6">
                    <!-- Row 1: Core Services + Solutions & Support (Always on same row from mobile up) -->
                    <div class="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        <!-- Core Services -->
                        <div class="col-span-1">
                            <h4 class="text-white font-semibold mb-4" data-i18n="footer.services.core_title">Core Services</h4>
                            <ul class="space-y-2">
                                <li><a href="/services/blockchain" class="text-slate-400 hover:text-blue-400 transition-colors duration-200" data-i18n="footer.services.blockchain">Blockchain Development</a></li>
                                <li><a href="/services/web-development" class="text-slate-400 hover:text-blue-400 transition-colors duration-200" data-i18n="footer.services.web">Web Development</a></li>
                                <li><a href="/services/mobile-apps" class="text-slate-400 hover:text-blue-400 transition-colors duration-200" data-i18n="footer.services.mobile">Mobile Apps</a></li>
                                <li><a href="/services/ai-trading-bots" class="text-slate-400 hover:text-blue-400 transition-colors duration-200" data-i18n="footer.services.ai_trading">AI Trading Bots</a></li>
                                <li><a href="/services/defi-protocols" class="text-slate-400 hover:text-blue-400 transition-colors duration-200" data-i18n="footer.services.defi">DeFi Protocols</a></li>
                            </ul>
                        </div>

                        <!-- Solutions & Support -->
                        <div class="col-span-1">
                            <h4 class="text-white font-semibold mb-4" data-i18n="footer.solutions.title">Solutions & Support</h4>
                            <ul class="space-y-2">
                                <li><a href="/services/consulting" class="text-slate-400 hover:text-blue-400 transition-colors duration-200" data-i18n="footer.solutions.consulting">Technical Consulting</a></li>
                                <li><a href="/services/modern-web-apps" class="text-slate-400 hover:text-blue-400 transition-colors duration-200" data-i18n="footer.solutions.modern_apps">Modern Web Apps</a></li>
                                <li><a href="/services/e-commerce-solutions" class="text-slate-400 hover:text-blue-400 transition-colors duration-200" data-i18n="footer.solutions.ecommerce">E-commerce Solutions</a></li>
                                <li><a href="/portfolio" class="text-slate-400 hover:text-blue-400 transition-colors duration-200" data-i18n="footer.solutions.portfolio">Portfolio</a></li>
                                <li><a href="/blog" class="text-slate-400 hover:text-blue-400 transition-colors duration-200" data-i18n="footer.solutions.blog">Tech Blog</a></li>
                            </ul>
                        </div>

                        <!-- Contact Info (3rd column on desktop, full width on mobile) -->
                        <div class="col-span-2 lg:col-span-1">
                            <h4 class="text-white font-semibold mb-4" data-i18n="footer.contact.title">Contact & Legal</h4>
                            <ul class="space-y-2">
                                <li class="flex items-center text-slate-400">
                                    <i class="fas fa-envelope w-4 mr-2"></i>
                                    info@hbw.vn
                                </li>
                                <li class="flex items-center text-slate-400">
                                    <i class="fas fa-phone w-4 mr-2"></i>
                                    +84 768 931 999
                                </li>
                                <li class="flex items-center text-slate-400">
                                    <i class="fas fa-map-marker-alt w-4 mr-2"></i>
                                    <span data-i18n="footer.contact.location">Ho Chi Minh City, Vietnam</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Operating Company Section (Full width of right side, under the 3 columns) -->
                <div class="bg-slate-800/50 rounded-lg p-6">
                    <div class="text-center">
                        <h5 class="text-white font-semibold mb-3" data-i18n="footer.ozi.company_title">Operating Company</h5>
                        <div class="space-y-3 text-slate-300">
                            <p class="font-medium text-sm lg:text-base" data-i18n="footer.ozi.company_name">CÔNG TY TNHH CÔNG NGHỆ & TRUYỀN THÔNG OZI NETWORK</p>
                            
                            <!-- Company Details -->
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs lg:text-sm">
                                <div class="flex items-center justify-center">
                                    <i class="fas fa-id-card w-4 mr-2 text-blue-400"></i>
                                    <span data-i18n="footer.ozi.tax_code">Mã số thuế: 0401702133</span>
                                </div>
                                <div class="flex items-center justify-center">
                                    <i class="fas fa-map-marker-alt w-4 mr-2 text-blue-400"></i>
                                    <span data-i18n="footer.ozi.address">TP Đà Nẵng, Việt Nam</span>
                                </div>
                                <div class="flex items-center justify-center">
                                    <i class="fas fa-calendar w-4 mr-2 text-blue-400"></i>
                                    <span data-i18n="footer.ozi.established">Thành lập: 20/10/2015</span>
                                </div>
                            </div>

                            <!-- Legal Links -->
                            <div class="border-t border-slate-700 pt-3 mt-4">
                                <div class="flex flex-wrap items-center justify-center gap-4 text-xs lg:text-sm">
                                    <a href="/privacy" class="text-slate-400 hover:text-blue-400 transition-colors duration-200" data-i18n="footer.legal.privacy">Privacy Policy</a>
                                    <span class="text-slate-600">•</span>
                                    <a href="/terms" class="text-slate-400 hover:text-blue-400 transition-colors duration-200" data-i18n="footer.legal.terms">Terms of Service</a>
                                    <span class="text-slate-600">•</span>
                                    <a href="/contact" class="text-slate-400 hover:text-blue-400 transition-colors duration-200" data-i18n="footer.legal.contact">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Copyright -->
        <div class="border-t border-slate-800 pt-6">
            <div class="text-center">
                <p class="text-slate-400 text-sm" data-i18n="footer.legal.copyright">
                    © 2015 HBW Technology Solutions. All rights reserved.
                </p>
            </div>
        </div>
    </div>
</footer>
`;

// Component loader
export function loadHBWComponents() {
    // Load header
    const headerPlaceholder = document.querySelector('#header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerTemplate;
    }
    
    // Load footer  
    const footerPlaceholder = document.querySelector('#footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerTemplate;
    }
    
    // Load floating contact bubble
    loadFloatingContact();
    
    // Set active navigation
    setActiveNavigation();
    
    // Initialize mobile menu functionality
    setTimeout(() => {
        initializeMobileMenu();
        console.log('📱 Mobile menu initialized');
    }, 100);
    
    // Initialize Google Analytics
    initializeGoogleAnalytics();
}

// Load floating contact bubble - Direct implementation
function loadFloatingContact() {
    // Add floating contact HTML to body
    const floatingContactHTML = `
    <!-- Floating Contact Bubble -->
    <div id="floating-contact-bubble" class="fixed bottom-6 right-6 z-50">
        <!-- Main Contact Button -->
        <div class="relative">
            <!-- Main Button -->
            <button 
                id="contact-main-btn"
                class="group relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
                aria-label="Contact Options"
            >
                <!-- Pulse Animation -->
                <div class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-ping opacity-20"></div>
                
                <!-- Icon -->
                <div class="relative transform transition-transform duration-300 group-hover:rotate-12">
                    <i class="fas fa-comments text-xl"></i>
                </div>
                
                <!-- Floating Text -->
                <div class="absolute right-full mr-4 bg-slate-800 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                    <span data-i18n="contact_bubble.title">Contact Now</span>
                    <div class="absolute top-1/2 left-full transform -translate-y-1/2 border-4 border-transparent border-l-slate-800"></div>
                </div>
            </button>

            <!-- Contact Options Menu -->
            <div 
                id="contact-options-menu"
                class="absolute bottom-full right-0 mb-4 opacity-0 invisible transform translate-y-4 transition-all duration-300 ease-out"
            >
                <div class="bg-white rounded-2xl shadow-2xl p-4 min-w-[280px] border border-slate-200">
                    <!-- Header -->
                    <div class="text-center mb-4 pb-3 border-b border-slate-100">
                        <h3 class="text-lg font-bold text-slate-800 mb-1" data-i18n="contact_bubble.header">Direct Contact</h3>
                        <p class="text-sm text-slate-600" data-i18n="contact_bubble.subtitle">Choose your preferred contact method</p>
                    </div>

                    <!-- Contact Options -->
                    <div class="space-y-3">
                        <!-- Zalo -->
                        <a 
                            href="https://zalo.me/0844444744"
                            target="_blank"
                            class="group flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform hover:scale-105"
                        >
                            <div class="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                                <i class="fab fa-facebook-messenger text-xl"></i>
                            </div>
                            <div class="flex-1">
                                <div class="font-semibold text-slate-800 group-hover:text-blue-700 transition-colors duration-300" data-i18n="contact_bubble.zalo">Zalo</div>
                                <div class="text-sm text-slate-600">0844444744</div>
                            </div>
                            <div class="transform group-hover:translate-x-1 transition-transform duration-300">
                                <i class="fas fa-arrow-right text-slate-400 group-hover:text-blue-500"></i>
                            </div>
                        </a>

                        <!-- WhatsApp -->
                        <a 
                            href="https://wa.me/84768931999"
                            target="_blank"
                            class="group flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-all duration-300 transform hover:scale-105"
                        >
                            <div class="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-xl group-hover:bg-green-600 transition-colors duration-300">
                                <i class="fab fa-whatsapp text-xl"></i>
                            </div>
                            <div class="flex-1">
                                <div class="font-semibold text-slate-800 group-hover:text-green-700 transition-colors duration-300" data-i18n="contact_bubble.whatsapp">WhatsApp</div>
                                <div class="text-sm text-slate-600">0768931999</div>
                            </div>
                            <div class="transform group-hover:translate-x-1 transition-transform duration-300">
                                <i class="fas fa-arrow-right text-slate-400 group-hover:text-green-500"></i>
                            </div>
                        </a>

                        <!-- Telegram -->
                        <a 
                            href="https://t.me/BrianNgo999"
                            target="_blank"
                            class="group flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-cyan-50 to-cyan-100 hover:from-cyan-100 hover:to-cyan-200 transition-all duration-300 transform hover:scale-105"
                        >
                            <div class="flex items-center justify-center w-12 h-12 bg-cyan-500 text-white rounded-xl group-hover:bg-cyan-600 transition-colors duration-300">
                                <i class="fab fa-telegram text-xl"></i>
                            </div>
                            <div class="flex-1">
                                <div class="font-semibold text-slate-800 group-hover:text-cyan-700 transition-colors duration-300" data-i18n="contact_bubble.telegram">Telegram</div>
                                <div class="text-sm text-slate-600">@BrianNgo999</div>
                            </div>
                            <div class="transform group-hover:translate-x-1 transition-transform duration-300">
                                <i class="fas fa-arrow-right text-slate-400 group-hover:text-cyan-500"></i>
                            </div>
                        </a>
                    </div>

                    <!-- Footer -->
                    <div class="mt-4 pt-3 border-t border-slate-100 text-center">
                        <p class="text-xs text-slate-500">
                            <i class="fas fa-clock mr-1"></i>
                            <span data-i18n="contact_bubble.footer">24/7 Support - Fast Response</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
    /* Floating Contact Bubble Animations */
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(2deg); }
    }

    #floating-contact-bubble {
        animation: float 3s ease-in-out infinite;
    }

    #floating-contact-bubble:hover {
        animation: none;
    }

    /* Menu Animation States */
    #contact-options-menu.active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    /* Responsive Adjustments */
    @media (max-width: 640px) {
        #floating-contact-bubble {
            bottom: 1rem;
            right: 1rem;
        }
        
        #contact-options-menu {
            right: 0;
            min-width: 260px;
        }
    }
    </style>
    `;
    
    document.body.insertAdjacentHTML('beforeend', floatingContactHTML);
    console.log('✅ Floating contact HTML added to body');
    
    // Initialize functionality
    setTimeout(() => {
        console.log('🔄 Initializing floating contact functionality...');
        initFloatingContactBubble();
    }, 100);
}

// Initialize floating contact functionality  
function initFloatingContactBubble() {
    const mainBtn = document.getElementById('contact-main-btn');
    const menu = document.getElementById('contact-options-menu');
    
    if (!mainBtn || !menu) {
        console.log('⚠️ Floating contact elements not found');
        return;
    }
    
    let isMenuOpen = false;

    // Toggle menu function
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            menu.classList.add('active');
            mainBtn.setAttribute('aria-expanded', 'true');
        } else {
            menu.classList.remove('active');
            mainBtn.setAttribute('aria-expanded', 'false');
        }
    }

    // Main button click handler
    mainBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        const bubble = document.getElementById('floating-contact-bubble');
        if (bubble && !bubble.contains(e.target)) {
            if (isMenuOpen) {
                toggleMenu();
            }
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
            toggleMenu();
        }
    });

    // Track contact clicks 
    const contactLinks = menu.querySelectorAll('a');
    contactLinks.forEach(link => {
        link.addEventListener('click', function() {
            const platform = this.querySelector('.font-semibold').textContent;
            console.log(`📞 Contact clicked: ${platform}`);
            
            // Close menu after click
            setTimeout(() => {
                if (isMenuOpen) toggleMenu();
            }, 300);
        });
    });

    console.log('🚀 Floating contact bubble initialized successfully!');
}

// Active navigation highlighting
function setActiveNavigation() {
    const currentPage = window.location.pathname;
    let activePage = 'home';
    
    if (currentPage.includes('/portfolio')) activePage = 'portfolio';
    else if (currentPage.includes('/about')) activePage = 'about';
    else if (currentPage.includes('/contact')) activePage = 'contact';
    else if (currentPage.includes('/blog')) activePage = 'blog';
    else if (currentPage.includes('/services')) activePage = 'services';
    
    // Apply active class
    const activeLink = document.querySelector(`[data-page="${activePage}"]`);
    if (activeLink) {
        activeLink.classList.remove('text-slate-600');
        // activeLink.classList.add('active');
        activeLink.classList.add('text-blue-600');
    }
}

// Mobile menu functionality
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'true');
                mobileMenuBtn.querySelector('i').classList.remove('fa-bars');
                mobileMenuBtn.querySelector('i').classList.add('fa-times');
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            }
        });
        
        // Close mobile menu when clicking a navigation link
        const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            });
        });
    }
}

// Mobile accordion functionality
function toggleMobileAccordion(section) {
    const content = document.querySelector(`.${section}-content`);
    const chevron = document.querySelector(`.${section}-chevron`);
    
    if (content && chevron) {
        const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
        
        if (isOpen) {
            // Close accordion
            content.style.maxHeight = '0px';
            chevron.style.transform = 'rotate(0deg)';
        } else {
            // Open accordion
            content.style.maxHeight = content.scrollHeight + 'px';
            chevron.style.transform = 'rotate(180deg)';
        }
    }
}

// Make toggleMobileAccordion globally available
window.toggleMobileAccordion = toggleMobileAccordion;

// Initialize Google Analytics - Loads on all pages
function initializeGoogleAnalytics() {
    // Check if Google Analytics is already loaded
    if (window.gtag || document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
        return;
    }
    
    // Create and append Google Analytics script
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-KCL68RY08K';
    document.head.appendChild(gtagScript);
    
    // Initialize gtag function and configuration
    const gtagConfig = document.createElement('script');
    gtagConfig.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-KCL68RY08K');
    `;
    document.head.appendChild(gtagConfig);
    
    console.log('Google Analytics (G-KCL68RY08K) initialized successfully');
}

// Language switching is now handled by i18n.js
// This function remains for compatibility but logic moved to HBWi18n class

// Components will be loaded via ES6 module imports in each page
// No auto-execution here to avoid conflicts