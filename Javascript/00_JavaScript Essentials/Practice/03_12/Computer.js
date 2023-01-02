class Computer {
    constructor(
        name,
        server,
        cpu,
        storage,
        os,
        keyboard,
        mouse,
        desktop,
        status
    ){
        this.name = name;
        this.server = server;
        this.cpu = cpu;
        this.storage = storage;
        this.os = os;
        this.keyboard = keyboard;
        this.mouse = mouse;
        this.desktop = desktop;
        this.status = status;
    }

    startCPU(pressButton){
        this.status = pressButton;
    }

    changeOS(newOS){
        this.os = newOS;
    }

    changeServer(nowServer){
        this.server = nowServer;
    }
};

export default Computer;