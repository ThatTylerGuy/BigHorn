document.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                return;
            }
            entry.target.classList.remove('in-view');
        });
    });

    const allAminatedElements = document.querySelectorAll('.animate');

    allAminatedElements.forEach((element) => observer.observe(element));
});



  