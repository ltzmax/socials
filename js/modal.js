const modal = document.getElementById('nsfw-modal');
const cancelBtn = document.getElementById('nsfw-cancel');
const proceedBtn = document.getElementById('nsfw-proceed');
let pendingUrl = '';

document.querySelectorAll('a.nsfw').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        pendingUrl = link.dataset.href || link.href;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    });
});

cancelBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    pendingUrl = '';
});

proceedBtn.addEventListener('click', () => {
    if (pendingUrl) window.open(pendingUrl, '_blank');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    pendingUrl = '';
});

modal.addEventListener('click', e => {
    if (e.target === modal) cancelBtn.click();
});
