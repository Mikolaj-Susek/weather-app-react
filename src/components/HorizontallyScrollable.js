import {useRef} from 'react'

function HorizontallyScrollable({children, className = ''}) {

    // ref to to div element in DOM
    const scrollRef = useRef();


    const handleMouseDown = (evt) => {
        // get x coordiante of mouse
        const oldX = evt.pageX;
        const scrollLeft = scrollRef.current.scrollLeft;

        const handleMouseMove = (evt) => {
            // calculate offset between mouse positions and scroll element
            const newX = evt.pageX;
            const offset = newX - oldX;

            scrollRef.current.scrollLeft = scrollLeft - offset;
        };

        // remove after scroll
        const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }

        // start moving when mousemove and mousedown
        window.addEventListener('mousemove', handleMouseMove);
        // stop moving when mouseup
        window.addEventListener('mouseup', handleMouseUp);
    }

    return (
        <div
            className={className}
            ref={scrollRef}
            onMouseDown={handleMouseDown}
        >
            {children}
        </div>
    );
}

export default HorizontallyScrollable;