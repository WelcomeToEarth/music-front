<template>
<ul
  :class="{
    'mb-navs': true,
    unfold: showNav,
  }"
  ref="navs">
  <li
    v-for="(o, i) of list"
    ref="nav-li"
    :class="{ checked: i === checked }"
    @click="clickNav(i)"
    :key="i">{{o.t}}</li>
</ul>
</template>

<script>
import throttle from '@/utils/throttle';

export default {
  name: 'mb-navs',
  props: {
    elClassName: String,
    list: Array,
  },
  data: () => ({
    checked: 0,
    listeningScroll: true,
    showNav: false,
    els: [],
    scrollHandler: null,
  }),
  mounted () {
    this.$nextTick(this.queryEls);
    this.listenScroll();
  },
  destroyed () { this.removeScroll(); },
  methods: {
    queryEls () { this.els = document.querySelectorAll(`.${this.elClassName}`); },
    listenScroll () {
      this.scrollHandler = throttle(() => {
        if (!this.listeningScroll) return;
        this.toggleNav();
        this.updateCheck();
        this.scrollNav();
      }, 300);
      window.addEventListener('scroll', this.scrollHandler, false);
    },
    removeScroll () { window.removeEventListener('scroll', this.scrollHandler); },
    toggleNav () {
      const top = this.els[0].offsetTop;
      this.showNav = window.scrollY > top - 200;
    },
    updateCheck () {
      const tops = [].map.call(this.els, el => el.offsetTop || 0);
      let index = 0;
      for (let i = 0; i < tops.length; i++) {
        index = i;
        const top = tops[i];
        if (top - 50 > window.scrollY) break;
      }
      index = index - 1 < 0 ? 0 : index - 1;
      if (document.body.clientHeight - window.scrollY - window.screen.availHeight < 5) {
        index = tops.length - 1;
      }
      this.checked = index;
    },
    scrollNav () {
      const li = this.$refs['nav-li'][this.checked];
      li.scrollIntoView({ behavior: 'smooth' });
    },
    clickNav (i) {
      this.checked = i;
      this.listeningScroll = false;
      this.els[i].scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
      setTimeout(() => this.listeningScroll = true, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
.mb-navs {
  box-sizing: content-box;
  position: fixed; left: 0; top: -42px; z-index: 2001;
  width: 100vw; height: 30px; padding: 6px 0;
  overflow-x: scroll; overflow-y: hidden;
  white-space: nowrap;
  background: linear-gradient(323deg, rgb(255, 136, 57) 0%,rgb(230, 47, 0) 100%);
  transition: 0.2s top;
  &.unfold { top: 0; }
  > li {
    display: inline-block;
    height: 100%; padding: 0 1em;
    border-radius: 15px;
    color: white; line-height: 30px;
    &.checked {
      font-weight: bold;
      background: rgba(0, 0, 0, 0.4);
    }
    &:first-child { margin-left: 15px; }
    &:last-child { margin-right: 15px; }
  }
}
</style>
