"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let GoogleService = class GoogleService {
    checkToken(id_token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield axios_1.default({
                    method: 'POST',
                    url: 'https://oauth2.googleapis.com/tokeninfo?id_token=' + id_token,
                });
                if (res && res.data) {
                    return res.data;
                }
                else {
                    return Promise.reject({ status: 400, message: 'Success but no data' });
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
};
GoogleService = __decorate([
    common_1.Injectable()
], GoogleService);
exports.GoogleService = GoogleService;
//# sourceMappingURL=google.service.js.map