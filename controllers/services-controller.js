const mongoose = require('mongoose')

const Service = require('../models/service')

// Create Service
const createService = async (req, res, next) => {
  const { name, description } = req.body
  const newService = new Service({
    name,
    description,
  })
  try {
    await newService.save()
  } catch (error) {
    console.log('error', error)
    return next(error)
  }
  res.status(201).json({ service: newService })
}

// Get All Services
const getServices = async (req, res, next) => {
  let services

  try {
    services = await Service.find()
  } catch (error) {
    console.log('error', error)
    return next(error)
  }
  res.json({
    services: services.map(service => service.toObject({ getters: true })),
  })
}

// Get Service by Id
const getService = async (req, res, next) => {
  let service

  try {
    service = await Service.findById(req.params.id)
  } catch (error) {
    console.log('error', error)
    return next(error)
  }
  res.json({ service: service.toObject({ getters: true }) })
}

// (Backlog) TODO: [ ] - Update Service ?

exports.createService = createService
exports.getServices = getServices
exports.getService = getService
