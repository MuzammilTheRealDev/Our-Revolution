    const images = [
        'https://images.unsplash.com/photo-1572700432881-42c60fe8c869?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9zdGVyfGVufDB8MXwwfHx8Mg%3D%3D',
        'https://images.unsplash.com/photo-1602248003575-934425e8088d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9zdGVyfGVufDB8MXwwfHx8Mg%3D%3D',
        'https://images.unsplash.com/photo-1562448079-b5631888445f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9zdGVyfGVufDB8MXwwfHx8Mg%3D%3D',
        'https://images.unsplash.com/photo-1583407723467-9b2d22504831?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvc3RlcnxlbnwwfDF8MHx8fDI%3D',
        'https://images.unsplash.com/photo-1617355405361-29f0f0a3d737?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvc3RlcnxlbnwwfDF8MHx8fDI%3D',
        'https://images.unsplash.com/photo-1591788788660-5a345f363d7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBvc3RlcnxlbnwwfDF8MHx8fDI%3D',
        'https://images.unsplash.com/photo-1570745859748-6ba2014423eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBvc3RlcnxlbnwwfDF8MHx8fDI%3D',
        'https://images.unsplash.com/photo-1562755918-d4fa85ac239f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHBvc3RlcnxlbnwwfDF8MHx8fDI%3D',
        'https://images.unsplash.com/photo-1543599538-a6c4f6cc5c05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHBvc3RlcnxlbnwwfDF8MHx8fDI%3D',
        'https://images.unsplash.com/photo-1619164816991-22d393238d8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9vayUyMHBvc3RlcnxlbnwwfDF8MHx8fDI%3D',
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        // Add more image URLs here
    ];

    const throttleFunction = (func, delay) => {
        let prev = 0;
        return (...args) => {
            let now = new Date().getTime();
            if (now - prev > delay) {
                prev = now;
                return func(...args);
            }
        }
    }

    document.querySelector('.center').addEventListener("mousemove",
        throttleFunction((dets) => {
            let div = document.createElement('div');
            div.classList.add('imagediv');
            div.style.left = dets.clientX + 'px';
            div.style.top = dets.clientY + 'px';

            let img = document.createElement('img');
            const randomImage = images[Math.floor(Math.random() * images.length)];
            img.setAttribute('src', randomImage);
            div.appendChild(img);

            document.body.appendChild(div);

            gsap.to(img, {
                y: "0",
                ease: Power1,
                duration: .6
            })

            gsap.to(img, {
                y: "0",
                rotation: Math.random() > 0.5 ? 20 : -20,
                ease: Power1,
                duration: .6
            });

            gsap.to(img, {
                y: "100%",
                ease: Power2,
                delay: .5
            });

            setTimeout(() => {
                div.remove();
            }, 1000);
        }, 200));
