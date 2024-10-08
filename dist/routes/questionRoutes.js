"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const questionController_1 = require("../controllers/questionController");
const router = (0, express_1.Router)();
router.post('/', questionController_1.createQuestion);
router.get('/', questionController_1.getQuestions);
router.put('/:id', questionController_1.updateQuestion);
router.delete('/:id', questionController_1.deleteQuestion);
exports.default = router;
