"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cadastroController_1 = __importDefault(require("../controllers/cadastroController"));
class CadastroRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', cadastroController_1.default.list);
        this.router.get('/:id', cadastroController_1.default.getOne);
        this.router.get('/search/:search', cadastroController_1.default.search);
        this.router.post('/', cadastroController_1.default.create);
        this.router.delete('/:id', cadastroController_1.default.delete);
        this.router.put('/:id', cadastroController_1.default.update);
    }
}
const cadastroRoutes = new CadastroRoutes();
exports.default = cadastroRoutes.router;
