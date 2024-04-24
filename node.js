//--------------------------------- Node ---------------------------------
export class Node {
    constructor(node, messageList, responseList) {
        this.messageList = messageList;
        this.responseList = responseList;
        this.goToId = node.goTo;
        this.isInput = node.isInput ? node.isInput : false;
    }

    isGoodInputText(text) {
        if (text.toUpperCase() === this.messageList[0].toUpperCase()) return 1;
        return 0;
    }

    getIsInput() {
        return this.isInput;
    }

    getGoToId() {
        return this.goToId;
    }

    getMessage() {
        return this.messageList[0];
    }

    getResponselist() {
        return this.responseList;
    }
}