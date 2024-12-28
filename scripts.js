document.addEventListener('DOMContentLoaded', () => {
    const scrollTexts = document.querySelectorAll('.section-3 .scroll-text');
    const section4Images = document.querySelectorAll('.section-4 .image-row img');

    const checkVisibility = () => {
        scrollTexts.forEach((text, index) => {
            const rect = text.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                setTimeout(() => {
                    text.classList.add('show');
                }, index * 300);
            }
        });

        const section4Rect = document.querySelector('.section-4').getBoundingClientRect();
        if (section4Rect.top < window.innerHeight) {
            section4Images.forEach((img, index) => {
                setTimeout(() => {
                    img.classList.add('show');
                }, index * 300);
            });
        }
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check on load
});


document.addEventListener('DOMContentLoaded', function() {
    var copyButton = document.getElementById('copy-button');
    var copyTextElement = document.getElementById('copy-text');

    if (copyTextElement) {
        var copyText = copyTextElement.textContent;

        copyButton.addEventListener('click', function() {
            var textArea = document.createElement('textarea');
            textArea.value = copyText;
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                alert('Text copied to clipboard!');
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
            document.body.removeChild(textArea);
        });
    } else {
        console.error('Text element not found');
    }

    document.getElementById('mobile-menu').addEventListener('click', function() {
        var navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    });
});