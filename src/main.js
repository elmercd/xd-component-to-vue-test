const styles = require("./styles.css");
const Vue = require("vue").default;
const hello = require("./hello.vue").default
const EventBus = require("./event-bus.js").default;
const clipboard = require('clipboard');
const { Text, Color } = require("scenegraph");

let dialog;
function getDialog() {
    if (dialog == null) {
        document.body.innerHTML = `<dialog><div id="container"></div></dialog>`
        dialog = document.querySelector("dialog");

        var app4 = new Vue({
            el: "#container",
            components: { hello },
            mounted() {
                EventBus.$on('copy', (message) => {
                    clipboard.copyText(message);
                    console.log(message);
                });
            },
            render(h) {
                return h(hello, { props: { dialog } })
            }
        })
    }
    return dialog
}

module.exports = {
    commands: {
        menuCommand: async function () {
            await getDialog().showModal();
        }
    }
};