<template>
    <div id="app" class="wrapper">
        <loading :show-loading="showLoading"/>
        <main class="main-content container text-center">
            <h2 class="vab-litle">氣象局氣象語音答詢系統</h2>
            <microphone/>
            <router-view/>
        </main>
    </div>
</template>

<script lang="ts" src="./App.ts"></script>
