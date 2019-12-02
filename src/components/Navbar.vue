<template>
    <div class="navigation">
        <nav>
            <router-link :to="{ name: 'timer' }" title="Timer">
                <svg class="icon nav__icon">
                    <use :xlink:href="`${baseUrl}img/icons/sprite.svg#timer`"></use>
                </svg>
            </router-link>
            <router-link :to="{ name: 'about' }" title="About">
                <svg class="icon nav__icon">
                    <use :xlink:href="`${baseUrl}img/icons/sprite.svg#question-mark`"></use>
                </svg>
            </router-link>
            <router-link :to="{ name: 'settings' }" title="Settings">
                <svg class="icon nav__icon">
                    <use :xlink:href="`${baseUrl}img/icons/sprite.svg#settings`"></use>
                </svg>
            </router-link>
        </nav>
    </div>
</template>
<script>
export default {
    data() {
        return {
            baseUrl: process.env.BASE_URL
        }
    }
}
</script>
<style lang="scss">
@import "../sass/_variables";

.navigation {
    margin: 0 3rem 2rem 3rem;
    border-bottom: 1px solid rgba(255,255,255,.5);
}

nav {
    display: flex;
    justify-content: space-around;
    max-width: 40rem;
    padding: 1rem 0;
    margin: 0 auto;

    a {
        color: $color-primary;
        text-decoration: none;
        border-radius: 50%;
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-content: center;
        transition: all .3s;

        svg {
            width: 3.5rem;
            height: 3.5rem;
        }
        
        @media screen and (min-width: 768px) {
                &:hover {
                background-color: rgba(243, 243, 243, .5);

                svg {
                    fill: $color-theme-1;
                }
            }
        }
    }
}

.router-link-exact-active {
    box-shadow: 0px 3px 10px rgba(0,0,0,.1);
    background-color: #f3f3f3;

    svg {
        fill: $color-theme-1;
    }
}
</style>