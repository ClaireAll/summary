<template>
    <div>
        <div class="scroll-container c1">
            <div class="scroll-element js-scroll fade-in"></div>
            <div class="scroll-caption">淡入</div>
        </div>
        <div class="scroll-container c2">
            <div class="scroll-element js-scroll fade-in-bottom"></div>
            <div class="scroll-caption">切入顶部</div>
        </div>
        <div class="scroll-container c3">
            <div class="scroll-element js-scroll slide-left"></div>
            <div class="scroll-caption">左侧切入</div>
        </div>
        <div class="scroll-container c4">
            <div class="scroll-element js-scroll slide-right"></div>
            <div class="scroll-caption">右侧切入</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ScrollAnimation',
    mounted() {
        // const scrollElement = document.querySelectorAll('.js-scroll');
        const bodyElement = document.querySelector('.el-main');
        // 使元素淡出不可见
        // scrollElement.forEach((el) => {
        //     el.style.opacity = 0;
        // });

        bodyElement.addEventListener('scroll', () => {
            this.handleScrollAnimation();
        });
    },

    methods: {
        // 判断元素是否在视窗内
        elementInView: (el, percentageScroll = 100) => {
            const elementTop = el.getBoundingClientRect().top;

            return (
                elementTop > 0 &&
                elementTop <=
                    (window.innerHeight ||
                        document.documentElement.clientHeight) *
                        (percentageScroll / 100)
            );
        },

        displayScrollElement: (ele) => {
            ele.classList.add('scrolled');
        },

        handleScrollAnimation: function () {
            const self = this;
            const scrollElement = document.querySelectorAll('.js-scroll');
            scrollElement.forEach((el) => {
                if (self.elementInView(el, 100)) {
                    self.displayScrollElement(el);
                } else {
                    self.hideScrollElement(el);
                }
            });
        },

        hideScrollElement: (ele) => {
            ele.classList.remove('scrolled');
        },
    },
};
</script>
<style lang="less" scoped>
.scroll-container {
    overflow: hidden;

    &.c1,
    &.c2,
    &.c3,
    &.c4 {
        margin: 20px;
        height: 400px;
    }
    &.c1 {
        background-color: rgb(148, 189, 176);
    }
    &.c2 {
        background-color: rgb(226, 172, 197);
    }
    &.c3 {
        background-color: rgb(168, 159, 204);
    }
    &.c4 {
        background-color: rgb(255, 224, 196);
    }

    .scroll-element {
        width: 300px;
        height: 300px;
        background-color: rgb(196, 196, 196);
    }
}

.scroll-element {
    position: absolute;
    top: 50px;
}
.scroll-caption {
    text-align: center;
    line-height: 400px;
}

.c1,
.c3 {
    .scroll-element {
        left: 50px;
    }
}

.c2,
.c4 {
    .scroll-element {
        right: 50px;
    }
}

// 淡入
.js-scroll {
    opacity: 0;
    transition: opacity 500ms;
}
.js-scroll.scrolled {
    opacity: 1;
}

.scrolled.fade-in {
    animation: fade-in 1s ease-in-out both;
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.scrolled.fade-in-bottom {
  animation: fade-in-bottom 1s ease-in-out both;
}
@keyframes fade-in-bottom {
    0% {
        transform: translateY(300px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

.scrolled.slide-left {
    animation: slide-in-left 1s ease-in-out both;
}

@keyframes slide-in-left {
    0% {
        transform: translateX(-300px);
        opacity: 0;
    }
    100% {
        transform: translate(0);
        opacity: 1;
    }
}

.scrolled.slide-right {
    animation: slide-in-right 1s ease-in-out both;
}

@keyframes slide-in-right {
    0% {
        transform: translateX(300px);
        opacity: 0;
    }
    100% {
        transform: translate(0);
        opacity: 1;
    }
}

</style>
