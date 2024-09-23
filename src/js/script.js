// Add your javascript here
document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion');
    const multipleCheckbox = document.getElementById('multiselect');
  
    accordions.forEach((accordion, index) => {
        const description = accordion.querySelector('.description');
        const expandIcon = accordion.querySelector('.expand-icon');
        const collapseIcon = accordion.querySelector('.collapse-icon');
  
       
        if (index === 0) {
            description.style.display = 'block';
            expandIcon.style.display = 'none';
            collapseIcon.style.display = 'block';
        } else {
            description.style.display = 'none';
            expandIcon.style.display = 'block';
            collapseIcon.style.display = 'none';
        }
    });
  
    function collapseAll() {
        accordions.forEach(accordion => {
            const content = accordion.querySelector('.description');
            const expandIcon = accordion.querySelector('.expand-icon');
            const collapseIcon = accordion.querySelector('.collapse-icon');
  
            content.style.display = 'none';
            expandIcon.style.display = 'block';
            collapseIcon.style.display = 'none'; 
        });
    }
  
    function toggleAccordion(accordion) {
        const content = accordion.querySelector('.description');
        const expandIcon = accordion.querySelector('.expand-icon');
        const collapseIcon = accordion.querySelector('.collapse-icon');
  
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            expandIcon.style.display = 'none'; 
            collapseIcon.style.display = 'block'; 
        } else {
            content.style.display = 'none';
            expandIcon.style.display = 'block'; 
            collapseIcon.style.display = 'none';
        }
    }
  
    accordions.forEach(accordion => {
        const titleSection = accordion.querySelector('.title-section');
  
        titleSection.addEventListener('click', function() {
            if (!multipleCheckbox.checked) {
                collapseAll(); 
            }
            toggleAccordion(accordion); 
        });
    });
  });
  
  