import React, { useEffect } from 'react';

const MouseMove = () => {
    const images = document.getElementsByClassName("image");
    let globalIndex = 0;
    let last = { x: 0, y: 0 };

    const activate = (image, x, y) => {
        image.style.left = `${x}px`;
        image.style.top = `${y}px`;
        image.style.zIndex = globalIndex;
        image.dataset.status = "active";
        last = { x, y };
    };

    const distanceFromLast = (x, y) => {
        return Math.hypot(x - last.x, y - last.y);
    };

    const handleOnMove = (e) => {
        if (distanceFromLast(e.clientX, e.clientY) > window.innerWidth / 20) {
            const lead = images[globalIndex % images.length];
            const tail = images[(globalIndex - 3) % images.length];

            activate(lead, e.clientX, e.clientY);

            if (tail) tail.dataset.status = "inactive";

            globalIndex++;
        }
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleOnMove);

        return () => {
            window.removeEventListener("mousemove", handleOnMove);
        };
    }, []);

    const imageElements = [];

    for (let i = 1; i < 5; i++) {
      imageElements.push(
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
          key={i}
          className="image"
          data-index={i}
          data-status="inactive"
          src={`/thumbnail/pj_thumbnail0${i+1}.png`}
        />
      );
    }

    return (
        <>
            {imageElements}
        </>
    );
};

export default MouseMove;
