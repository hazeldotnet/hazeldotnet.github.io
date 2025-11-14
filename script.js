function toggleExpand(el) {
    const content = el.querySelector('.expandable-content');
    const arrowIndex = el.innerText.indexOf('⤵');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'inline';
        el.innerHTML = el.innerHTML.replace('...⤵', '   ⤴');
    } else {
        content.style.display = 'none';
        el.innerHTML = el.innerHTML.replace('   ⤴', '...⤵');
    }
}