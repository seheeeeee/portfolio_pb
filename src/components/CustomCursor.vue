<template>
  <div id="cursor" class="difference">
      <div class="cursor__circle"></div>
  </div>
</template>

<script>
export default {
    methods: {
        cursorAni(){
            const cursor = document.querySelector('#cursor');
            const cursorCircle = cursor.querySelector('.cursor__circle');

            const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
            const pos = { x: 0, y: 0 }; // cursor's coordinates
            const speed = 0.2; // between 0 and 1

            const updateCoordinates = e => {
                mouse.x = e.clientX;
                mouse.y = e.clientY;
            }

            window.addEventListener('mousemove', updateCoordinates);


            function getAngle(diffX, diffY) {
                return Math.atan2(diffY, diffX) * 180 / Math.PI;
            }

            function getSqueeze(diffX, diffY) {
                const distance = Math.sqrt(
                    Math.pow(diffX, 2) + Math.pow(diffY, 2)
                );
                const maxSqueeze = 0.15;
                const accelerator = 1500;
                return Math.min(distance / accelerator, maxSqueeze);
            }


            const updateCursor = () => {
                const diffX = Math.round(mouse.x - pos.x);
                const diffY = Math.round(mouse.y - pos.y);
            
                pos.x += diffX * speed;
                pos.y += diffY * speed;
            
                const angle = getAngle(diffX, diffY);
                const squeeze = getSqueeze(diffX, diffY);
            
                const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
                const rotate = 'rotate(' + angle +'deg)';
                const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

                cursor.style.transform = translate;
                cursorCircle.style.transform = rotate + scale;
            };

            function loop() {
                updateCursor();
                requestAnimationFrame(loop);
            }

            requestAnimationFrame(loop);



            const cursorModifiers = document.querySelectorAll('[cursor-class]');

            cursorModifiers.forEach(curosrModifier => {
                curosrModifier.addEventListener('mouseenter', function() {
                    const attribute = this.getAttribute('cursor-class');
                    cursor.classList.add(attribute);
                });
            
                curosrModifier.addEventListener('mouseleave', function() {
                    const attribute = this.getAttribute('cursor-class');
                    cursor.classList.remove(attribute);
                });
            });
        },
    },
    mounted(){
        this.cursorAni();
    },
}
</script>

<style scoped>
#cursor {
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  pointer-events: none;
  will-change: transform;
}
#cursor.difference {
  mix-blend-mode: normal;
}
#cursor.difference .cursor__circle {
  border: solid 1px rgba(243, 58, 58, 0.64);
}
#cursor.difference.overlay .cursor__circle {
  background-color: rgba(227, 222, 193, 0.12);
}
#cursor .cursor__circle {
  width: 40px;
  height: 40px;
  margin-top: -50%;
  margin-left: -50%;
  border-radius: 50%;
  border: solid 1px rgba(243, 58, 58, 0.64);
  transition: opacity 0.3s cubic-bezier(0.25, 1, 0.5, 1), background-color 0.3s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s cubic-bezier(0.25, 1, 0.5, 1), width 0.3s cubic-bezier(0.25, 1, 0.5, 1), height 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}
#cursor.subtle .cursor__circle {
  border-color: rgba(227, 222, 193, 0.16);
}
#cursor.arrow .cursor__circle {
  width: 128px;
  height: 128px;
  background-color: #073099;
  border-color: blue;
}
#cursor.arrow::after {
  content: "";
  position: absolute;
  left: -50%;
  top: -50%;
  width: 100%;
  height: 100%;
  background-image: url("https://svgshare.com/i/MzQ.svg");
  background-repeat: no-repeat;
  background-position: center;
}
#cursor.overlay .cursor__circle {
  background-color: rgba(28, 33, 62, 0.16);
  border-color: transparent;
  width: 48px;
  height: 48px;
}
</style>