// // Dashboard functionality for WeaveKart profile section
// document.addEventListener('DOMContentLoaded', function() {
//     // Elements
//     const editBtn = document.querySelector('.edit-btn');
//     const formInputs = document.querySelectorAll('.profile-form input[disabled]');
//     const formRadios = document.querySelectorAll('.profile-form input[type="radio"][disabled]');
//     const navLinks = document.querySelectorAll('.nav-link');
    
//     // Edit button functionality
//     let isEditing = false;
    
//     if (editBtn) {
//         editBtn.addEventListener('click', function() {
//             isEditing = !isEditing;
            
//             if (isEditing) {
//                 // Enable form inputs
//                 formInputs.forEach(input => {
//                     input.disabled = false;
//                 });
                
//                 // Enable radio buttons
//                 formRadios.forEach(radio => {
//                     radio.disabled = false;
//                 });
                
//                 // Change button text
//                 editBtn.textContent = 'Save';
//                 editBtn.style.backgroundColor = 'var(--accent-color)';
//             } else {
//                 // Save logic would go here (e.g., API call)
                
//                 // Display save confirmation
//                 showNotification('Profile information saved successfully!');
                
//                 // Disable form inputs
//                 formInputs.forEach(input => {
//                     input.disabled = true;
//                 });
                
//                 // Disable radio buttons
//                 formRadios.forEach(radio => {
//                     radio.disabled = true;
//                 });
                
//                 // Change button text back
//                 editBtn.textContent = 'Edit';
//                 editBtn.style.backgroundColor = 'var(--secondary-color)';
//             }
//         });
//     }
    
//     // Navigation functionality
//     navLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
            
//             // Remove active class from all links
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//             });
            
//             // Add active class to clicked link
//             this.classList.add('active');
            
//             // In a real application, you would load the corresponding content here
//             const section = this.querySelector('span').textContent;
            
//             // For demo purposes, show a notification
//             // if (section !== 'My Profile') {
//             //     showNotification(`${section} section would load here`);
//             // }
//         });
//     });
    
//     // Search functionality
//     const searchBar = document.querySelector('.search-bar input');
//     const searchButton = document.querySelector('.search-bar button');
    
//     if (searchButton && searchBar) {
//         searchButton.addEventListener('click', function() {
//             performSearch();
//         });
        
//         searchBar.addEventListener('keypress', function(e) {
//             if (e.key === 'Enter') {
//                 performSearch();
//             }
//         });
//     }
    
//     function performSearch() {
//         const searchTerm = searchBar.value.trim();
//         if (searchTerm) {
//             showNotification(`Searching for: "${searchTerm}"`);
//             searchBar.value = '';
//         }
//     }
    
//     const cartButton = document.querySelector('.header-action:first-child');

//     if (cartButton) {
//         cartButton.addEventListener('click', function() {
//             window.location.href = 'cart.html';
//         });
//     }

//     // Order details functionality
//     // const orderCards = document.querySelectorAll('.order-card');
    
//     // orderCards.forEach(card => {
//     //     card.addEventListener('click', function() {
//     //         const productName = this.querySelector('h4').textContent;
//     //         const orderNumber = this.querySelector('p').textContent.split('•')[0].trim();
//     //         showNotification(`Order details for ${productName} (${orderNumber}) would open here`);
//     //     });
//     // });
    
//     // View all orders functionality
//     // const viewAllLink = document.querySelector('.view-all');
    
//     // if (viewAllLink) {
//     //     viewAllLink.addEventListener('click', function(e) {
//     //         e.preventDefault();
//     //         showNotification('All orders would be displayed here');
//     //     });
//     // }
    
//     // Notification system
//     function showNotification(message) {
//         // Create notification element if it doesn't exist
//         let notification = document.querySelector('.notification');
        
//         if (!notification) {
//             notification = document.createElement('div');
//             notification.className = 'notification';
//             document.body.appendChild(notification);
            
//             // Add styles for notification
//             notification.style.position = 'fixed';
//             notification.style.bottom = '20px';
//             notification.style.right = '20px';
//             notification.style.backgroundColor = 'var(--primary-color)';
//             notification.style.color = 'white';
//             notification.style.padding = '10px 20px';
//             notification.style.borderRadius = '4px';
//             notification.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
//             notification.style.transition = 'all 0.3s ease';
//             notification.style.zIndex = '1000';
//         }
        
//         // Set message
//         notification.textContent = message;
//         notification.style.opacity = '1';
//         notification.style.transform = 'translateY(0)';
        
//         // Auto-hide after 3 seconds
//         setTimeout(() => {
//             notification.style.opacity = '0';
//             notification.style.transform = 'translateY(20px)';
//         }, 3000);
//     }
    
//     // Add user data for demonstration (in a real app, this would come from backend)
//     function initializeDemoData() {
//         // For a real application, you would fetch this data from an API
//         // This is just for demonstration purposes
//         const userData = {
//             name: "Priya",
//             email: "priya18@gmail.com",
//             phone: "+91 9876543210",
//             gender: "Female",
//             orders: [
//                 {
//                     id: "WK123456",
//                     product: "Handwoven Cotton Saree",
//                     date: "April 2, 2025",
//                     status: "delivered",
//                     price: "₹2,499"
//                 },
//                 {
//                     id: "WK123455",
//                     product: "Traditional Silk Kurta",
//                     date: "March 28, 2025",
//                     status: "delivered",
//                     price: "₹1,799"
//                 }
//             ]
//         };
        
//         // This function would be extended to populate data dynamically
//         // if this were a full application
//     }
    
//     // Initialize any demo data
//     initializeDemoData();
// });
// WeaveKart Navigation Script
document.addEventListener('DOMContentLoaded', function() {
    // Get the edit button
    const editBtn = document.querySelector('.edit-btn');
    
    // Get all form inputs that should be toggled
    const formInputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');
    const formRadios = document.querySelectorAll('input[type="radio"]');
    
    let isEditing = false;
    
    if (editBtn) {
        // Initially disable all inputs
        formInputs.forEach(input => {
            input.disabled = true;
        });
        
        formRadios.forEach(radio => {
            radio.disabled = true;
        });
        
        editBtn.addEventListener('click', function() {
            isEditing = !isEditing;
            
            if (isEditing) {
                // Enable form inputs
                formInputs.forEach(input => {
                    input.disabled = false;
                });
                
                // Enable radio buttons
                formRadios.forEach(radio => {
                    radio.disabled = false;
                });
                
                // Change button text
                editBtn.textContent = 'Save';
                editBtn.style.backgroundColor = 'var(--accent-color)';
            } else {
                // Save logic would go here (e.g., API call)
                
                // Display save confirmation - assuming showNotification is defined elsewhere
                if (typeof showNotification === 'function') {
                    showNotification('Profile information saved successfully!');
                } else {
                    alert('Profile information saved successfully!');
                }
                
                // Disable form inputs
                formInputs.forEach(input => {
                    input.disabled = true;
                });
                
                // Disable radio buttons
                formRadios.forEach(radio => {
                    radio.disabled = true;
                });
                
                // Change button text back
                editBtn.textContent = 'Edit';
                editBtn.style.backgroundColor = 'var(--secondary-color)';
            }
        });
    }
    // Handle sidebar navigation items
    const navigationItems = {
        'My Profile': 'profile.html',
        'Orders': 'orders.html',
        'Wishlist': 'wishlist.html',
        'Addresses': 'addresses.html',
        'Payments': 'payments.html',
        'Rewards': 'rewards.html',
        'Notifications': 'notifications.html'
    };

    // Set up event listeners for all sidebar navigation items
    for (const [text, url] of Object.entries(navigationItems)) {
        const elements = document.querySelectorAll(`a:contains('${text}'), li:contains('${text}')`);
        elements.forEach(element => {
            element.style.cursor = 'pointer';
            element.addEventListener('click', function(e) {
                window.location.href = url;
            });
        });
    }

    // Handle top navigation - Cart and Profile buttons
    const cartButton = document.querySelector('.header-action:first-child, a:contains("Cart")');
    if (cartButton) {
        cartButton.addEventListener('click', function() {
            window.location.href = 'cart.html';
        });
    }

    // Add profile button functionality
    const profileButton = document.querySelector('a:contains("Profile")');
    if (profileButton) {
        profileButton.addEventListener('click', function() {
            window.location.href = 'profile.html';
        });
    }

    // Logo should redirect to home page
    const logo = document.querySelector('.logo, a:contains("WeaveKart")');
    if (logo) {
        logo.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }

    // Handle "View All" in Recent Orders
    const viewAllButton = document.querySelector('a:contains("View All")');
    if (viewAllButton) {
        viewAllButton.addEventListener('click', function() {
            window.location.href = 'orders.html';
        });
    }

    // Make sure product items in orders are clickable
    const productItems = document.querySelectorAll('.product-item, img[alt="Product"]');
    productItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            // Extract product ID from the order number or use a default
            const orderElement = item.closest('[id*="order"]') || item.parentElement;
            const orderId = orderElement.id || 'product';
            window.location.href = `product-details.html?id=${orderId}`;
        });
    });



    // Handle footer links
    const footerLinks = {
        'Contact Us': 'contact.html',
        'About Us': 'about.html',
        'Payments': 'payments-info.html',
        'Shipping': 'shipping-info.html'
    };

    for (const [text, url] of Object.entries(footerLinks)) {
        const elements = document.querySelectorAll(`a:contains('${text}')`);
        elements.forEach(element => {
            element.addEventListener('click', function(e) {
                window.location.href = url;
            });
        });
    }

    // Social media icons
    const socialLinks = document.querySelectorAll('.social a, .social i');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const socialPlatform = link.getAttribute('data-platform') || 
                                  link.className.includes('facebook') ? 'facebook' : 
                                  link.className.includes('twitter') ? 'twitter' :
                                  link.className.includes('instagram') ? 'instagram' : 
                                  link.className.includes('youtube') ? 'youtube' : 'social';
            window.open(`https://www.${socialPlatform}.com/weavekart`, '_blank');
        });
    });

    // Helper function to find text in elements regardless of direct text or child nodes
    // This polyfill allows for ":contains" selector-like functionality
    function addContainsSelector() {
        // Make querySelectorAll work with :contains
        document.querySelectorAll = (function(originalQuerySelectorAll) {
            return function(selector) {
                if (selector.includes(':contains(')) {
                    // Extract the text to search for
                    const matches = selector.match(/:contains\(['"](.+?)['"]\)/);
                    if (matches && matches[1]) {
                        const searchText = matches[1];
                        const baseSelector = selector.replace(/:contains\(['"].+?['"]\)/, '');
                        
                        // Get all elements matching the base selector
                        const elements = originalQuerySelectorAll.call(this, baseSelector || '*');
                        
                        // Filter to only those containing the text
                        return Array.from(elements).filter(el => 
                            el.textContent.includes(searchText)
                        );
                    }
                }
                return originalQuerySelectorAll.call(this, selector);
            };
        })(document.querySelectorAll);
    }

    // Initialize the custom selector helper
    addContainsSelector();
});