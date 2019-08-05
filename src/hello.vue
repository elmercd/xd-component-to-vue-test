<template>
    <form style="width: 300px;">
        <h1>Component for test clipboard on vue</h1>
        <p>
            <input uxp-quiet="true" type="text" placeholder="Your name" v-model="message" />
        </p>
        <footer>
            <button uxp-variant="cta" @click="copy">Copy input</button>
            <button type="submit" uxp-variant="primary" @click="close">Done</button>
        </footer>
    </form>
</template>

<script>
    const application = require('application');
    const clipboard = require('clipboard');

    module.exports = {
        props: {
            dialog: {
                type: Object
            }
        },
        methods: {
            copy() {
                application.editDocument(() => clipboard.copyText(this.message));
            },
            close() {
                this.dialog.close();
            }
        },
        data() {
            return {
                reactive: true,
                message: '',
                count: 0
            }
        }
    }
</script>
