
import { onMounted } from 'vue';

export function useHopAnimation() {
  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('hop-animation');
                observer.unobserve(entry.target); 
            }, index * 250);
        }
      });
    }, {
      threshold: 0.8, 
    });

    const hopItems = document.querySelectorAll('.hop-item');
    hopItems.forEach((item) => {
      observer.observe(item);
    });
  });
}
