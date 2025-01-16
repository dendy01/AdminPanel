export const handleActive = (event: MouseEvent, btn: HTMLElement) => {
    if (btn) {
        const rect = btn.getBoundingClientRect();
        const size: number = Math.max(rect.width, rect.height);
        const x: number = event.clientX - rect.left - size / 2;
        const y: number = event.clientY - rect.top - size / 2;
        const span = document.createElement('span');
        span.className = 'wave';
        span.style.cssText = `width:${ size }px;height:${ size }px;top:${ y }px;left:${ x }px`;

        btn.append(span);

        setTimeout(() => {
            span.remove();
        }, 200);
    }
};