const Recruiter = require('../models/Recruiter');
const { addRecruiterEmailJob } = require('../services/emailQueue');

const recruiterController = {
  async createRecruiter(req, res) {
    try {
      // For now, bypass database but send email with timestamp
      const recruiterData = {
        ...req.body,
        createdAt: new Date() // Add timestamp for email
      };
      
      console.log('Recruiter data received:', recruiterData);
      
      // Send email notification
      await addRecruiterEmailJob(recruiterData, process.env.ADMIN_EMAIL);
      
      res.status(201).json({
        success: true,
        message: 'Employer form submitted successfully',
        data: { ...recruiterData, id: 'temp-id-' + Date.now() }
      });
    } catch (error) {
      console.error('Error submitting recruiter form:', error);
      res.status(500).json({
        success: false,
        message: 'Error submitting employer form',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  },

  async getAllRecruiters(req, res) {
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
      console.error('Error fetching recruiters:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching recruiters'
      });
    }
  },

  async getRecruiterById(req, res) {
    try {
      // Database bypassed - return not found
      res.status(404).json({
        success: false,
        message: 'Recruiter not found'
      });
    } catch (error) {
      console.error('Error fetching recruiter:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching recruiter'
      });
    }
  },

  async updateRecruiterStatus(req, res) {
    try {
      const { status } = req.body;
      
      if (!['pending', 'contacted', 'closed'].includes(status)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid status'
        });
      }

      // Database bypassed - return not found
      res.status(404).json({
        success: false,
        message: 'Recruiter not found'
      });
    } catch (error) {
      console.error('Error updating recruiter status:', error);
      res.status(500).json({
        success: false,
        message: 'Error updating recruiter status'
      });
    }
  },

  async deleteRecruiter(req, res) {
    try {
      // Database bypassed - return not found
      res.status(404).json({
        success: false,
        message: 'Recruiter not found'
      });
    } catch (error) {
      console.error('Error deleting recruiter:', error);
      res.status(500).json({
        success: false,
        message: 'Error deleting recruiter'
      });
    }
  }
};

module.exports = recruiterController;
