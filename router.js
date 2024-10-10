import { Router } from "express";
import * as rh from './requestHandler.js';

const router = Router();
router.route('/add').post(rh.addDonor);
router.route('/getdonors').get(rh.getDonors);
router.route('/getdonor/:id').get(rh.getDonor)
router.route('/update/:id').put(rh.update)
router.route('/delete/:id').delete(rh.deleteDonor);
export default router;
