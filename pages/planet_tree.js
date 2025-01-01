let currentPage = 1; 

    function nextPage() { 
      document.getElementById(`page${currentPage}`).classList.remove("active");

      
      currentPage++;

      // عرض الصفحة الجديدة
      const nextPage = document.getElementById(`page${currentPage}`);
      if (nextPage) {
        nextPage.classList.add("active");
      }
    }

    function restart() {
      // إخفاء الصفحة الحالية
      document.getElementById(`page${currentPage}`).classList.remove("active");

      // العودة إلى الصفحة الأولى
      currentPage = 1;
      document.getElementById(`page${currentPage}`).classList.add("active");
    }