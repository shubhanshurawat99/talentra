const express = require('express');
const router = express.Router();
const recruiterController = require('../controllers/recruiterController');
const { validateRecruiter } = require('../middleware/validation');

router.post('/', validateRecruiter, recruiterController.createRecruiter);

router.get('/', recruiterController.getAllRecruiters);

router.get('/:id', recruiterController.getRecruiterById);

router.patch('/:id/status', recruiterController.updateRecruiterStatus);

router.delete('/:id', recruiterController.deleteRecruiter);

module.exports = router;
