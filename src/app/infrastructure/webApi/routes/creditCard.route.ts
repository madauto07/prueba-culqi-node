import { Router } from "express";
import { creditCardController } from "../controllers/creditCard.controller";
import { creditCardValidator } from "../middlewares/creditCardValidator.middleware";
import { getCardType } from "../middlewares/getCardType.middleware";
import { pkValidator } from "../middlewares/pkValidator.middleware";
export const router = Router();

router.get("/getTokens", creditCardController.getTokens.bind(creditCardController));
router.post("/GenerarToken", getCardType, creditCardValidator(), creditCardController.tokenizate.bind(creditCardController));
router.post("/VerificarToken", pkValidator, creditCardController.getCreditCard.bind(creditCardController));

// El uso más simple de bind() es hacer que una función que, sin importar cómo es llamada, siempre apunte al mismo objeto con la referencia this.
