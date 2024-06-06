document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.question-title-faqzao');
    const toggleButton = document.querySelector('.toggle-faqzao');
    const contactSection = document.querySelector('.contact-faqzao');
    const supportSection = document.querySelector('.support-faqzao');

    questions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });

    toggleButton.addEventListener('click', function() {
        if (contactSection.style.display === 'flex') {
            contactSection.style.display = 'none';
            supportSection.style.width = '80%';
        } else {
            contactSection.style.display = 'flex';
            supportSection.style.width = '60%';
        }
    });
});
