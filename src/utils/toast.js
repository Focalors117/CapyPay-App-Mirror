// src/utils/toast.js
export function showToast(title, message, type = 'success') {
    const event = new CustomEvent('show-toast', {
        detail: { title, message, type }
    });
    window.dispatchEvent(event);
}
