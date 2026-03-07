const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidateController');
const upload = require('../middleware/upload');
const { validateCandidate } = require('../middleware/validation');

router.post('/', validateCandidate, candidateController.createCandidate);

router.get('/', candidateController.getAllCandidates);

router.get('/:id', candidateController.getCandidateById);

router.patch('/:id/status', candidateController.updateCandidateStatus);

router.delete('/:id', candidateController.deleteCandidate);

module.exports = router;
