"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const profiles_1 = __importDefault(require("./data/profiles"));
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Hi!');
});
app.get('/api/profiles', (req, res) => {
    res.json(profiles_1.default);
});
app.get('/api/profiles/:id', (req, res) => {
    const profile = profiles_1.default.find((p) => p.id === req.params.id);
    res.json(profile);
});
const PORT = process.env.PORT;
const ENV = process.env.ENV;
app.listen(PORT);
//# sourceMappingURL=server.js.map