<template>
  <div>
    <q-parallax src="../../public/bleach.avif" :speed="0.5" :height="350">
      <q-input rounded outlined  placeholder="Suche" bg-color="white">
        <template #append>
          <q-icon name="search" />
        </template>
      </q-input>
    </q-parallax>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
