<template>
    <div class="vab-microphone">
        <button @mousedown="startRecording" @mouseup="stopRecording" @touchstart="startRecording" @touchend="stopRecording">
            <i class="fa fa-microphone" aria-hidden="true"></i>
        </button>
    </div>
</template>

<script lang="ts" src="./Microphone.ts"></script>
