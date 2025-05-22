<template>
  <div class="how-it-works">
    <Header :class="headerHeaderClassName" text="How it works" />
    <img class="steps" alt="Steps" :src="steps" />

    <div class="allergies">
      <p class="allergies-or-travel">
        <span class="text-wrapper">Allergies or travel plans? </span>
        <span class="span">We&apos;re flexible, cancel anytime</span>
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Header from "./Header.vue";

export default defineComponent({
  name: "HowItWorks",
  components: {
    Header
  },
  props: {
    headerHeaderClassName: {
      type: String,
      default: ""
    },
    steps: {
      type: String,
      default: "steps.png"
    }
  }
});
</script>

<style>
.how-it-works {
  align-items: flex-start;
  background-color: var(--variable-collection-colors-background-panel);
  border-radius: var(--variable-collection-spacing-pannel-radius);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0px 24px;
  position: relative;
  width: 868px;
}

.how-it-works .steps {
  height: 169.5px;
  object-fit: cover;
  position: relative;
  width: 700px;
}

.how-it-works .allergies {
  align-items: center;
  align-self: stretch;
  border-color: var(--variable-collection-colors-foreground-horizontal-rule);
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex: 0 0 auto;
  gap: 16px;
  padding: 12px 24px;
  position: relative;
  width: 100%;
}

.how-it-works .allergies-or-travel {
  color: var(--variable-collection-colors-foreground-base);
  font-family: var(--body-small-font-family);
  font-size: var(--body-small-font-size);
  font-style: var(--body-small-font-style);
  font-weight: var(--body-small-font-weight);
  letter-spacing: var(--body-small-letter-spacing);
  line-height: var(--body-small-line-height);
  margin-top: -1.00px;
  position: relative;
  text-align: right;
  white-space: nowrap;
  width: fit-content;
}

.how-it-works .text-wrapper {
  color: #141414;
  font-family: var(--body-small-font-family);
  font-size: var(--body-small-font-size);
  font-style: var(--body-small-font-style);
  font-weight: var(--body-small-font-weight);
  letter-spacing: var(--body-small-letter-spacing);
  line-height: var(--body-small-line-height);
}

.how-it-works .span {
  font-family: var(--body-small-font-family);
  font-size: var(--body-small-font-size);
  font-style: var(--body-small-font-style);
  font-weight: var(--body-small-font-weight);
  letter-spacing: var(--body-small-letter-spacing);
  line-height: var(--body-small-line-height);
  text-decoration: underline;
}
</style>