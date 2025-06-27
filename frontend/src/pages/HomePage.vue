<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> MiList </q-toolbar-title>

        <q-btn color="white" label="Login" class="text-blue-10"/>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <HeroSection></HeroSection>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue';
</script>

<style lang="scss" scoped></style>
