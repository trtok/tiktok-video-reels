document.addEventListener('DOMContentLoaded', function() {
    // کارلێکی لایک
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const icon = this.querySelector('i');
            const countSpan = this.querySelector('.count');
            let count = parseInt(countSpan.textContent.replace('K', '')) * 1000 || parseInt(countSpan.textContent);
            
            if (this.classList.contains('active')) {
                icon.classList.replace('fas', 'far');
                count--;
                this.classList.remove('active');
            } else {
                icon.classList.replace('far', 'fas');
                count++;
                this.classList.add('active');
            }
            
            countSpan.textContent = count >= 1000 ? (count/1000).toFixed(1) + 'K' : count;
        });
    });

    // کارلێکی میوزیک
    document.querySelectorAll('.music-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const icon = this.querySelector('.music-icon');
            icon.style.animationPlayState = 
                icon.style.animationPlayState === 'paused' ? 'running' : 'paused';
        });
    });

    // کارلێکی گەڕان
    const searchBtn = document.querySelector('.search-btn');
    const searchOverlay = document.querySelector('.search-overlay');
    const backBtn = document.querySelector('.back-btn');
    
    searchBtn.addEventListener('click', () => searchOverlay.classList.add('active'));
    backBtn.addEventListener('click', () => searchOverlay.classList.remove('active'));
});