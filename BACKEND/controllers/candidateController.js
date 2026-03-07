const Candidate = require('../models/Candidate');

const candidateController = {
  async createCandidate(req, res) {
    try {
      // Bypass database for now, just process the data
      console.log('Candidate data received:', req.body);
      
      res.status(201).json({
        success: true,
        message: 'Candidate application submitted successfully',
        data: { ...req.body, id: 'temp-id-' + Date.now() }
      });
    } catch (error) {
      console.error('Error creating candidate:', error);
      
      if (error.code === 11000) {
        return res.status(400).json({
          success: false,
          message: 'Email already exists'
        });
      }

      res.status(500).json({
        success: false,
        message: 'Error submitting application',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  },

  async getAllCandidates(req, res) {
    try {
      // Database bypassed - return empty result
      res.status(200).json({
        success: true,
        data: [],
        pagination: {
          page: 1,
          limit: 10,
          total: 0,
          pages: 0
        }
      });
    } catch (error) {
      console.error('Error fetching candidates:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching candidates'
      });
    }
  },

  async getCandidateById(req, res) {
    try {
      // Database bypassed - return not found
      res.status(404).json({
        success: false,
        message: 'Candidate not found'
      });
    } catch (error) {
      console.error('Error fetching candidate:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching candidate'
      });
    }
  },

  async updateCandidateStatus(req, res) {
    try {
      const { status } = req.body;
      
      if (!['pending', 'reviewed', 'shortlisted', 'rejected'].includes(status)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid status'
        });
      }

      // Database bypassed - return not found
      res.status(404).json({
        success: false,
        message: 'Candidate not found'
      });
    } catch (error) {
      console.error('Error updating candidate status:', error);
      res.status(500).json({
        success: false,
        message: 'Error updating candidate status'
      });
    }
  },

  async deleteCandidate(req, res) {
    try {
      // Database bypassed - return not found
      res.status(404).json({
        success: false,
        message: 'Candidate not found'
      });
    } catch (error) {
      console.error('Error deleting candidate:', error);
      res.status(500).json({
        success: false,
        message: 'Error deleting candidate'
      });
    }
  }
};

module.exports = candidateController;
