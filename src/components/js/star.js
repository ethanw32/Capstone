// Get all the star elements
const stars = document.querySelectorAll('.fa-star');

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    const isSelected = star.classList.contains('text-yellow-500');

    // If already selected, unselect this star and all after it
    stars.forEach((s, i) => {
      if (i >= index) {
        s.classList.remove('text-yellow-500');
      }
    });

    // If not selected before, select this star and all before it
    if (!isSelected) {
      stars.forEach((s, i) => {
        if (i <= index) {
          s.classList.add('text-yellow-500');
        }
      });
    }
  });
});

// document.addEventListener('DOMContentLoaded', () => {
//   // Get all the star elements
//   const stars = document.querySelectorAll('.fa-star');

//   // Function to update the stars based on the saved rating in localStorage
//   function updateStarsFromLocalStorage() {
//     const savedRating = localStorage.getItem('rating');
//     if (savedRating) {
//       // Convert to an integer and highlight the stars
//       stars.forEach((star, index) => {
//         if (index < savedRating) {
//           star.classList.add('text-yellow-500');
//         } else {
//           star.classList.remove('text-yellow-500');
//         }
//       });
//     } else {
//       stars.forEach(star => star.classList.remove('text-yellow-500'));  // Clear stars if no rating exists
//     }
//   }

//   // Attach click event listeners to the stars
//   stars.forEach((star, index) => {
//     star.addEventListener('click', () => {
//       const isSelected = star.classList.contains('text-yellow-500');
      
//       if (isSelected) {
//         // If selected, unselect the clicked star and all stars after it
//         for (let i = index; i < stars.length; i++) {
//           stars[i].classList.remove('text-yellow-500');
//         }
//         // If no stars are selected, remove the rating from localStorage
//         if (![...stars].some(s => s.classList.contains('text-yellow-500'))) {
//           localStorage.removeItem('rating');
//         } else {
//           localStorage.setItem('rating', index);  // Store the rating (0-based index)
//         }
//       } else {
//         // If not selected, select the clicked star and all previous stars
//         for (let i = 0; i <= index; i++) {
//           stars[i].classList.add('text-yellow-500');
//         }
//         localStorage.setItem('rating', index + 1);  // Store the rating (1-based index)
//       }
//     });
//   });
//   // Update stars when the page is loaded
//   updateStarsFromLocalStorage();
// });


// document.addEventListener('DOMContentLoaded', function () {
//   // Get all the star elements
//   const stars = document.querySelectorAll('.fa-star');

//   // Function to update the stars based on the saved rating in localStorage
//   function updateStarsFromLocalStorage() {
//     const savedRating = localStorage.getItem('rating');
//     if (savedRating) {
//       stars.forEach((star, index) => {
//         if (index < savedRating) {
//           star.classList.add('text-yellow-500');
//         } else {
//           star.classList.remove('text-yellow-500');
//         }
//       });
//     } else {
//       stars.forEach(star => star.classList.remove('text-yellow-500'));
//     }
//   }

//   // Attach click event listeners to the stars
//   stars.forEach((star, index) => {
//     star.addEventListener('click', () => {
//       const isSelected = star.classList.contains('text-yellow-500');

//       if (isSelected) {
//         for (let i = index; i < stars.length; i++) {
//           stars[i].classList.remove('text-yellow-500');
//         }
//         if (![...stars].some(s => s.classList.contains('text-yellow-500'))) {
//           localStorage.removeItem('rating');
//         } else {
//           localStorage.setItem('rating', index);
//         }
//       } else {
//         for (let i = 0; i <= index; i++) {
//           stars[i].classList.add('text-yellow-500');
//         }
//         localStorage.setItem('rating', index + 1);
//       }
//     });
//   });

//   // Update stars based on localStorage when the page is loaded
//   updateStarsFromLocalStorage();
// });
