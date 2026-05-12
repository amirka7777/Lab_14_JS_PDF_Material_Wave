
import '../css/style.css';

document.addEventListener('click', (e) => {
    const target = e.target.closest('.card, button');
    if (!target) return;

    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size/2}px`;
    ripple.style.top = `${e.clientY - rect.top - size/2}px`;

    target.appendChild(ripple);
    ripple.onanimationend = () => ripple.remove();
});


const fields = document.querySelectorAll('[contenteditable="true"]');

fields.forEach(field => {
    const key = field.getAttribute('data-storage');
    
    // Загрузка
    if (localStorage.getItem(key)) {
        field.innerText = localStorage.getItem(key);
    }
    

    field.addEventListener('input', () => {
        localStorage.setItem(key, field.innerText);
    });
});


const downloadBtn = document.getElementById('download-pdf');
if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        window.print(); 
    });
}