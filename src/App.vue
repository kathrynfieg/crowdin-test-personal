<script setup lang="ts">
import { useTranslation } from "./useTranslation"
import { availableLanguages } from "./i18n"

const { t, locale } = useTranslation()
</script>

<template>
  <div>
    <div class="locale-switcher">
      <select v-model="locale">
        <option v-for="lang in availableLanguages" :key="lang" :value="lang">
          {{ lang }}
        </option>
      </select>
    </div>
    <h1>{{ t("greeting") }}</h1>
    <p>{{ t("welcome_text") }}</p>
    <button>{{ t("button_labels.submit_button") }}</button>
    <!-- <p>{{ t("this_shoulnt_exist") }}</p> -->
  </div>
</template>

<style scoped>
.locale-switcher {
  margin-bottom: 1rem;
}

select {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: white;
  color: #333;
  font-size: 1rem;
}
</style>