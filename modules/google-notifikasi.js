(function(__meta__) {
  "use strict";

  (function() {
      'use strict';

      // Membuat elemen utama
      const floatingButton = document.createElement('div');
      floatingButton.innerHTML = 'Klik Saya!';

      // Styling elemen
      Object.assign(floatingButton.style, {
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: '#4285f4',
          color: 'white',
          padding: '12px 24px',
          borderRadius: '8px',
          cursor: 'move',
          zIndex: '9999',
          fontFamily: 'Arial, sans-serif',
          fontSize: '16px',
          fontWeight: 'bold',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          userSelect: 'none',
          transition: 'background-color 0.3s'
      });

      // Menambahkan elemen ke body
      document.body.appendChild(floatingButton);

      // Fungsi untuk menampilkan notifikasi
      function showNotification() {
          const notification = document.createElement('div');
          notification.textContent = '✨ Oke semua baik-baik saja ✨';

          Object.assign(notification.style, {
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#34a853',
              color: 'white',
              padding: '20px 40px',
              borderRadius: '12px',
              zIndex: '10000',
              fontFamily: 'Arial, sans-serif',
              fontSize: '20px',
              fontWeight: 'bold',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              animation: 'fadeInOut 2s ease-in-out'
          });

          // Menambahkan keyframes untuk animasi
          const style = document.createElement('style');
          style.textContent = `
              @keyframes fadeInOut {
                  0% { opacity: 0; transform: translate(-50%, -30%); }
                  15% { opacity: 1; transform: translate(-50%, -50%); }
                  85% { opacity: 1; transform: translate(-50%, -50%); }
                  100% { opacity: 0; transform: translate(-50%, -70%); }
              }
          `;
          document.head.appendChild(style);

          document.body.appendChild(notification);

          // Hapus notifikasi setelah 2 detik
          setTimeout(() => {
              notification.remove();
              style.remove();
          }, 2000);
      }

      // Event listener untuk klik
      floatingButton.addEventListener('click', showNotification);

      // Fungsi untuk drag and drop
      let isDragging = false;
      let currentX;
      let currentY;
      let initialX;
      let initialY;
      let xOffset = 0;
      let yOffset = 0;

      floatingButton.addEventListener('mousedown', dragStart);
      floatingButton.addEventListener('mouseup', dragEnd);
      document.addEventListener('mousemove', drag);

      function dragStart(e) {
          initialX = e.clientX - xOffset;
          initialY = e.clientY - yOffset;

          if (e.target === floatingButton) {
              isDragging = true;
              floatingButton.style.cursor = 'grabbing';
          }
      }

      function dragEnd(e) {
          initialX = currentX;
          initialY = currentY;
          isDragging = false;
          floatingButton.style.cursor = 'move';
      }

      function drag(e) {
          if (isDragging) {
              e.preventDefault();

              currentX = e.clientX - initialX;
              currentY = e.clientY - initialY;

              xOffset = currentX;
              yOffset = currentY;

              setTranslate(currentX, currentY, floatingButton);
          }
      }

      function setTranslate(xPos, yPos, el) {
          el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
      }

      // Hover effect
      floatingButton.addEventListener('mouseenter', () => {
          floatingButton.style.backgroundColor = '#3367d6';
      });

      floatingButton.addEventListener('mouseleave', () => {
          floatingButton.style.backgroundColor = '#4285f4';
      });

  })();

})(__meta__);