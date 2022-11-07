"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class CardapioController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield database_1.default.query('SELECT * FROM registro');
            res.json(users);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield database_1.default.query('SELECT * FROM registro WHERE id = ?', [id]);
            if (user.length > 0) {
                return res.json(user[0]);
            }
            res.status(404).json({ text: "The user doesn't exist" });
        });
    }
    search(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { search } = req.params;
            const likeSearch = '%' + search + '%';
            const user = yield database_1.default.query('SELECT * FROM registro WHERE cpf LIKE ? OR rg LIKE ? OR nome LIKE ? OR sexo LIKE ?', [likeSearch, likeSearch, likeSearch, likeSearch]);
            if (user.length > 0) {
                return res.json(user);
            }
            res.status(404).json({ text: "The user doesn't exist" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield database_1.default.query('SELECT * FROM registro WHERE cpf = ? OR rg = ?', [req.body.cpf, req.body.rg]);
            if (user.length > 0) {
                res.status(404).json({ text: 'CPF ou RG já registrado. Impossível realizar novo registro.' });
                return;
            }
            else {
                yield database_1.default.query('INSERT INTO registro SET ?', [req.body]);
                res.json({ text: 'User Saved' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM registro WHERE id = ?', [id]);
            res.json({ message: 'User was deleted' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield database_1.default.query('SELECT * FROM registro WHERE cpf = ? OR rg = ?', [req.body.cpf, req.body.rg]);
            if (user.length > 0) {
                res.status(404).json({ text: 'CPF ou RG já registrados. Impossível realizar novo registro' });
            }
            else {
                yield database_1.default.query('UPDATE registro set ? WHERE id = ?', [req.body, id]);
                res.json({ message: 'User Updated' });
            }
        });
    }
}
const cardapioController = new CardapioController();
exports.default = cardapioController;
