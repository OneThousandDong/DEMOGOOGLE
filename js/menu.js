// // Function to fetch menu items from API
// async function loadMenuItems() {
//     try {
//         const response = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLiKz2eqU5jTqG3mY8WfCqFA-CDW0BWUKHw_S8Ouk9528orwM1Ecrzmh_P4_DDdwvi87fIvSBLa7a0h_kk5fCc5vrT--_zZHoaSlF1oBc193Anjj3N71ndJHIpvKN2NQVW6rq09L5FfgAM3scaXni8YI6VMAl7g5UNuWTF-bLtRPqVd9IuuPWlXTM292rTF4gGqlQXgnVtAYrefYF_zLpm-UgRvXt6MtMzMU6n6GXgtYyZ_hFIeUd0A5G9Yjy-MSloF8UL92FmEqTU2icgxs6CIkeCFZfcQtUYPZ5Kaz&lib=Mz5cPuOXGjX0-6MkAKnyq9hmLYgwH51xj');
//         const data = await response.json();
        
//         // Get the menu container
//         const menuContainer = document.querySelector('.navbar-collapse ul');
//         if (!menuContainer) return;

//         // Clear existing menu items
//         menuContainer.innerHTML = '';

//         // Add new menu items from API data
//         data.forEach((item, index) => {
//             const li = document.createElement('li');
//             if (index === 0) {
//                 li.className = 'active';
//             }
            
//             const a = document.createElement('a');
//             if (index == 0) {
//                 a.href = "index.html" || '#';
//             } else if (index == 1) {
//                 a.href = "about.html" || '#';
//             } else if (index == 2) {
//                 a.href = "courses.html" || '#';
//             } else if (index == 3) {
//                 a.href = "portfolio.html" || '#';
//             }
            
//             a.textContent = item.name;
            
//             li.appendChild(a);
//             menuContainer.appendChild(li);
//         });
//     } catch (error) {
//         console.error('Error loading menu items:', error);
//     }
// }

// // Load menu items when document is ready
// document.addEventListener('DOMContentLoaded', loadMenuItems); 

// Function to show/hide loading screen
function toggleLoading(show) {
    const loadingScreen = document.getElementById('loading-screen');
    const wrapper = document.getElementById('wrapper');
    
    if (show) {
        loadingScreen.style.display = 'flex';
        wrapper.style.display = 'none';
    } else {
        loadingScreen.style.display = 'none';
        wrapper.style.display = 'block';
    }
}

// Function to update slider images
function updateSliderImages(data) {
    const sliderImages = document.querySelectorAll('#main-slider .slides li img');
    data.forEach((item, index) => {
        if (sliderImages[index]) {
            sliderImages[index].src = item.link;
            sliderImages[index].alt = item.name;
        }
    });
}

// Function to fetch menu items from API
async function loadMenuItems() {
    // Show loading screen
    toggleLoading(true);

    try {
        const response = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLgiMzDgenAKbcxiRV3C7vHZQPh4GVTD5z7DM49MJA-AeGRVMnt51odId_DeyHzxAUUtsnPER270fE1x3QY2gWsZtQnuQnNMM6I4LovS0OKK1Wa2uyHbGN2wqwZ-w7kLNpzFsKXiZdV5Ad9-wvHeu2C85f3KbtahNNqdPcdqQ_NxcFoz_gqG92PaRVDUJbOyNw64VooalHpiFsttV0x1_JpKTS9gIXhogXkImJikQEmd3EMiB-Hkr_UJNXn1l4JHT6IQ7UUmQEpbcpZe50mG0BbWYv1EVw&lib=Mz5cPuOXGjX0-6MkAKnyq9hmLYgwH51xj');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        
        // Update slider images
        updateSliderImages(data);
        
        // Get the menu container
        const menuContainer = document.querySelector('.navbar-collapse ul');
        if (!menuContainer) return;

        // Clear existing menu items
        menuContainer.innerHTML = '';

        // Add new menu items from API data
        data.forEach((item, index) => {
            const li = document.createElement('li');
            if (index === 0) {
                li.className = 'active';
            }
            
            const a = document.createElement('a');
            // Set default links based on index
            const links = {
                0: "index.html",
                1: "about.html",
                2: "courses.html",
                3: "portfolio.html",
                4: "pricing.html",
                5: "contact.html"
            };
            
            a.href = links[index] || '#';
            a.textContent = item.name;
            
            li.appendChild(a);
            menuContainer.appendChild(li);
        });

        // Hide loading screen after successful load
        toggleLoading(false);
    } catch (error) {
        console.error('Error loading menu items:', error);
        // Show fallback menu items if API fails
        const fallbackMenu = [
            { name: 'Trang chủ', link: 'index.html' },
            { name: 'About Us', link: 'about.html' },
            { name: 'Courses', link: 'courses.html' },
            { name: 'Portfolio', link: 'portfolio.html' },
            { name: 'Pricing', link: 'pricing.html' },
            { name: 'Contact', link: 'contact.html' }
        ];

        const menuContainer = document.querySelector('.navbar-collapse ul');
        if (menuContainer) {
            menuContainer.innerHTML = '';
            fallbackMenu.forEach((item, index) => {
                const li = document.createElement('li');
                if (index === 0) {
                    li.className = 'active';
                }
                
                const a = document.createElement('a');
                a.href = item.link;
                a.textContent = item.name;
                
                li.appendChild(a);
                menuContainer.appendChild(li);
            });
        }

        // Hide loading screen after showing fallback menu
        toggleLoading(false);
    }
}

// Load menu items when document is ready
document.addEventListener('DOMContentLoaded', loadMenuItems); 