const anniversaryDate = new Date(2024, 12, 24); // June 15, 2023
        
        // Calculate days together
        function calculateDaysTogether() {
            const now = new Date();
            const diffTime = Math.abs(now - anniversaryDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays;
        }

        // Photo data
        const photos = [
            { 
                url: "photos/first-date.jpeg", 
                description: 'Our very first date' 
            },
            { 
                url: 'photos/first-trip.jpeg', 
                description: 'First Trip memories' 
            },
            { 
                url: 'photos/birthday-celebration.jpeg', 
                description: 'Birthday celebration' 
            },
            { 
                url: 'photos/PhotoBooth.jpeg', 
                description: 'Photobooth' 
            },
            { 
                url: 'photos/park.png', 
                description: 'A moment in the park' 
            },
            { 
                url: 'photos/puncak.jpeg', 
                description: 'A day in Puncak' 
            },
            { 
                url: 'photos/emyu.jpeg', 
                description: 'KING MANCHESTER UNITED JERSEY DATE' 
            },
            { 
                url: 'photos/campus.jpeg', 
                description: 'Where we meet' 
            },
            { 
                url: '/photos/gacoan.jpeg', 
                description: 'Gacoan date' 
            },
            { 
                url: 'photos/after-class.jpeg', 
                description: 'After class date' 
            },
            { 
                url: 'photos/coffe.jpeg', 
                description: 'Coffe date' 
            },
            { 
                url: 'https://placehold.co/600x400/ffd1dc/333333?text=New+Year', 
                date: 'January 1, 2025', 
                description: 'New Year celebration' 
            }
        ];

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            // Update days count
            document.getElementById('daysCount').textContent = calculateDaysTogether();
            
            // Generate photo gallery
            const gallery = document.getElementById('photoGallery');
            photos.forEach(photo => {
                const photoCard = document.createElement('div');
                photoCard.className = 'photo-card';
                photoCard.innerHTML = `
                    <img src="${photo.url}" alt="${photo.description}">
                    <div class="photo-overlay">
                        <div class="photo-description">${photo.description}</div>
                    </div>
                `;
                gallery.appendChild(photoCard);
            });
        });